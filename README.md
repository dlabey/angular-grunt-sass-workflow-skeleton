# Angular Grunt SASS Workflow Skeleton

This is an automated Angular Grunt SASS workflow skeleton created in order to assist developers
in getting setup for rapid Angular development using SASS. Feel free to fork it and do do any  
pull requests that may assist in an even faster workflow. The goal of this skeleton is to allow
developers to just worry about development and not have to go through the tasks of setting up their
workflow.

## Table of Contents

[Included Packages](#included-packages)  
[Installing Dependencies](#installing-dependencies)  
[Running Tasks](#running-tasks)  

### Included Packages

| Package               | Type                                              | Purpose                              |
| --------------------- | ------------------------------------------------- | ------------------------------------ |
| bower                 | Client-side Package Manager                       | Manage Client-Side Packages          |
| chai                  | JavaScript Assertion Library                      | JavaScript Test Assertions           |
| grunt                 | JavaScript Task Runner                            | JavaScript Task Runner               |
| grunt-contrib-concat  | Grunt Task                                        | Concatenates Files                   |
| grunt-contrib-connect | Grunt Task                                        | Provides Static Server               |
| grunt-contrib-jshint  | Grunt Task                                        | Enforces JavaScript Code Conventions |
| grunt-contrib-sass    | Grunt Task                                        | Compiles SASS                        |
| grunt-contrib-uglify  | Grunt Task                                        | Minifies JavaScript                  | 
| grunt-contrib-watch   | Grunt Task                                        | Monitors File Changes                |
| grunt-mocha           | Server-side Client-side JavaScript Test Framework | Testing                              |
| node                  | Server-side JavaScript Library                    | Server-side JavaScript               | 
| npm                   | Server-side Node Package Manager                  | Manage Server-side Packages          |
| sinon                 | JavaScript Spy Library                            | JavaScript Test Spies                |

### Installing Dependencies

#### Install Node

If you're on a Mac and have Homebrew run the following command from this projects root directory:  
`brew bundle`
   
Otherwise:  
[http://nodejs.org/download/](http://nodejs.org/download/)

#### Install Node Packages

Run the following command from this projects root directory:  
`npm install`

#### Install Bower Packages

Run the following command from this projects root directory:   
`bower install`

### Running Tasks

#### Grunt Development Workflow

This workflow gives you:  
* Static Server  
* Auto JS Lint Checking  
* Auto Headless Testing With Mocha, Chai and Sinon    
* Auto Concatenation  
* Auto SASS Compilation  

Run the following command from this projects root directory:   
`grunt`  

When you run this command you can access the contents of the public folder from:  
[http://0.0.0.0:8000](http://0.0.0.0:8000)

#### Testing

This runs headless testing using Mocha, Chai and Sinon.

Run the following command from this projects root directory:   
`grunt test`

#### Build (Production)

This concatenates, optimizes, and minifies JavaScript as well as compiles SASS.
 
 Run the following command from this projects root directory:   
 `grunt build`