pipeline{
    //Agent Lugar donde lo vamos a estar ejecutando
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/integration/**/**", description:"Ej: cypress/integration/pom/*.spec.js")
        choice(name:"BROWSER", choices: 'chrome' , description: "escoja un browser para ejecutar su script")
    }

    options{
        ansiColor('xterm')
    }
    stages{
        stage('Build'){
            steps{
                echo "Building application"
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress install"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying the application"
            }
        }
    }
    post{
        always{
            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: true, 
                reportDir: 'cypress\\reports', 
                reportFiles: 'index.html', 
                reportName: 'HTML Report', 
                reportTitles: 'Un ejemplo', 
                useWrapperFileDirectly: true
                ])                        
        }
    }
}