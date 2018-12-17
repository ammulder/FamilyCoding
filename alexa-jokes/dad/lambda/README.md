# Setup

## Local Machine Setup
1. Run Terminal for many of the rest of these commands
    1. Hit Command-Space and start typing `Terminal` and click `Terminal` when you see it in the list (or you can hit Enter if it's the first entry)
    1. When it opens a Terminal window, you can type `echo "Hello!"` and then Enter to make sure it's working
    1. As a side note, one of the original developer operating systems was UNIX.  One of the original command-line interfaces on UNIX was the Bourne shell.  (The "shell" is the thing that handles your typed commands in Terminal.)  When someone later decided to make a better shell than the Bourne shell, they called it the Bourne Again SHell, or BASH.  Which is why you may see "bash" from time to time in Terminal.  The most comparable thing on Windows is PowerShell.
1. Set up the source control tool Git:
    1. Run `git` from Terminal -- if it prompts to install the developer tools, then do it
    1. Run `git config --global user.name "John Doe"` but with your real name instead of John Doe
    1. Run `git config --global user.email johndoe@example.com` but with your real e-mail instead of that example one.  Make sure you remember whether you use dots in the e-mail address or not.
    1. Run `git config --global core.autocrlf input` to configure line endings (Windows and Mac/Linux use different characters to indicate the end of a line)
    1. Run `git config --global core.editor "emacs"` (You will curse me now, but thank me later.  At least half of that statement is true.)
1. Set up a source control account on GitHub (the cloud side of Git that we'll use)
    1. Go to GitHub.com in your browser
    1. On the front page on the right side, you can create an account.  Put in a username that's not too arrogant or offensive (it is going to be public), the EXACT SAME e-mail address you set for Git above, and a good-quality password, then hit `Sign up for GitHub`
    1. I don't want to sign up for a fake account just to see the rest of this process, so I'll document it when the first one of you goes through it. 
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

## Project Setup
1. Copy the initial code from GitHub down to your machine.
    1. In Terminal, create a directory to hold your coding projects.  I recommend calling it `dev` because it's shorter to type than `development` or `code` or whatever, but you can pick the name you like.  Run e.g. `mkdir dev` (mkdir creates a directory)
    1. Go to the new directory with `cd dev` (cd is "change directory")
    1. Use the Git command Clone to copy a code repository from the cloud to your machine.  It will remember where this code came from and let you synchronize them more or less any time you want.  Run `git clone https://github.com/ammulder/FamilyCoding.git family` to copy the code from the FamilyCoding repository on Git to a new directory called "family" on your machine.  Note that it actually creates a whole source code repository under the covers, but it looks to us like it just copied files down.
    1. Change to the directory "family" -- you can type `cd fam` and then hit `Tab`.  Tab is the auto-complete character in Bash.  If the first few letters you typed were enough to uniquely identify a program or file or directory, it will finish the name for you.  If not, it will do nothing, and you can hit tab again to see a list of all matching options.  It is much quicker to use Tab than to type out entire directory names.  When you hit it this time after f-a-m, it should have changed the command-line to `cd family` and you can hit Enter.
    1. Try tab-completion to change to the "alexa-jokes" directory and then the one with your name... for instance `cd a[TAB] [ENTER] cd c[TAB] [ENTER]` to change to `alexa-jokes` then `caelan`
    1. Try running `pwd` to "print working directory" see the name of the current directory you're in.  It might be something like `/Users/ammulder/dev/family/alexa-jokes/caelan`
1. Download and install the libraries you need to work with this code
    1. Make sure you're in the directory named after you, within the `family/alexa-jokes` project.  Remember, you can use `pwd` to check.
    1. Go one step farther into the `lambda` directory (e.g. `cd l[TAB] [ENTER]`)
    1. Run `nvm use` to set the version of Node you want to work with.  It should say `Found ... with version <lts/carbon>` and then `Now using node v8.11.2 (nom v5.6.0)` or something similar.
        * NOTE: this only worked because the initial code you copied included `.nvmrc` with the version of node listed that you should use.  We picked `lts/carbon` which refers to the 8.x Long-Term-Support version of Node, and best matches what the Lambda will run in when sent to AWS.  Remember, we previously ran `nvm install lts/carbon` to make sure we had that version installed on our machine.
    1. Run `npm install` to download the libraries we need, and the libraries THEY need, and then libraries THEY need... it will take a minute.  There will be WARN messages... ignore them for now.
        * NOTE: this only worked because the initial code you copied included a `package.json` file listing the libraries we need.  For future projects, you might need to start with `npm init` to create a `package.json` file, and `npm install --save ...` to install libraries and add them to the list in package.json... but I've done that much for you.
    1. Run `npm install -g gulp` to install a "global" version of Gulp.  That means you'll be able to run Gulp from any project that uses this particular version of Node.  (It's "global" to the version of Node, not to your whole machine.)  Gulp is the build tool that will do things like send our code to AWS.
 1. Set up the project
    1. Run `gulp lambda:init` to prepare a TypeScript Lambda project.
        * NOTE: this only worked because the code you copied included a `gulpfile.js` file that under the covers defined the `lambda:init` task.  And THAT only worked because the `package.json` includes a development-time dependency on a library called `aws-lambda-typescript`.  You can have a look at `package.json` by running `less package.json` in Terminal.  Use arrow keys to scroll and `Q` to quit.  ("less" is a file viewer)
    1. Make sure the code is working by running `gulp lambda:build`.  This will process it all and complain about any problems.  We're about to save our work to the cloud, and it's always best to make sure it works first!  That way other people don't download bad code, which might prevent them from doing the work they're trying to do.
1. Save your work to the cloud        
    1. Run `git status` to check what this has done to your code.  You should see five files listed under "Untracked files": `debug.js`, `index.ts`, `lambda-config.js`, `package-lock.json`, and `tsconfig.json`.  "Untracked" means that they're not in source control, so they won't be sync'd to GitHub.  Sometime you don't want a file in source control, but that's unusual -- in this case, we want to include those.
    1. Run `git add *.js *.ts *.json` to add all five files to source control.  Git add takes a list of files to add to source control.  In Bash, `*` is a wildcard, which matches any characters.  So `*.js` means "match any file whose name starts with any characters and ends with dot-j-s", which includes both `debug.js` and `lambda-config.js`.  You don't always WANT to use a wildcard -- you might not want to move, edit, or delete all those files at the same time -- but it saves time when you DO want to do something with a number of files at once.  Anyway, `*.js *.ts *.json` ends up producing a list like `debug.js gulpfile.js lambda-config.js index.ts package.json package-lock.json tsconfig.json tslint.json` and passes all those to `git add`.
        * NOTE: it added more files than just the five we meant -- there are a few others in that list.  But they were already in source control, and `git add` just ignores anything that's already been added.  So in this case, it's OK.
    1. Run `git status` again.  You should now see all five files listed as `new file:` instead of under `Untracked files`
    1. Run `git commit -a` (meaning, commit all).  "Commit" means "save forever".  However, so far it will only save to your LOCAL Git repository -- that is, to the source control on your machine.
    1. The commit command will have opened up a new screen to enter your commit message.  You are now in the Emacs text-file-editor (assuming you followed the directions way above).  You have to enter a message with each commit.  Type a message such as `Set up TypeScript project`
    1. To save your commit message and exit Emacs all at once, type `Control-X` then `Control-C` to exit Emacs.  It will ask you whether you want to save (along the bottom of the window), and you should hit `y`.  (If you hit `n` it will note that you have unsaved changes -- "modified buffers" -- and ask whether you really want to quit.  Then you can type yes or no, depending.)
    1. You should see a message that shows what was done (5 files added, etc.) and has a copy of your commit message.
    1. Now that your local changes are saved, try sending them up to the cloud with `git push`.  If that complains that the cloud has changes you haven't downloaded yet, run `git pull`.  Git pull brings down any pending changes.  It may bring up Emacs with a message pre-entered like `Merge changes ...` and you can just hit `Ctrl-X Ctrl-C y` to save and exit.  That's really a "commit" adding the updates from the cloud into your local repository.
    1. If you had to run a `git pull` first, then run `git push` again to make sure you have the code sent up.
    1. To double-check, look in your Web browser at https://github.com/ammulder/FamilyCoding/tree/master/alexa-jokes and then click the link with your name and see if the five new files are there.
