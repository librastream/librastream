### librastream_meteor_react

Hubstaff: https://app.hubstaff.com/organizations/158412/activities

Figma: https://www.figma.com/file/HXIuXi8fuuBbAPWDdcU6DJQL/Librastream.io?node-id=0%3A1

GitHub: https://github.com/librastream/librastream

-----
### Component
Header Component (Logo, Settings, Notifications, User Profile)
Overview Component (Search)
TransactionList Component (Pagination, TransactionItem)
TransactionItem Component
TransactionDetail Component
AddressCard Component (Header, AddressCardDetail, AddressCardQR)
AddressCardDetail Component
AddressCardQR Component

### variables for css
Helvetica Neue

header
    logo            20px #25233A h3 darkblue
    navbar_title    16px #33343D h4 gray
    profile
        name        15px #25233A darkblue
        occupation  12px #8B8C99 lightgray
searchbar
    title           14px #FFFFFF h5 white
    input:ph        12px #A7A9C0 light
    button          16px #FFFFFF h4 white
TransactionsList
    header
        title       14px #01058A h5 blue
        subtitle    10px #A7A9C0 light
    footer
        status      10px #25233A darkblue
        pagination
            button  12px #33343D h5 gray
            pages   12px #A7A9C0 h5 light

TransactionItem
    16px #25233A h4 darkblue

    14px #1AA8E9 h5 lightblue
    14px #33343D gray
    14px #1AA8E9 lightblue
    14px #33343D gray
    14px #33343D gray


### Report
1. Screen 1: declare font-color in input of SearchBar
2. Screen 1  clearly define font-weight & letter-spacing in header of TransactionsList
3. Screen 2: look different - `Approved` in QRCode & `Approved` of TransactionsList
4. Screen 3: `Transition Hash` font-weight in `Transition Details`

### issue 2
pm2 ecosystem_config: /home/ubuntu/ecosystem.config.js
Start and Daemonize any application:
$ pm2 start app.js

Load Balance 4 instances of api.js:
$ pm2 start api.js -i 4

Monitor in production:
$ pm2 monitor

Make pm2 auto-boot at server restart:
$ pm2 startup

To go further checkout:
http://pm2.io/

ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/home/ubuntu/.ssh/id_rsa):
Enter passphrase (empty for no passphrase): apple
Enter same passphrase again: apple
Your identification has been saved in /home/ubuntu/.ssh/id_rsa.
Your public key has been saved in /home/ubuntu/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:DYsTWIxjvu6eckwBAMiNwboal53JLVj0yPGrftVmtQ0 ubuntu@ip-172-31-33-236
The key's randomart image is:
+---[RSA 2048]----+
|Bo+  o.          |
|.+..*o.          |
|.  *.*. .        |
|.   * oo +  E    |
| . * *o.S... +   |
|o + O o.. + . .  |
|.o + o . o       |
|. . =..          |
|   *=.           |
+----[SHA256]-----+
