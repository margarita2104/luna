from random import randint

from django.core.mail import send_mail
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from registration.models import Registration
from registration.serializers import RegistrationSerializer, RegistrationValidationSerializer


class RegistrationView(GenericAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = []

    def post(self, request):
        code = randint(1000, 9999)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        send_mail(
            'Welcome to Luna',
            'Here is your registration code: {}'.format(code),
            'groskopftim05@gmail.com',
            ['{}'.format(request.data.get('email'))],
            fail_silently=False, )
        serializer.save(code=code)
        return Response(serializer.data)


class RegistrationValidationView(GenericAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationValidationSerializer
    permission_classes = []

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)
        return Response(status=status.HTTP_201_CREATED)
