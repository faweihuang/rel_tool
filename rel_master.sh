##项目代码目录(根据实际修改)
Web_Path="/data/www"
Project_Name=$1

pull_project(){
   cd ${Web_Path}/$Project_Name
   git checkout master
   git pull origin master
}

if [ $# -gt 0 ];then

   echo -e "release master $Project_Name"
   pull_project

else
   echo -e "Uage: [project name]\n"
fi
