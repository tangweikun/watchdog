# deploy

docker run -d \
    -e MONGO_URL='mongodb://twk：twk@ds115738.mlab.com:15738/twk' \
    -e ROOT_URL=http://127.0.0.1 \
    -v ~/github/watchdog/build:/bundle \
    -p 7344:80 \
    index.alauda.cn/jackkav/meteord:base
