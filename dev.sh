#!/bin/bash

# create session
SESSION='CRISPY'
tmux new-session -d -s $SESSION

# create windows
tmux rename-window -t $SESSION:0 'docker'
tmux new-window -t $SESSION:1 -n 'code'

sleep 1 # wait until shell has loaded on all panes

# send appropriate keys to each window
tmux send-keys -t $SESSION:0 'docker-compose -f nginx.yaml up' C-m
tmux send-keys -t $SESSION:1 'nvim' C-m

# attach
tmux a -t $SESSION
