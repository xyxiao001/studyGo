package main

import (
	"fmt"
	"os"
)

func main () {
	// 获取命令行输入的第一个参数
	var t = os.Args[1:][0]
	var headers = &Counter{}
	fmt.Println(t, headers)
}