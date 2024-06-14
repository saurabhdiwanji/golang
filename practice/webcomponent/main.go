package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
)

type UserInfo struct {
	loginId  string
	password string
}

var user UserInfo = UserInfo{loginId: "test@diwan.com", password: "password"}

func main() {
	registerRoutes()
	fmt.Println("Starting the server on http://localhost:8080/")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func registerRoutes() {
	fs := http.FileServer(http.Dir("./public"))
	http.Handle("/public/", http.StripPrefix("/public/", fs))

	http.HandleFunc("/", loginPage)
	http.HandleFunc("/login", loginPage)
	http.HandleFunc("/welcome", welcome)

	http.HandleFunc("/dnd", dnd)
}

func htmlHandler(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("index.html")
	t.Execute(w, nil)

}

func loginPage(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		u := r.FormValue("loginId")
		p := r.FormValue("password")
		_, err := validateUser(u, p)

		if err != nil {
			os.Exit(1)
		}

		http.Redirect(w, r, "/welcome", http.StatusFound)
	}

	t, _ := template.ParseFiles("./public/templates/login.html")
	t.Execute(w, nil)
}

func welcome(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("./public/templates/welcome.html")
	t.Execute(w, nil)
}

func dnd(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("./public/templates/dnd.html")
	t.Execute(w, nil)
}
