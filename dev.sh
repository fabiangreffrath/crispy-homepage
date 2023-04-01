#!/bin/bash

session='CRISPY'

# create session
tmux new-session -d -s $session

# docker
tmux rename-window -t 0 'docker'
tmux send-keys -t $session:0 'docker-compose -f nginx.yaml up' C-m

# code
tmux new-window -t $session:1 -n 'code'
tmux send-keys -t $session:1 'nvim' C-m

# attach
tmux a
