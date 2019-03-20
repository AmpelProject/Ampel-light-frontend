To test changes made to lc.html locally, 
the following is required to bypass CORS protection by common web-browsers.

This guide assumes that a folder called HU_TNS_MSIP exists in the Ampel-frontend repo root folder
and that is contains the config file channel.json.

1) Add the following line to your /etc/hosts (use sudo):
.. code-block::
  127.0.0.1	www-zeuthen.desy.de


IMPORTANT: remove this line after testing.

2) Create self-signed certificate for httpS:

- IMPORTANT: Common Name must be 'www-zeuthen.desy.de'
- This step is only required once

.. code-block::

    $ openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout newkey.key -out newkey.crt

    Generating a 2048 bit RSA private key
    ...........................+++
    .......................................................+++
    writing new private key to 'newkey.key'
    -----
    You are about to be asked to enter information that will be incorporated
    into your certificate request.
    What you are about to enter is what is called a Distinguished Name or a DN.
    There are quite a few fields but you can leave some blank
    For some fields there will be a default value,
    If you enter '.', the field will be left blank.
    -----
    Country Name (2 letter code) [AU]:de
    State or Province Name (full name) [Some-State]:
    Locality Name (eg, city) []:
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:dedew
    Organizational Unit Name (eg, section) []:
    Common Name (e.g. server FQDN or YOUR name) []:www-zeuthen.desy.de
    Email Address []:


3) Run python web server (file "test_webserver.py" in Ampel-frontend repo) :

- sudo is required because we listen to port 443 which is < 1024

.. code-block::
  cd PATH_TO_AMPEL_FRONTEND_REPO
  sudo python test_webserver.py 

4) Make sure you get the frontend config file *channel.json* (contact us) 
and place it in a folder named after your channel.
For example:

.. code-block::
  ls HU_TNS_MSIP/
  channel.json


5) Call the following URL in a browser (tested with firefox):
with updated _target_ and _channel_:

https://www-zeuthen.desy.de/lc.html?target=ZTF19aalbzoh&channel=HU_TNS_MSIP
and explicitely add a security exception for this page 
(FF will complain about self-signed certificate)
