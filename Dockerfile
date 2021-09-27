FROM fusuf/whatsasena:latest

RUN git clone https://github.com/BlackAmda/QueenAmdi /root/QueenAmdi
WORKDIR /root/QueenAmdi/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN npm install -g npm@7.24.1
CMD ["node", "bot.js"]
