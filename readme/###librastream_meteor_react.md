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
