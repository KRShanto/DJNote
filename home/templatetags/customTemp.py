from django import template 
from home.models import Group

register = template.Library()

@register.simple_tag
def test():
    
    return "<h1>Hello python</h1>"