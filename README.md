# Whatsapp-bot-with-chatGPT
## Usage:
  - git clone https://github.com/dharun-sukumar/Whatsapp-bot-with-chatGPT.git
  - cd Whatsapp-bot-with-chatGPT
  - npm install
  - In [.env](https://github.com/dharun-sukumar/Whatsapp-bot-with-chatGPT/blob/main/.env), change ```API``` to yout AIP key provided in OpenAi
  - npm start

## Working:
  - After the bot starts, it will show up a qr code which will be used to scan your second whatsapp nuber as bot
  - After a successfull scan, the terminal will show up a loading screen followed by a ```success``` message.
  - Then, you can ask any queries by texting the number you scanned before on a differnt whatsapp number.


## Modules:
  - whatsappweb.js
  - OpenAI
  - qrcode-terminal
  - dotenv

## Limitations:
  - The bot response may relatively slow.
  - It may not show typing... status,
  - It may produce additional unqueried responses.

## Contributions:
  Contributions are always welcomed!
  Make sure your commit is worth it.

## License:
Copyright 2022 Dharun S
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

        
  [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
