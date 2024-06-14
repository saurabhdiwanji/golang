package main

func validateUser(username string, pass string) (bool, error) {
	if username == user.loginId && pass == user.password {
		return true, nil
	}

	return false, nil
}
