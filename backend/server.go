package main

import (
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/signin", Signin)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
