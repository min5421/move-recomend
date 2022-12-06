from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

import config

db = SQLAlchemy()
migrate = Migrate()
from . import models
from . import auth_views, main_views


def create_app():
    app = Flask(__name__)
    app.config.from_object(config)

    # ORM
    db.init_app(app)
    migrate.init_app(app, db)

    # 블루프린트
    from . import main_views
    app.register_blueprint(main_views.bp)
    app.register_blueprint(auth_views.bp)

    return app
