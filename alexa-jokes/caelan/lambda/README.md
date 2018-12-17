# Setup

## Local Machine Setup
1. Run Terminal for many of the rest of these commands
    1. Hit Command-Space and start typing `Terminal` and click `Terminal` when you see it in the list (or you can hit Enter if it's the first entry)
    1. When it opens a Terminal window, you can type `echo "Hello!"` and then Enter to make sure it's working
    1. As a side note, one of the original developer operating systems was UNIX.  One of the original command-line interfaces on UNIX was the Bourne shell.  (The "shell" is the thing that handles your typed commands in Terminal.)  When someone later decided to make a better shell than the Bourne shell, they called it the Bourne Again SHell, or BASH.  Which is why you may see "bash" from time to time in Terminal.  The most comparable thing on Windows is PowerShell.
1. Set up the source control tool Git:
    1. Run `git` from Terminal -- if it prompts to install the developer tools, then do it
1. Install the code editor Visual Studio Code:
    1. Google for VSCode
    1. Click the `Download for Mac` button
    1. Double-click the file it downloaded
    1. Move the app that it created to the `Applications` directory (you will need to enter an administrator password)
    1. Hit Command-Space and start typing `Visual` and click `Visual Studio Code` when you see it in the list (or you can hit Enter if it's the first entry)
1. Install NVM to download and manage your versions of Node to run JavaScript apps on your machine
    1. Run `ls ~/.bash*` from Terminal.  If you don't see `.bash_profile` or `.bashrc` then run `touch .bash_profile` from Terminal
    1. Google for NVM
    1. Copy and paste the install command on the NVM page into Terminal to install NVM
    1. Hit `Command-N` to open a new Terminal window so it will see NVM.  (You can close the old Terminal window.)
    1. Run `nvm install lts/carbon` from the new terminal window
1. Install Homebrew (must be done as administrator), which will let you install additional software
    1. Google for Homebrew (all one word)
    1. Go to the result for the Mac package manager (not an alcoholic beverage), and copy and paste the install command there into a Terminal window to start the install
    1. Remember, that must be done as an administrator.  If it doesn't work, get an administrator to open their account and do it for you.
1. Install the AWS Command-Line Interface (CLI) that you'll use for your machine to control stuff in AWS
    1. Run `brew install awscli` from Terminal.  This will install the AWS CLI tool using Homebrew, which is a million times easier than trying to sort out the PIP/Python procedure they provide on the official installation page (given the oddball versions of Python on macOS)
    1. Run `aws` from Terminal and make sure it doesn't complain that the command wasn't found

## AWS Account Setup
1. Google for `AWS Console` and go there
1. Click `Create a free account`
1. Complete the account setup.  You will need an **e-mail address**, **credit card**, and working **cell phone** to receive a call
1. Once the account is set up, go back to the AWS Console if needed, and click `Sign In to the Console`
1. Under `Find services` type `IAM` and then click the IAM entry.  This is the "Identity and Access Management" section, where you create users and groups and permissions that things need to run.
1. Create a user with permissions to run the AWS Command-Line Interface (CLI):
    1. Click `Users` on the left then the `Add user` button on top
    1. Put in a name like `CLIAdmin` and check the box for `Programmatic access`
    1. Hit `Next: Permissions`
    1. Hit `Create group`
    1. Put in the Group name of `Administrators` and click the box to the left of `AdministratorAccess`
    1. Hit `Create group`
    1. Check the box to the left of `Administrators` and hit `Next: Tags`
    1. Hit `Next: Review`
    1. **Be Careful**: you must not leave the next screen before finishing the following steps!  Do not hit the forward/back buttons or close the browser window or reload the page or anything!
    1. Hit `Create user` and leave that screen open
    1. In Terminal, run `aws configure`
    1. When it asks for the AWS Access Key ID, copy and paste the visible Access Key ID from the browser window into Terminal (Command-C to copy, Command-V to paste).  Make sure you get the whole thing (from first character to last), and hit Enter
    1. When it asks for the AWS Secret Access Key, hit the "show" link on the browser window, to the right of where the Access Key ID was.  It should automatically highlight the Secret Access Key for you to hit Command-C, but if not, highlight it yourself and copy it.  Paste it into the terminal window.  Make sure the whole thing is there and then hit Enter.
    1. When it asks for the default region, enter `us-east-1` and hit Enter.
    1. Just hit Enter for the default output format question.
    1. In Terminal, run `aws iam list-groups` and make sure it doesn't complain (it should show some data including the 
    "GroupName" of "Administrators" for the group that you create a moment ago)
1. Create a Role with the permissions that your Lambda will need to run
    1. Click `Roles` on the left side of the IAM browser window (we're done with the user screen you were supposed to be careful with)
    1. Click `Create role`
    1. Click `Lambda` then `Next: Permissions`
    1. In the "Search" box next to "Filter policies" enter `lambda`
    1. Check the box to the left of `AWSLambdaBasicExecutionRole`
    1. Click `Next: Tags` then `Next: Review`
    1. Enter `AlexaLambda` for the Role Name and then hit `Create role`
1. Copy the initial code from GitHub down to your machine.