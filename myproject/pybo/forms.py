from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, EmailField
from wtforms.validators import DataRequired, Length, EqualTo, Email


class UserCreateForm(FlaskForm):
    username = StringField('USERNAME', validators=[DataRequired(), Length(min=3, max=25)])
    password1 = PasswordField('PASSWORD', validators=[
        DataRequired(), EqualTo('password2', 'Does not exist')])
    password2 = PasswordField('Check password again, please.', validators=[DataRequired()])
    email = EmailField('EMAIL', validators=[DataRequired(), Email()])


class UserLoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=3, max=25)])
    password = PasswordField('Password', validators=[DataRequired()])
