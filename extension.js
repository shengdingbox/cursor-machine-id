const vscode = require('vscode');
const os = require('os');
const path = require('path');
const fs = require('fs');

// 获取 Cursor 相关路径
function getCursorPaths() {
    const platform = os.platform();
    let basePath, packagePath, mainPath;

    switch (platform) {
        case 'darwin':
            basePath = '/Applications/Cursor.app/Contents/Resources/app';
            break;
        case 'win32':
            basePath = path.join(process.env.LOCALAPPDATA || '', 'Programs', 'Cursor', 'resources', 'app');
            break;
        case 'linux':
            // 检查多个可能的路径
            const linuxPaths = [
                '/opt/Cursor/resources/app',
                '/usr/share/cursor/resources/app'
            ];
            basePath = linuxPaths.find(p => fs.existsSync(p));
            if (!basePath) {
                throw new Error('在 Linux 系统上未找到 Cursor 安装路径');
            }
            break;
        default:
            throw new Error(`不支持的操作系统: ${platform}`);
    }

    packagePath = path.join(basePath, 'package.json');
    mainPath = path.join(basePath, 'out', 'main.js');

    return { packagePath, mainPath };
}

// 检查系统要求
function checkSystemRequirements(packagePath, mainPath) {
    const files = [packagePath, mainPath];
    
    for (const file of files) {
        if (!fs.existsSync(file)) {
            throw new Error(`文件不存在: ${file}`);
        }
        try {
            fs.accessSync(file, fs.constants.W_OK);
        } catch {
            throw new Error(`没有文件写入权限: ${file}`);
        }
    }
    return true;
}

// 版本检查
function checkVersion(version, minVersion = '', maxVersion = '') {
    const versionPattern = /^\d+\.\d+\.\d+$/;
    if (!versionPattern.test(version)) {
        throw new Error(`无效的版本号格式: ${version}`);
    }

    const parseVersion = (ver) => ver.split('.').map(Number);
    const compare = (v1, v2) => {
        const [a1, b1, c1] = parseVersion(v1);
        const [a2, b2, c2] = parseVersion(v2);
        if (a1 !== a2) return a1 - a2;
        if (b1 !== b2) return b1 - b2;
        return c1 - c2;
    };

    if (minVersion && compare(version, minVersion) < 0) {
        throw new Error(`版本号 ${version} 小于最小要求 ${minVersion}`);
    }

    if (maxVersion && compare(version, maxVersion) > 0) {
        throw new Error(`版本号 ${version} 大于最大要求 ${maxVersion}`);
    }

    return true;
}

// 修改 main.js 文件
function modifyMainJs(mainPath) {
    try {
        let content = fs.readFileSync(mainPath, 'utf8');
        
        // 备份原文件
        fs.writeFileSync(`${mainPath}.old`, content);

        // 执行替换
        const patterns = {
            'async getMachineId\\(\\)\\{return [^??]+\\?\\?([^}]+)\\}': 
                (match, p1) => `async getMachineId(){return ${p1}}`,
            'async getMacMachineId\\(\\)\\{return [^??]+\\?\\?([^}]+)\\}': 
                (match, p1) => `async getMacMachineId(){return ${p1}}`
        };

        for (const [pattern, replacement] of Object.entries(patterns)) {
            content = content.replace(new RegExp(pattern), replacement);
        }

        fs.writeFileSync(mainPath, content);
        return true;
    } catch (error) {
        throw new Error(`修改文件时发生错误: ${error.message}`);
    }
}

// 主函数
async function patchCursorGetMachineId() {
    try {
        // 获取路径
        const { packagePath, mainPath } = getCursorPaths();

        // 检查系统要求
        checkSystemRequirements(packagePath, mainPath);

        // 读取版本号
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        const version = packageJson.version;

        // 检查版本
        checkVersion(version, '0.45.0');

        // 修改文件
        modifyMainJs(mainPath);

        vscode.window.showInformationMessage('Cursor 补丁应用成功！');

        vscode.window.showInformationMessage('github: https://github.com/chengazhen/cursor-patch');
    } catch (error) {
        vscode.window.showErrorMessage(`错误: ${error.message}`);
        throw error;
    }
}

// 注册命令
function activate(context) {
    let disposable = vscode.commands.registerCommand('cursor-patch.patch', async () => {
        try {
            await patchCursorGetMachineId();
        } catch (error) {
            console.error(error);
        }
    });

    context.subscriptions.push(disposable);
}

module.exports = {
    activate
};
