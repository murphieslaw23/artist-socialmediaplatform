name: Automated Deployment
on: [push]
jobs:
  build:
    name: Run automated Deployment
    runs-on: ubuntu-latest
    steps:
      - name: ssh-action
        uses: appleboy/ssh-action@v0.1.6
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          password: ${{ secrets.PASSWORD }}
          script: |
            cd ~/upy/web
            chmod +x ./pull.sh
            ./pull.sh
            chmod +x ./deploy.sh
            ./deploy.sh