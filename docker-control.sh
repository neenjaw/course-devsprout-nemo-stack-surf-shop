#!/bin/bash

case "$1" in
  all)
    if [ "$2" -eq "up" ]
    then
      docker-compose up --build
    elif [ "$2" -eq "down" ]
    then
      docker-compose down
    fi
    ;;

  mongo)
    if [ "$2" == "up" ]
    then
      docker-compose -f docker-compose-mongo.yml up --build
    elif [ "$2" == "down" ]
    then
      docker-compose -f docker-compose-mongo.yml down
    fi
    ;;
esac