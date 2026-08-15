pipeline {
    agent any

    environment {
        NODE_ENV = 'jenkins'
        TEST_ENV = 'qa'
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm install'
                sh 'npx playwright install --with-deps chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test --project=chromium --reporter=list,junit'
            }
        }
    }

    post {
        always {
            echo 'Publishing test results...'
            junit 'reports/junit/results.xml'
            archiveArtifacts artifacts: 'playwright-report/**, reports/junit/**', fingerprint: true
        }
        failure {
            echo 'Playwright tests failed.'
        }
    }
}
