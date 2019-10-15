npm i
pm2 start app.js --name rel_tools --ignore-watch="./logs/* ./upload/* ./node_modules/* ./start.sh ./stop.sh ./install.sh" --watch
sleep 1
pm2 stop rel_tools
