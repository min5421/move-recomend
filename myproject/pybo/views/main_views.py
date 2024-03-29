from flask import Blueprint, url_for, render_template
from werkzeug.utils import redirect

bp = Blueprint('main', __name__, url_prefix='/')


@bp.route('/genres')
def index():
    return render_template('index.html')

@bp.route('/recommend')
def recommend():
    return render_template('recommend.html')
