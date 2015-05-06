package controllers;

import database.Database;
import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render("Discovery","Welcome to the Soundcloud Discovery Page!"));
    }

    public static void testDatabaseConnection() {
        Database db = new Database();
    }


}
