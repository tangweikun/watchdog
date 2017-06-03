# build

cd ../src
echo ${PWD}
echo "----build start----"
meteor build --architecture=os.linux.x86_64 ../build
echo "----build completed----"
