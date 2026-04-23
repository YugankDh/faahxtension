
const vscode = require('vscode');
const { exec } = require('child_process')
const path = require('path')
/**
 * @param {vscode.ExtensionContext} context
 * @param {string} selection
 */

function play_sound(context, selection) {
	const soundpath = path.join(context.extensionPath, 'sounds', `${selection}.mp3`)

	const platform = process.platform;

	let command;
	if (platform === 'win32') {
		command = `powershell -c Add-Type -AssemblyName presentationCore; $m = New-Object System.Windows.Media.MediaPlayer; $m.Open('${soundpath}'); $m.Play(); Start-Sleep -s 5`;
	} else if (platform === 'darwin') {
		command = `afplay "${soundpath}"`;
	} else {
		command = `aplay "${soundpath}"`; // linux
	}

	exec(command);
}

async function activate(context) {

	await vscode.workspace.getConfiguration('terminal.integrated.shellIntegration')
		.update('enabled', true, vscode.ConfigurationTarget.Global);

	if (vscode.window.terminals.length > 0) {
		vscode.window.showInformationMessage(
			'faahxtension: Please restart your terminal for error sounds to work.',
			'Open New Terminal'
		).then(selection => {
			if (selection === 'Open New Terminal') {
				vscode.commands.executeCommand('workbench.action.terminal.new');
			}
		});
	}

	console.log('Congratulations, your extension "faahxtension" is now active!');


	const disposable = vscode.commands.registerCommand('faahxtension.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from faahxtension!');
	});


	let selection = 'faaaah'

	let pick_sound = vscode.commands.registerCommand('extension.select_sound_effect', async () => {

		const options = ['mkb-aag', 'faaaah', 'chicken-on-tree', 'kyacheda', 'anime-ahh', 'auughhh']

		const picked = await vscode.window.showQuickPick(options, {
			placeHolder: 'Select an option from the list',
			canPickMany: false
		});

		if (picked) {
			selection = picked
			// vscode.window.showErrorMessage(`you selected ${selection}`)

		}

	})


	const error_check = vscode.window.onDidEndTerminalShellExecution(event => {
		// exitCode 0 = Success | Anything else = Error
		if (event.exitCode !== undefined && event.exitCode !== 0) {
			// vscode.window.showErrorMessage(`Command failed with exit code: ${event.exitCode}`);

			play_sound(context, selection)



		}
	});





	context.subscriptions.push(disposable, error_check, pick_sound);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
