package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render("LUL","Welcome to the Soundcloud Discovery Page!"));
    }

}
