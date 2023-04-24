from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products
@api_view(["GET"])
def GetProducts(request):
    return Response(products)

@api_view(['GET'])
def GetProduct(request,pk):
    product=None
    for i in products:
        print(type(i['_id']),type(pk))
        if i['_id']==pk:
            product=i
            break
    return Response(product)
