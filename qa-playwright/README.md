1. run
npm install @playwright/test --save-dev
2. install browsers
npx playwright install
3. run with ui
npx playwright test --ui
4. if you should install npm in some step, install it

🛠️ Troubleshooting: Execution Policy Error (Windows/PowerShell)
If you encounter the following error when running npx or other scripts in PowerShell:

npx : Cannot be loaded because running scripts is disabled on this system.
This is a Windows Security Policy issue, not a problem with Node.js or Playwright. PowerShell's default execution policy is set to 'Restricted'.

Resolution Steps
To allow npx and other locally created scripts to run, you must change the PowerShell Execution Policy.

1. Open PowerShell as Administrator
Search for "PowerShell" in the Windows Start Menu.

Right-click on "Windows PowerShell" or "Windows Terminal" and select "Run as administrator".

2. Change the Execution Policy
Run the following command in the Administrator PowerShell window. This setting is recommended for developers as it allows local scripts while blocking unsigned remote scripts.

PowerShell

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
3. Confirm the Change
Type Y (for Yes) and press Enter when prompted to confirm the execution policy change.

You can now close the Administrator window and retry your command (e.g., npx playwright test --ui) in your regular terminal.