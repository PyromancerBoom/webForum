package main

import (
	"database/sql"

	. "github.com/PyromancerBoom/webForum/internal"

	_ "github.com/lib/pq"
)

func main() {
	// Connect to PostgreSQL database
	db, err := sql.Open("postgres", "user=your_user password=your_password host=localhost dbname=your_database")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// Create Gin router
	router := SetupRouter()

	// Start server
	router.Run("127.0.0.1:8080")
}
