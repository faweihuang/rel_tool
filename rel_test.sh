##项目代码目录(根据实际修改)
Web_Path="/data/www"
Project_Name=$1

pull_project(){
   cd ${Web_Path}/$Project_Name
   git checkout test
   git pull origin test
}

if [ $# -gt 0 ];then

   echo -e "release test $Project_Name"
   pull_project

else
   echo -e "Uage: [project name]\n"
fi
