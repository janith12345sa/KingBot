FROM  ravindu01manoj/sewqueen:lovegift

RUN git clone  https://github.com/janith12345sa/KingBot.git  /root/KingBot/
WORKDIR  /root/KingBot/
ENV  TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit
      
CMD ["node", "king.js"]
