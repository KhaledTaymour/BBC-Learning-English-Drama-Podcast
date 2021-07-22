import React from "react";

const TranscriptContent = ({ currentSeriesName, currentEpisodeNumber }) => {
  let content = null;
  if (currentSeriesName === "The Race" && currentEpisodeNumber == 1) {
    content = (
      <div className="text" dir="ltr">
        <h3>The challenge is set</h3>
        <p>
          "Hello, I'm Phil. I'm about to face a challenge that could give me a
          great adventure – and a lot of money. What could it be? Find out now
          in episode one of The Race."
        </p>
        <h3>Transcript</h3>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Hello, I'm Phil.I live in London. My apartment is close to the
            Houses of Parliament and I can hear the bells of Big Ben chiming
            every hour. I live on bus route number 88 which is handy because it
            takes me to my office in Oxford Circus. What do I do? Well, I'm an
            author –I write books– but don't worry if you haven't heard of me,
            my books never sell – ever. In factI want a career changebecause I
            desperately need some money. When I pay all my bills, you see, I
            only have enough spare money to buy a few drinks at my local pub –
            The Horse and Groom. That reminds me – I've got to go there now to
            meet some friends. Excuse me, we'll speak again soon.
          </em>
        </p>
        <p>
          <strong>AT THE PUB</strong>
        </p>
        <p>
          <strong>
            John
            <br />
          </strong>
          Hello Phil. Late again!
        </p>
        <p>
          <strong>
            Emily
            <br />
          </strong>
          Hello Phil.How is your writing going?
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          You know. It's all in my head not on paper.
        </p>
        <p>
          <strong>
            Tom
            <br />
          </strong>
          Hi Phil, mate, how are you? We were just talking about travelling –
          Emily here, says she's climbed up Mount Everest! Rather extreme{" "}
          <strong>backpacking</strong>, don't you think?!
        </p>
        <p>
          <strong>
            Emily
            <br />
          </strong>
          I did do it. Five years ago. So come on John,what amazing thing have
          you done?
        </p>
        <p>
          <strong>
            John
            <br />
          </strong>
          Oh, I just went cycling across South America!
        </p>
        <p>
          <strong>
            Emily
            <br />
          </strong>
          You didn't!!
        </p>
        <p>
          <strong>
            John
            <br />
          </strong>
          I did. In my <strong>gap year</strong>. It was such a brilliant time.
          Four months on the road, although I did get a bit tired.
        </p>
        <p>
          <strong>
            Tom
            <br />
          </strong>
          Sounds great. Did I ever tell you that I sailed across the Atlantic to
          America in a yacht I built with my own hands? I still have that yacht
          down at the docks – but I never use it now. How about you Phil –when
          did you have your big life <strong>adventure</strong>?
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Oh me? I haven't done much really. I'm not really one for adventure.
        </p>
        <p>
          <strong>
            Emily
            <br />
          </strong>
          Why not?
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Err… I never had any money - andwhere would I go?
        </p>
        <p>
          <strong>
            John
            <br />
          </strong>
          Come on, you need some adventure in your life.Don't you feel like
          doing some <strong>globetrotting</strong>?
        </p>
        <p>
          <strong>
            Tom
            <br />
          </strong>
          Hey! I've got an idea!
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Tom has come up with a crazy idea where I could make some money and
            have some adventure. He has offered to lend me his yacht to sail
            around the world! Yeah – mad isn't it?! He thinks I could write
            about my adventures and make some money from it. But… I'm not
            someone who takes risks and I can definitely think of some problems…
          </em>
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Slight problem… I can't sail.
        </p>
        <p>
          <strong>
            Tom
            <br />
          </strong>
          No problem. There's an app you can download. It'll show you
          everything.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          An app? I'll need more than that. I've never sailed a yacht in my
          life.
        </p>
        <p>
          <strong>
            Tom
            <br />
          </strong>
          It's easy! And how about if I<em>give</em>you the boat – I'll never
          use it again - you can sell it when you get back. It'll earn you a
          fortune, on top of the money you get from your travel writing.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          I couldn't possibly keep your yacht. You might want to use it again
          one day.
        </p>
        <p>
          <strong>
            Tom
            <br />
          </strong>
          Hmmm yes, that's true.
        </p>
        <p>
          <strong>
            John
            <br />
          </strong>
          Iknow.Why don't you make it into a challenge?
        </p>
        <p>
          <strong>
            Tom
            <br />
          </strong>
          Yes, John! Great idea. I'll tell you what – I'll make you a bet.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Abet – for money –what is it?
        </p>
        <p>
          <strong>
            Tom
            <br />
          </strong>
          Do you remember that story by Jules Verne– when that guy, Phileas Fogg
          had to travel around the world in 80 days?
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Yes.
        </p>
        <p>
          <strong>
            Tom
            <br />
          </strong>
          Well, you've got to do it in 80 days. I bet you the boat that you
          won't do it. If you don't do it, I'll keep the boat.<em>If</em>you
          <em>do</em>sail around the world in 80 days, then you can keep the
          boat – and you can sell it if you want. He'll never do it!
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Hold on.How much have you had to drink?You want me to sail around the
          world, on my own, in 80 days?! Impossible.
        </p>
        <p>
          <strong>
            Tom
            <br />
          </strong>
          I know. But if you want an adventure – and you want to keep the yacht
          – then that's the challenge. Exactly 80 days to sail all the way
          around the world – not a minute longer.
        </p>
        <p>
          <strong>
            Emily
            <br />
          </strong>
          Go on Phil, it'll be brilliant. Here, have another drink…
        </p>
        <p>
          <strong>
            John
            <br />
          </strong>
          Yes, and have my drink too.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>What should I do?</em>
          <em>
            It is true I need an adventure but this one is huge. I know, I'll
            have a few more drinks and think about it…
          </em>
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          OK. Yes - I accept the challenge!
        </p>
        <h3>Vocabulary</h3>
        <p>
          <strong>
            gap year
            <br clear="none" />
          </strong>
          a year that you spend travelling, often with friends, usually after
          finishing school and before starting university. Some gap year
          travellers work while they are travelling, for example in bars and
          restaurants
        </p>
        <p>
          <strong>
            adventure
            <br clear="none" />
          </strong>
          an unusual, difficult and sometimes dangerous journey
        </p>
        <p>
          <strong>
            globetrotting
            <br clear="none" />
          </strong>
          travelling to lots of different countries
        </p>
        <p>
          <strong>
            backpacking
            <br clear="none" />
          </strong>
          travelling to and visiting lots of different countries, carrying
          everything that you need for your journey in a bag that you carry on
          your back
        </p>
        <p></p>
      </div>
    );
  } else if (currentSeriesName === "The Race" && currentEpisodeNumber == 2) {
    content = (
      <div class="text" dir="ltr">
        <h3>Start the clock!</h3>
        <p>
          "It's Phil here. You may know that I've been set a challenge to sail
          around the world in 80 days – it's an impossible challenge especially
          as I have never sailed a yacht before. But I said 'yes' – so here
          goes!"
        </p>
        <h3>Transcript</h3>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Hello again. It's Phil here. You may know that I've been set a
            challenge to sail around the world in 80 days – it's an impossible
            challenge especially as I have never sailed a yacht before. But I
            said 'yes' – so here it goes...
          </em>{" "}
        </p>
        <p>
          <strong>
            <span>
              Tom <br />
            </span>
          </strong>
          So, here we at Saint Catherine's Dock and look – here's my yacht{" "}
          <em>– The Mermaid</em> - I know she's a bit scruffy but I'm sure
          she'll get you round the world…
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          Hmm, on my own! That's the bit that worries me. It's a very small
          boat.
        </p>
        <p>
          <strong>
            <span>
              Tom <br />
            </span>
          </strong>
          It's a yacht – not a boat – look: it's got a sail! Anyway, you'll be
          fine. Just call me on the satellite phone if you have any problems.
        </p>
        <p>
          <strong>
            <span>
              PP <br />
            </span>
          </strong>
          Hello, hi. Phil. Phil! It's me.
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          Pete, what are you doing here?
        </p>
        <p>
          <strong>
            Phil<em> </em>
            <br />
          </strong>
          <em>
            Pete is my office assistant: He makes the tea, he does the
            photocopying, he sometimes gives me ideas for my books. He's a great
            guy – so I'm really pleased to see him now…
          </em>
        </p>
        <p>
          <strong>
            <span>
              PP <br />
            </span>
          </strong>
          Tom posted a message on Facebook that you're going on a trip round the
          world, or something. I couldn't believe my eyes – so I had to come
          here and see for myself. Look, I've brought you some books to read…
          and a map – you'll find that useful.
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          I will… but what I really need is a travelling companion… someone who
          can help me on my journey… someone like you?! How about it?
        </p>
        <p>
          <strong>
            <span>
              PP <br />
            </span>
          </strong>
          No. Absolutely not. I can't. I've got to… errr… feed the cat.
        </p>
        <p>
          <strong>
            <span>
              Tom <br />
            </span>
          </strong>
          I'll feed your cat. Go on. Can't you see he needs your help!
        </p>
        <p>
          <strong>PP </strong>
          <br />I get <strong>seasick</strong>…
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          Rubbish! I remember when you went sailing with your Dad – you were
          always fine.
        </p>
        <p>
          <strong>PP</strong>
          <span>
            {" "}
            <br />
          </span>
          That was different. We were sailing on a lake.
        </p>
        <p>
          <strong>Phil</strong>
          <span>
            {" "}
            <br />
          </span>
          Well, you know about sails and rope and anchors – you'd be great.
          Besides, if you come with me you can have a share of the money.
        </p>
        <p>
          <strong>
            <span>
              Tom <br />
            </span>
          </strong>
          If you get home in 80 days!
        </p>
        <p>
          <strong>
            Phil<em> </em>
            <br />
          </strong>
          <em>
            I'm pleased to report that Pete is joining me. I'm so pleased I have
            someone to 'show me the ropes', as it were – in other words, show me
            what to do. He's a good friend, a loyal assistant and he goes
            everywhere with me so I'm giving him the nickname 'Passepartout',
            just like in the original book, Around the World in Eighty Days – I
            hope he likes it!
          </em>
        </p>
        <p>
          <strong>
            Phil<em> </em>
            <br />
          </strong>
          <em>
            We've set sail. Our adventure has begun. Let me describe the yacht
            to you<strong>.</strong> It is 12 metres long. It has a huge mast,
            with the mainsail attached. There is an engine as well just in case
            there's no wind. The wooden deck has seating at the{" "}
            <strong>stern</strong> – that's the back.There are some steps down
            to the galley – that's the kitchen – and there are two{" "}
            <strong>berths</strong> or beds for us to sleep in. I can't believe
            we're going to live in this tiny space for 80 days!
          </em>
        </p>
        <p>
          <strong>
            <span>
              PP <br />
            </span>
          </strong>
          Phil, we've got the wind in our sails, we're making good progress. I
          can't even see land any more.
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          Yes. Thanks to you, it's <strong>plain sailing</strong>! So, what does
          this rope do?
        </p>
        <p>
          <strong>PP </strong>
          <br />
          It moves the <strong>jib</strong> – the sail at the front.
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          And this one?
        </p>
        <p>
          <strong>PP </strong>
          <br />
          That moves the boom from side to side. No, no. But don't pull it
          until…
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          Ouch! That hurt.
        </p>
        <p>
          <strong>
            Phil<em> </em>
            <br />
          </strong>
          <em>
            Day 5 and I'm learning how to sail but my best skills are in the
            galley, making tea. The weather is good but we seem to have a
            problem with the yacht…
          </em>
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          Passepartout, is it me or is it getting a bit wet down in the{" "}
          <strong>galley</strong>?
        </p>
        <p>
          <strong>
            <span>
              PP <br />
            </span>
          </strong>
          Let me have a look. Oh dear! There's water all over the floor. I think
          the boat is leaking.
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          What? What are we going to do?
        </p>
        <p>
          <strong>
            <span>
              PP <br />
            </span>
          </strong>
          Drown!
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          What? Really? I'm going to get on the radio and call for help… Mayday!
          Mayday! Oh no. The radio isn't working. We're in big trouble!
        </p>
        <p>
          <strong>
            <span>
              PP <br />
            </span>
          </strong>
          Be quiet. Calm down Phil. The radio isn't turned on – and we don't
          need to abandon ship just yet. I need to know where this water is
          coming from. It's only a slow leak but I think we need to fix it
          quickly. We need to head for dry land.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            According to the map the nearest land is some islands at 16 degrees
            north, 24 degrees west. Do you know where that is? Let's hope we get
            there before we sink.
          </em>
        </p>
        <h3>Vocabulary</h3>
        <p>
          <strong>
            <span>
              seasick
              <br />
            </span>
          </strong>
          feeling ill, vomiting or feeling you are going to vomit or be sick
          because of the movement of the ship or boat you are travelling in
        </p>
        <p>
          <strong>
            <span>
              stern
              <br />
            </span>
          </strong>
          the back end of a ship or boat
        </p>
        <p>
          <strong>
            <span>
              galley
              <br />
            </span>
          </strong>
          the kitchen in a ship, boat or plane
        </p>
        <p>
          <strong>
            <span>
              berths
              <br />
            </span>
          </strong>
          beds in a ship, boat or train
        </p>
        <p>
          <strong>
            <span>
              plain sailing
              <br />
            </span>
          </strong>
          an expression that means a job or task is going well, easily, without
          problems
        </p>
      </div>
    );
  } else if (currentSeriesName === "The Race" && currentEpisodeNumber == 3) {
    content = (
      <div class="text" dir="ltr">
        <h3>Any port in a storm</h3>
        <p>
          "We're in the Cape Verde islands and, no, we didn't sink! We have made
          it to port. Unfortunately, we can't stay here for long – we are in a
          race after all, around the world!"
        </p>
        <h3>Transcript</h3>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Day 7 – we're in the Cape Verde islands and, no, we didn't sink! We
            have made it to port. There was a small hole in the tanks that store
            our drinking water and someone is now fixing it. But I'm glad we
            stopped here–{" "}
            <strong>the islands here are like another world</strong> – green,
            lush, warm and sunny –{" "}
            <strong>not like the concrete jungle we left at home</strong>.
            Unfortunately, we can't stay here for long – we are in a race after
            all, around the world. There's just time to take a 'selfie' to send
            back to my friends (click) – oh and I must just log on and check my
            emails…
          </em>
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          So there's an email from John who says… he hopes our trip is going
          well… and to remind me, that as part of the challenge, I have to bring
          back some rare, unusual souvenirs – and he wants a recording of some
          traditional music. Hmmm, what could that be?
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Phil, everything is fixed. I've filled up with drinking water. It
          didn't cost much and the chap who fixed it gave me this CD – something
          for us to listen to on the yacht.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          What is it?
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          I don't know. It's just a CD of the local <em>Morna</em> music.
        </p>
        <p>
          <strong>Phil</strong>
          <br />
          <strong>What does it sound like?</strong>
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          He said <strong>it's a bit like blues music</strong>. Have a listen.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          That's brilliant Passepartout! What would I do without you?!
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Day 10 – and I'm out in the Atlantic Ocean – and what a big ocean it
            is when you look at it from our small yacht, The Mermaid. It is
            miles and miles of blue and grey water with nothing to see on the
            horizon. But we've got a good tail wind and we seem to be making
            good progress. Passepartout is at the wheel, steering our yacht to
            our next destination – St Helena. I'm helping out by making tea…
          </em>
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          Cup of tea, Passepartout?
        </p>
        <p>
          <strong>
            <span>
              PP <br />
            </span>
          </strong>
          More tea! OK then, it will help me concentrate. The sea is getting
          quite rough and I need your help up here on deck…<strong></strong>
        </p>
        <p>
          <strong>
            RADIO MESSAGE:
            <br />
          </strong>
          <em>
            Attention all shipping. A deep depression is forming in the South
            Atlantic, moving north. Severe gale force 11 winds are expected with
            heavy rain
          </em>
          . <em>Visibility will be poor.</em>
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Strong wind. Heavy rain. Sounds nasty. We're going to have to change
          direction. Get your waterproof clothes on – we're in for a wet and
          bumpy ride…
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            The weather is already getting bad. The wind is very strong and the
            rain is hammering down and stinging our faces. Not my favourite
            weather – I prefer the calm, warm, sunny type. But we have no choice
            – we need to find shelter. Passepartout says we should go to some
            islands at 0.3 degrees north, 6.6 degrees east. Where could that be?
            And will we make it before the storm gets us? This was a dream trip
            – and suddenly <strong>it’s like a nightmare</strong>
          </em>
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Phil what are you doing? Hold onto that rope. Don't let go or we'll
          lose the sail.
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          OK. It's getting very dark. Do you know which way to go?
        </p>
        <p>
          <strong>
            <span>
              PP <br />
            </span>
          </strong>
          Yes – of course I do – we do have a satellite navigation system.
          According to this, we're not too far from the coast – but I can't see
          anything.
        </p>
        <p>
          <strong>Phil</strong>
        </p>
        <p>
          Look! I can see lights of Sao Tome. Is that a lighthouse? Is it a
          harbour?
        </p>
        <p>
          <strong>
            <span>
              PP <br />
            </span>
          </strong>
          Yes. I think it is… but I don't know how we're going to land in these
          stormy seas. We're just going to hit the rocks.
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          Hey look! There's someone on the harbour wall waving their arms. Let's
          get closer… Is it a mermaid?
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          A mermaid? She has legs.
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Over here. Quick! Throw me the rope.
        </p>
        <p>
          <strong>Phil</strong> <br />
          <em>
            Phew. What luck! We're on dry land, safe from the storm and it’s all
            thanks to the help of a woman who lives on the island. She's invited
            us to her house to dry off and warm up. But are we in the right
            place?
          </em>
        </p>
        <p>
          <strong>Phil</strong>
          <span>
            {" "}
            <br />
          </span>
          Thanks so much for helping us – you saved our boat – and our lives.
        </p>
        <p>
          <strong>Sophia</strong>
          <span>
            {" "}
            <br />
          </span>
          My name is Sophia. I'm happy to have helped. Here you are – try some
          bobofrito and a cup of hot chocolate.
        </p>
        <p>
          <strong>PP</strong>
          <span>
            {" "}
            <br />
          </span>
          Mmm, nice. <strong>They taste like banana</strong>.
        </p>
        <p>
          <strong>Sophia</strong>
          <span>
            {" "}
            <br />
          </span>
          That's what they are – bobofrito is banana fried in coconut oil. Do
          you like it?
        </p>
        <p>
          <strong>
            <span>
              Phil <br />
            </span>
          </strong>
          Do I like it? It’s amazing… just… let… me get some more… Mmmm…
        </p>
        <p>
          <strong>Sophia</strong>
          <span>
            {" "}
            <br />
          </span>
          So tell me, what are you guys doing here?
        </p>
        <p>
          <strong>PP</strong>
          <span>
            {" "}
            <br />
          </span>
          We're sailing round the world but we needed to shelter from the storm.
          We were heading for St Helena… is that right, Phil?
        </p>
        <p>
          <strong>Phil</strong>
          <span>
            {" "}
            <br />
          </span>
          What? Oh yes, that's right. Sorry, I was enjoying this delicious hot
          chocolate. It tastes great too.
        </p>
        <p>
          <strong>Sophia</strong>
          <span>
            {" "}
            <br />
          </span>
          It's made with our finest cacao beans. It's what Sao Tome and Principe
          is famous for.
        </p>
        <p>
          <strong>Phil</strong>
          <span>
            {" "}
            <br />
          </span>
          Cacao beans! That's great because they are one of the things I have to
          collect as part of my challenge. Can I take some with me?
        </p>
        <p>
          <strong>Sophia</strong>
          <span>
            {" "}
            <br />
          </span>
          Your challenge?
        </p>
        <p>
          <strong>PP</strong>
          <span>
            {" "}
            <br />
          </span>
          Yes, we're sailing around the world from London back to London in 80
          days. It's a stupid idea, isn't it?
        </p>
        <p>
          <strong>Sophia</strong>
          <span>
            {" "}
            <br />
          </span>
          Hmm, well maybe not. Actually, you can have a bag of these beans if
          you can do me a favour?
        </p>
        <p>
          <strong>Phil</strong>
          <span>
            {" "}
            <br />
          </span>
          I'm sure we can help you.<strong></strong>
        </p>
        <p>
          <strong>
            Phil <br />
          </strong>
          <em>
            Sophia has told me she was also sailing around the world when she
            stopped in Sao Tome for a rest and ended up falling in love with a
            man who she then married. But her husband has started being cruel to
            her and she wants to leave the island and go home. Because she's got
            no money, she wants us to give her a lift back to Britain. The long
            way round! She is an experienced sailor, so how can we refuse? There
            is only one problem – we'll need to work out how she can escape
            without her husband noticing.This is exciting stuff!
          </em>
        </p>
        <h3>Vocabulary</h3>
        <p>
          <strong>
            <span>
              menacing
              <br />
            </span>
          </strong>
          scary, threatening
        </p>
        <p>
          <strong>
            <span>
              depression
              <br />
            </span>
          </strong>
          (in weather) an area where the air pressure is low, bringing cold and
          wet weather
        </p>
        <p>
          <strong>
            <span>
              gale force
              <br />
            </span>
          </strong>
          strong and damaging (wind)
        </p>
        <p>
          <strong>
            <span>
              waterproof
              <br />
            </span>
          </strong>
          does not allow water in; is not damaged by water
        </p>
        <p>
          <strong>
            <span>
              shelter
              <br />
            </span>
          </strong>
          to find or stay in place where a person or thing is protected from bad
          weather
        </p>
      </div>
    );
  } else if (currentSeriesName === "The Race" && currentEpisodeNumber == 4) {
    content = (
      <div class="text" dir="ltr">
        <h3>All at sea!</h3>
        <p>
          "It's day 15. We're in Sao Tome and trying to smuggle our new friend
          Sophia off the island and onto our boat. She wants to escape from her
          violent husband and return to her home in the UK. I'm always happy to
          help someone in distress. But there's no time to hang around – I only
          have 65 days left to sail around the world."
        </p>
        <h3>Transcript</h3>
        <p>
          <strong>
            Phil <br />
          </strong>
          <em>
            Day 15 – we're in Sao Tome and trying to smuggle our new friend
            Sophia off the island and onto our boat. She wants to escape from
            her violent husband and return to her home in the UK. I'm{" "}
            <strong>always</strong> happy to help someone in distress and my
            reward for doing so is a bag of top quality cacao beans – something
            I have to collect as part of my challenge. But there's no time to
            hang around – I only have 65 days left to sail around the world, and
            I'm not sure if Passepartout wants an extra passenger…
          </em>
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Phil, I don't <strong>often</strong> complain but I'm not sure if
          we've got room for another passenger. I mean, have we got enough food?
          Where will she sleep? And can she sail?
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Keep your voice down… we can't leave her here – she's very upset.
          Sssh, look, here she comes. Sophia, over here… get inside this crate
          and we'll smuggle you onto the yacht. And if anyone asks us what we're
          doing, we can say we're loading up with supplies for our journey. In
          you get. Come on Passepartout, you can carry it; I'll keep a look out.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Thanks!
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Well, we did it. We now have a stowaway and despite Passepartout's
            doubts, Sophia seems to know about sailing because, like us, she was
            sailing around the world. I think it'll be fun having an extra
            person on board. I just hope Passepartout agrees…
          </em>
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Sophia – you need to let the sail out a bit more – loosen that rope…
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          No, I don't think so. Wait until we 'go about' and then I'll do it;
          otherwise the wind will take us in the wrong direction.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Ha ha Passepartout! I think you've met your match. Anyway, what's our
          best route from here?
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          We've got to go around the Cape of Good Hope. It's{" "}
          <strong>always</strong> a tricky bit of water. Plenty of ships have
          got caught in the strong currents and gone onto the rocks.
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          If you allow me to steer, I can safely navigate us through these
          dangerous waters.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          I think that's a great idea – don't you Passepartout? I'll put the
          kettle on and make some tea.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Day 22 – we've crossed the Equator and we're rounding the Cape of
            Good Hope. The sea is rough: the waves are like the huge hands of a
            monster trying to grab us. If we can get through this, we'll be out
            into the Indian Ocean and we will head for Indonesia. Sophia is
            doing a great job steering the yacht and Passepartout is busy
            looking after the ropes and sails. I'm downstairs in the galley
            writing this – I don't think I'm much help on deck you see. I'll see
            what our exact position is now on the satnav… oh, that's strange…
            the screen is blank… I can <strong>usually</strong> see where we are
            and our coordinates. What's wrong with it?
          </em>
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Passepartout, the navigation system isn't working.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          What? Let me have a look… Hmmm, very strange… everything else is
          working… let me just turn it on and… off again… that{" "}
          <strong>usually</strong> helps… No good.
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Is there a problem?
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          We can't get the satnav to work – the screen is just blank. If we
          don't get it working again we're going to be lost at sea – we won't
          know where we're going.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          I'll take a look at the fuse box. Phil, you need to help up on deck
          and… woooah…
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            A huge wave has hit us. I'm ok, thankfully, but Passepartout has
            knocked his head badly. The satnav is broken and we're not sure what
            direction we're heading in. This is a bad, bad situation. If we go
            in the wrong direction we could lose days and we'll{" "}
            <strong>never</strong> win this race.
          </em>
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Phil! Phil! I need your help. Passepartout is in a bad condition -
          look, he's got a huge cut on his head – he's bleeding badly. I need
          your help to keep us on course through these huge waves.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          OK. But we need to find land soon and get Passepartout to a hospital.
          But which direction do we go?
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Well, the sun always sets in the west – so that way must be east. And
          when it gets dark we can follow the stars. You steer that way and I'll
          sort out the sails. And Phil…
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          … yes?
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          You're doing really well.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Oh… gosh, thanks.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            I'm beginning to like our new travelling companion. But I'm worried
            – we don't know where we're heading and Passepartout needs medical
            help. We've got to find land, but where? We're miles from anywhere.
            I'm beginning to wonder why I agreed to this stupid challenge.
          </em>{" "}
          <em>I've never missed home as much as now.</em>
        </p>
        <h3>Vocabulary</h3>
        <p>
          <strong>
            <span>
              go about
              <br />
            </span>
          </strong>
          (a sailing term) turn and sail in the opposite direction
        </p>
        <p>
          <strong>
            <span>
              steer
              <br />
            </span>
          </strong>
          control the direction of movement of a vehicle such as a boat, car or
          bicycle
        </p>
        <p>
          <strong>
            <span>
              navigate
              <br />
            </span>
          </strong>
          find a route across an area of land or water, often using a map
        </p>
        <p>
          <strong>
            <span>
              satnav
              <br />
            </span>
          </strong>
          short for 'satellite navigation': a piece of technology that uses
          satellites to find the best way to get to a place
        </p>
        <p>
          <strong>
            <span>
              on course
              <br />
            </span>
          </strong>
          going in the right direction
        </p>
      </div>
    );
  } else if (currentSeriesName === "The Race" && currentEpisodeNumber == 5) {
    content = (
      <div class="text" dir="ltr">
        <h3>All at sea!</h3>
        <p>
          "We've just missed being hit by a huge container ship. We're all so
          tired and we didn't see it coming. We've been at sea for several days
          and without our satellite navigation system it's hard to know which
          way we're going. Passepartout needs medical help - and we have to get
          more food supplies. We must find land soon."
        </p>
        <h3>Transcript</h3>
        <p>
          <strong>
            All
            <br />
          </strong>
          Wooah! Watch out!
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          That was close.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Day 35 - we've just missed being hit by a huge container ship. We're
            all so tired and we didn't see it coming. We've been at sea for
            several days and without our satellite navigation system it's hard
            to know which way we're going. Passepartout needs medical help and{" "}
            <strong>we</strong> <strong>have to</strong> <strong>get</strong>{" "}
            more food supplies. <strong>We</strong> <strong>must</strong>{" "}
            <strong>find</strong> land soon…
          </em>
        </p>
        <p>
          <strong>
            Sophia
            <br />
          </strong>
          Land ahoy!
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Land? Really? At last! Come on. Let's head for the harbour and find a
          hospital quickly.
        </p>
        <p>
          <strong>
            Passepartout
            <br />
          </strong>
          Oh, my head.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            We're on dry land. It's such a great feeling after just looking at
            endless water day after day. But where are we? People are speaking
            French and there's a wonderful smell of fresh coffee in the air.
            Anyway, we mustn’t waste any more time. Sophia is taking
            Passepartout to a hospital to see a doctor about the cut on his
            head. <strong>I</strong> <strong>have to</strong>{" "}
            <strong>get</strong> our satnav fixed and purchase some more
            supplies for the next leg of our journey. And <strong>I</strong>{" "}
            <strong>must</strong> <strong>take</strong> some photographs too to
            put on my travel blog. But wait a minute, I don't know where I am!
            Time for a walk I think…
          </em>
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Excuse me young man – that coffee smells wonderful.
        </p>
        <p>
          <strong>
            Man
            <br />
          </strong>
          Oh this is <em>Bourbon Pointu</em> coffee. It's the best in the world
          and you can only get it here.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          And where is here?
        </p>
        <p>
          <strong>
            Man
            <br />
          </strong>
          Reunion Island.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Reunion Island! So that's where we are. Goodness, we really have gone
          off course!
        </p>
        <p>
          <strong>
            Man
            <br />
          </strong>
          Where are you heading?
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          We're supposed to be sailing around the world – but we got lost when
          our satnav broke.
        </p>
        <p>
          <strong>
            Man
            <br />
          </strong>
          Oh <strong>you</strong> <strong>don't have to</strong>{" "}
          <strong>worry</strong> about that, my brother fixes gadgets. I'm sure
          he can help. Let me take it for you and if you come back at 4 o'clock
          it will be ready. Hopefully!
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Brilliant. And while I'm here can I buy some of those beans?
        </p>
        <p>
          <strong>
            Man
            <br />
          </strong>
          Sure. Here, take some coffee beans as a present from me to you – and
          remember your visit to Reunion.
        </p>
        <p>
          <strong>Phil</strong>
          <br />
          <strong>
            <em>I</em>
          </strong>{" "}
          <em>
            <strong>had to bring</strong> home some unique and special coffee
            beans as part of the challenge, so this is gift is perfect. But we
            have a long way to go; <strong>we</strong> <strong>mustn't</strong>{" "}
            <strong>waste</strong> any more time. <strong>I</strong>{" "}
            <strong>must</strong> <strong>get on</strong> with the shopping,
            wait for our satnav to be fixed and hope that Passepartout will be
            ok.
          </em>
        </p>
        <p>
          <strong>
            Sophia
            <br />
          </strong>
          Phil, Phil… we're back. Passepartout has got some stitches in his
          head. But I think he'll be fine…
        </p>
        <p>
          <strong>
            Passepartout
            <br />
          </strong>
          Oh will I? You're the expert now? Maybe if you leave me to sail our
          yacht we won't have any more little accidents?
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Come on Passepartout, let's all try to get on shall we? I know how
          useful you are – but Sophia got us safely through to Reunion. Come
          along – let's all be friends. OK?
        </p>
        <p>
          <strong>
            Passepartout
            <br />
          </strong>
          OK then. How's the satnav?
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          It's fixed and it didn't cost much. Look, if I switch it on… I can
          tell you exactly where we are: 21 degrees south, 55 degrees east.
        </p>
        <p>
          <strong>
            Sophia
            <br />
          </strong>
          Impressive!
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Yes, and look, I've got some special coffee to take home. Bourbon
          Pointu.
        </p>
        <p>
          <strong>
            Sophia
            <br />
          </strong>
          Another one of your 'souvenirs'! Come on, <strong>we</strong>{" "}
          <strong>must get going</strong> – the weather forecast says there's a
          big storm coming and <strong>we have to avoid</strong> it.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Yes, good idea. We can't waste any more time. Let's get back to the
          harbour. Passepartout, could you carry these bags of food please…
          they're… quite heavy.
        </p>
        <p>
          <strong>
            Sophia
            <br />
          </strong>
          Isn't this where we left the yacht – between these two other boats?
        </p>
        <p>
          <strong>
            Passepartout
            <br />
          </strong>
          Are you sure Sophia? We did arrive in a rush.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          No, it was definitely here. In fact – look – these are our ropes.
          They've been cut. I don't believe it but I think our yacht has been
          stolen.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Stolen! It couldn't get any worse. We're stuck halfway around the
            world with no yacht. There is no way we can get round the world in
            80 days now. We've got to find our yacht – but where is it?
          </em>
        </p>
        <h3>Vocabulary</h3>
        <p>
          <strong>supplies</strong>
          <br />
          (here) food and other things you must have for daily living
        </p>
        <p>
          <strong>purchase</strong>
          <br />
          buy something
        </p>
        <p>
          <strong>complimentary</strong>
          <br />
          given for free
        </p>
        <p>
          <strong>supplies</strong>
          <br />
          (here) food and other things you must have for daily living
        </p>
        <p>
          <strong>purchase</strong>
          <br />
          buy something
        </p>
        <p>
          <strong>complimentary</strong>
          <br />
          given for free
        </p>
        <p>
          <strong>
            souvenirs
            <br />
          </strong>
          things you buy on a trip or holiday to help you remember your visit
        </p>
        <p>
          <strong>cost an arm and a leg</strong>
          <br />
          was very expensive
        </p>
      </div>
    );
  } else if (currentSeriesName === "The Race" && currentEpisodeNumber == 6) {
    content = (
      <div class="text" dir="ltr">
        <h3>Find our yacht!</h3>
        <p>
          "Disaster! Our yacht has been stolen. We were on Reunion Island when
          someone cut the ropes and took it. Where is it – and how are we going
          to find it? Does this mean we're going to lose the race?"
        </p>
        <h3>Transcript</h3>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Day 38 – Disaster! Our yacht has been stolen. We were on Reunion
            Island when someone <strong>cut</strong> the ropes and{" "}
            <strong>took</strong> it. Where is it – and how are we going to find
            it? Does this mean we're going to lose the race?
          </em>
        </p>
        <p>
          <strong>
            PP
            <br />
          </strong>
          Well that's it then. We might as well give up and go home.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          We can't stop now – we're having so much fun. And anyway, we can't go
          home without our yacht. Oh look, there's that man who gave me the
          coffee beans. Maybe he can help…
        </p>
        <p>
          <strong>
            Man
            <br />
          </strong>
          Hello, how's the satnav now? All working?
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Well, err, yes – it's working, thank you very much. But we have
          another slight, little problem. We haven't got a yacht to put it on
          anymore.
        </p>
        <p>
          <strong>
            Man
            <br />
          </strong>
          Really?
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Yes, I'm afraid so. It looks like it's been <strong>stolen</strong>…
          you know, <strong>pinched</strong>… <strong>nicked.</strong>
        </p>
        <p>
          <strong>
            Man
            <br />
          </strong>
          Surely not. This sort of thing doesn't happen around here. It must be…
          pirates!
        </p>
        <p>
          <strong>
            Sophia
            <br />
          </strong>
          Pirates! Real-life pirates?
        </p>
        <p>
          <strong>
            Man
            <br />
          </strong>
          Yes, they do exist but they’re not like the pirates in stories. They
          will steal almost anything and they are very, very dangerous. But we
          must get your boat back so let's hope these pirates aren't too bad.
          Come on, let's use my fishing boat and go looking for your missing
          yacht. They can't be very far away.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            The man who <strong>gave</strong> me the coffee beans is taking us
            out to sea in his fishing boat. But how are we going to find our
            yacht? Pirates are lawless and will do anything to protect their
            bounty – but why does it have to be our yacht? Oh, it could be
            anywhere now. But hold on… what is it? I think Passepartout has seen
            something…
          </em>
        </p>
        <p>
          <strong>
            PP
            <br />
          </strong>
          Over there, look! That's our yacht… and I think I can see one… two
          people on board. Let's hope they haven't sabotaged our yacht.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          What are we going to do? We don't want to get too close – they might
          have guns.
        </p>
        <p>
          <strong>
            Man
            <br />
          </strong>
          OK, we need to slow down and approach carefully. Let me just look
          through my binoculars to see if they have guns… hold on! They look
          familiar.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Do you know them?
        </p>
        <p>
          <strong>
            Man
            <br />
          </strong>
          Errr… yes! I do.
        </p>
        <p>
          <strong>
            Sophia
            <br />
          </strong>
          Are they dangerous?
        </p>
        <p>
          <strong>
            Man
            <br />
          </strong>
          Absolutely not. They are not fearsome pirates: I used to play with
          them in the island football team. They <strong>
            didn’t score
          </strong>{" "}
          any goals then and they're not going to sabotage your journey now.
          Come on, let's get your boat back.
        </p>
        <p>
          <strong>
            PP
            <br />
          </strong>
          It's a yacht!
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            We've caught up with our yacht – The Mermaid – and the would-be
            pirates have given it back to us, and we <strong>got</strong> an
            apology. These guys <strong>were</strong> 'joyriders' – they{" "}
            <strong>stole</strong> our boat just for a bit of fun – luckily they{" "}
            <strong>didn’t cause</strong> much damage but they've almost ruined
            our chances of getting back to London on time.
          </em>
        </p>
        <p>
          <strong>
            Man
            <br />
          </strong>
          So sorry again about these guys. I will make sure they pay for what
          they <strong>did</strong>.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Farewell and thanks for your help.
        </p>
        <p>
          <strong>
            PP
            <br />
          </strong>
          Well, that <strong>was</strong> a real adventure – now can we get back
          on course and try and make up for lost time? We have a long way to go.
        </p>
        <p>
          <strong>
            Sophia
            <br />
          </strong>
          Passepartout, don't forget it <strong>was</strong> you who{" "}
          <strong>hit</strong> his head and <strong>had</strong> to go to
          hospital remember?
        </p>
        <p>
          <strong>
            PP
            <br />
          </strong>
          Err, well, I think it was you who <strong>sailed</strong> us 500 miles
          in the wrong direction.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Will you two just stop it – we all need to get on and try and work out
          how we're going to win this challenge and get back to London on time.
        </p>
        <p>
          <strong>
            Sophia
            <br />
          </strong>
          Don't worry Phil, it's easy – if we head south we'll pick up some
          trade winds – that will make us much faster. We'll get to Indonesia in
          just a few days.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Sounds like a plan. Passepartout?
        </p>
        <p>
          <strong>
            PP
            <br />
          </strong>
          Fine by me. But we've got a long, long way to go – I think we'll need
          to take turns in sailing while the other two get some sleep.
        </p>
        <p>
          <strong>
            Sophia
            <br />
          </strong>
          Good idea. I'll steer first and get us back on course. You guys get
          some sleep – it's been a long and busy day. First Phil, perhaps you
          can make some of that delicious tea you're good at making, hmm?
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          Aye-aye captain! I've always <strong>wanted</strong> to say that.
          Right away Sophia.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Making tea! It seems to be the only thing I'm good at doing on this
            yacht. Ah well, if it keeps the crew happy! Well, we're out in the
            middle of the Indian Ocean now and we have the wind in our sails.
            Sophia is on deck and Passepartout is here asleep – you can probably
            hear him snoring! Actually, I'm feeling… quite sleepy… now. The
            rolling of the yacht on the waves seems to be rocking me to sleep…
            like a baby. Maybe I… should get some sleep before… I have to steer…
            the yacht.
          </em>
        </p>
        <p>
          <strong>
            PP
            <br />
          </strong>
          What? Huh? What was that?
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          I think we've hit something – but what?
        </p>
        <h3>Vocabulary</h3>
        <p>
          <strong>
            <span>
              pinched
              <br />
            </span>
          </strong>
          stolen
        </p>
        <p>
          <strong>
            <span>
              lawless
              <br />
            </span>
          </strong>
          not obeying laws, sometimes by using violence
        </p>
        <p>
          <strong>
            <span>
              bounty
              <br />
            </span>
          </strong>
          (here) large amount of stolen money and valuable things
        </p>
        <p>
          <strong>
            <span>
              sabotage
              <br />
            </span>
          </strong>
          doing something, for example, causing damage, to stop something else
          being successful
        </p>
        <p>
          <strong>
            <span>
              joyriders
              <br />
            </span>
          </strong>
          people who steal a vehicle (or boat) and drive it fast and dangerously
          just for pleasure
        </p>
      </div>
    );
  } else if (currentSeriesName === "The Race" && currentEpisodeNumber == 7) {
    content = (
      <div class="text" dir="ltr">
        <h3>Shipwrecked</h3>
        <p>
          "Passepartout and I were sleeping like babies when we suddenly heard a
          loud creaking and cracking sound. What could it be? We're in the
          middle of the Indian Ocean so we can't have hit any rocks. Sophia is
          up on deck steering the yacht – I need to find out what's going on."
        </p>
        <h3>Transcript</h3>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Hello again. It's day 45.{" "}
            <strong>
              Passepartout and I were sleeping like babies when we suddenly
              heard{" "}
            </strong>
            a loud creaking and cracking sound. What could it be? We're in the
            middle of the Indian Ocean so we can't have hit any rocks. Sophia is
            up on deck steering the yacht – I need to find out what's going on.
          </em>
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Err… what's all that noise?{" "}
          <strong>I was having a wonderful dream – I was saving</strong> the
          Titanic from hitting an iceberg…
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Passepartout, something's happened.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          What? Err, where's this water coming from?
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          I'm going up to the deck… Sophia, Sophia, what was that noise? Sophia?
          Where's Sophia?! She's not here!
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Out of the way, let me have a look… No, she's definitely gone… but
          hold on, look, we've been swept onto a beach.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          We're shipwrecked!
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            We've landed on a huge, yellow, sandy beach. And beyond the beach
            there's a line of palm trees – with coconuts growing on them. It
            looks like some kind of tropical island. Our satnav says we are at
            11 degrees south, 100 degrees east - but according to the map there
            shouldn’t be any land at this location. Why are we here, and where
            is Sophia?
          </em>
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Phil look, there's a hole in the yacht – that's why the water's coming
          in.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Oh no – what are we going to do? We're castaways, stuck here forever.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Of course we're not. Just go and collect some palm leaves and a few
          bits of driftwood.{" "}
          <strong>
            Luckily I learnt some yacht repair skills from a TV programme I
            watched.
          </strong>{" "}
          I should be able to patch her up.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Aye-aye captain. We need to get back to sea as soon as possible to
          look for Sophia.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          <span>
            Hmm, I don't think we'll see her again. The ocean is huge: it's like
            looking for a needle in a haystack.
          </span>
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          But, we must try.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            We can't give up on Sophia now. I've collected all the bits that
            Passepartout needs for the repairs. I've made a small fire so I can
            boil some water and make some much-needed tea.{" "}
            <strong>
              Whilst I was beachcombing I found a beautiful shell.
            </strong>{" "}
            According to my encyclopaedia, it is a rare type of conch shell.
            That's lucky – it is one of the things I need to collect as part of
            my challenge. Hmm, that's one bit of good news in a sea of bad news.
            Right, I just need to take a few photos before we go to put on my
            travel blog…
          </em>
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          OK, the yacht is fixed, well sort of – give me a hand to scoop out the
          water that got inside. We'll need to head for somewhere where we can
          get some proper repairs done. But I think we can be on our way. You
          just need to help me push her out to sea. Here goes…
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          …. Jump on Phil. I'll get the sails up and we'll be on our way.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Hey look Passepartout – we've picked up a stowaway. A parrot!
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Hmm, wonderful, now I've got someone I can have a proper conversation
          with!
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          I think we should keep it – it might bring us some good luck.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          If you say so. Now look, according to our map, I think we'll miss
          Indonesia and head for Papua New Guinea. With a good tail-wind we
          should be there… mmm… tomorrow – yes?
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          No Passepartout! We need to sail around here first to search for
          Sophia. She can't be far away – maybe{" "}
          <strong>she fell off when we hit the beach</strong>?Hey, I think it's
          seen something. Quick - where are the binoculars? There! I can see
          something.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Sure enough – the parrot has seen something. We've got closer and
            yes! It is Sophia – she's floating on some kind of shipping
            container. I thought she was gone forever, but she's back – and I'm
            so happy.
          </em>
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Phil, Passepartout, over here. Throw me a rope. Oh I'm so pleased to
          see you again.Oh I'm so hungry and thirsty. I'm so sorry.{" "}
          <strong>I fell asleep and a big wave threw me overboard.</strong>{" "}
          <strong>I tried</strong> to call out… but{" "}
          <strong>
            you didn’t hear me. I saw that old container and swam towards it. I
            was drifting about on it
          </strong>{" "}
          – I thought I would never see you again – I thought I was going to die
          – but Phil, <strong>you saved me</strong>.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Well… I did, didn't I? But <strong>
            Passepartout helped me
          </strong>{" "}
          too, I think. <strong>He fixed the boat</strong>.
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Oh yes, well done – and who is your new friend?<strong></strong>
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Just some parrot. <strong>It decided</strong> to perch on our yacht.
          It hasn't got a name yet but I suppose it can join us for this trip.
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Ah, he's cute… I'll try and think of a name. In the meantime, how
          about some of that wonderful tea Phil? Come on Passepartout, we've no
          time to waste, we've got to get moving if we're going to win this
          race.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Yes, yes, I know that.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            The team is back together. I'm so pleased{" "}
            <strong>we found Sophia</strong> – although I'm not so sure
            Passepartout is. We{" "}
            <strong>
              were making very good progress until we got shipwrecked. That cost
              us a lot of time
            </strong>{" "}
            and now, only hard work and good luck will get us back to London in
            80 days. Our next stop is Papua New Guinea, where we can finish
            repairing The Mermaid. But how long will that take? Time is running
            out.
          </em>
        </p>
        <h3>Vocabulary: Shipwrecks</h3>
        <p>
          <strong>
            <span>
              shipwrecked
              <br />
            </span>
          </strong>
          unable to go anywhere because your ship/boat has been damaged in an
          accident
        </p>
        <p>
          <strong>
            <span>
              castaways
              <br />
            </span>
          </strong>
          people who are left on an island or beach (where there are no other
          people) because their ship has been sunk or damaged
        </p>
        <p>
          <strong>
            <span>
              marooned
              <br />
            </span>
          </strong>
          left or stuck in a place that you cannot leave
        </p>
        <p>
          <strong>
            <span>
              driftwood
              <br />
            </span>
          </strong>
          wood that is floating on the sea or brought onto the beach by the sea
        </p>
        <p>
          <strong>
            <span>
              beachcombing
              <br />
            </span>
          </strong>
          searching a beach for shells or valuable or useful objects
        </p>
      </div>
    );
  } else if (currentSeriesName === "The Race" && currentEpisodeNumber == 8) {
    content = (
      <div class="text" dir="ltr">
        <h3>Aye aye Captain Phil!</h3>
        <p>
          "We've made it to Papua New Guinea and the capital city of Port
          Moresby. We've decided to sail in a straight line across the Pacific
          Ocean and then we're taking a shortcut through the Panama Canal. It's
          a long, long way so we need plenty of supplies."
        </p>
        <h3>Transcript</h3>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            It's day 50. We've made it to Papua New Guinea and{" "}
            <strong>the capital city</strong> of Port Moresby.{" "}
            <strong>People</strong> here seem to be wearing{" "}
            <strong>masks</strong> – I think there's some kind of festival going
            on. Anyway, this is where we're getting out yacht properly fixed. It
            needs to be good enough for{" "}
            <strong>the next part of our journey</strong>. We've decided to sail
            in a straight line across the Pacific Ocean and then, well, we're
            taking <strong>a short cut</strong> through{" "}
            <strong>the Panama Canal</strong>. It's a long, long way so we need
            plenty of <strong>supplies</strong> … but there's{" "}
            <strong>a problem</strong>…
          </em>
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          What's wrong Sophia? You look a bit worried.
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Well I've got all our supplies –{" "}
          <strong>milk, water, bread, tea, bird food</strong> for{" "}
          <strong>the parrot</strong> – but I haven't got any money to pay for
          them. We left <strong>Sao Tome</strong> in such a rush that I didn't
          bring any.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Don't worry – here, use my credit card.
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          They don't take <strong>credit cards</strong> here… just cash.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Oh really? I don't have much cash either – we could get some wired
          over to us or maybe Passepartout…
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Well don't look at me – I haven't got any cash – I've just used all my
          money to buy this <em>Savi</em> mask – isn't it beautiful?{" "}
          <strong>A real work of art.</strong> You need to collect one for your
          challenge, don't you?
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Yes I do - well done. Well, if we haven’t got any cash, we’ll have to
          sell some of our things. How about <strong>the parrot</strong>?
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          We can't do that – I've given it <strong>a name</strong> –{" "}
          <strong>Peggy</strong>.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          That's <strong>a nice name</strong> Sophia. So, no, we cannot sell{" "}
          <strong>Peggy</strong>. I'll find some books and clothes and things to
          sell.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            We've made some money and we’ve got some food and drink. We even had
            some money left over to buy some lobsters and wine. I'm going to
            cook <strong>a slap-up meal</strong> for <strong>the crew</strong> –
            but not yet: I'm going to wait until we've sailed for a few days and
            we're all feeling a bit tired. So off we go again – let's hope{" "}
            <strong>the wind</strong> is behind us.
          </em>
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Right, shall we take turns to work and sleep? This time, two people
          can stay on deck while one of us sleeps. <strong>
            The parrot
          </strong>{" "}
          can do what he wants. We don't want any more little accidents, do we
          Sophia?
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Ha ha, very funny. Look, I'll get all <strong>the sails</strong> up –
          with this wind behind us we should make up some time – just steer us
          in <strong>the right direction!</strong> And Phil, are you OK down
          there in <strong>the galley</strong>?
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Oh yes fine, I'm just cooking us something special to say 'thank you'
          for all your hard work.
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          You know <strong>the way</strong> to <strong>a woman's heart</strong>{" "}
          is through her stomach!
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Hmm, aren't those lobsters we bought getting a bit old? Maybe we
          should eat <strong>the parrot</strong> instead?!
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Everyone's tucking into my meal of boiled lobster, fried potatoes
            and <strong>a pineapple salad</strong> with{" "}
            <strong>white wine</strong> to drink. For <strong>dessert</strong>{" "}
            I'm serving up fresh coconut. It's amazing what you can cook in such
            a small kitchen. I'm quite pleased with myself and they seem to be
            enjoying it but of course, Passepartout is complaining again… as
            usual…
          </em>
        </p>
        <p>
          <strong>
            PP
            <br />
          </strong>
          <strong>An interesting meal</strong> Phil – but was{" "}
          <strong>the lobster</strong> cooked properly? It had a funny taste
          and… to be honest… I'm feeling rather… sick.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Too much wine I expect!
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          He's right… Phil… there was something… funny… I'm going to be… sick.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Oh dear. I feel fine – but that's because there wasn't enough lobster
          for me to eat. Ermm… are you both ok?
        </p>
        <p>
          <strong>
            <span>
              PP and Sophia
              <br />
            </span>
          </strong>
          No!
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Take charge… you need to sail <strong>the yacht.</strong>
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Food poisoning! I've made <strong>the crew</strong> ill and now I'm{" "}
            <strong>the only person</strong> well enough to sail{" "}
            <strong>the yacht.</strong> Now stay calm Phil, I can do this. I can
            do this. Peggy, do you know how to sail? Of course not, you're{" "}
            <strong>a parrot</strong>. Right, I'm going east and heading for{" "}
            <strong>land</strong> at 17 degrees south, 149 degrees west. There's{" "}
            <strong>a dirty mark</strong> on <strong>the map</strong> so I can't
            see what <strong>the place</strong> is called. Oh no,{" "}
            <strong>the weather</strong> is getting stormy but I can do this – I
            need to show Sophia and Passepartout I can sail this yacht by myself
            so here goes…
          </em>
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Ah Passepartout, how are you feeling?
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          A little better. Sophia's in <strong>the toilet</strong>: she's still
          feeling bad. Oh, well done for sailing <strong>the yacht</strong>.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Oh, it's quite easy with a bit of practice. But{" "}
          <strong>the wind</strong>'s getting stronger and there's{" "}
          <strong>a storm</strong> coming – could you help move some of{" "}
          <strong>the sails</strong> around… please?
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          I'm afraid… I can't.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Oh well, hold tight everyone, I'm going to have to do this alone. I
          think I can see <strong>land</strong>… but oh no, I can see some{" "}
          <strong>rocks</strong> too… maybe I should close my eyes.
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Phil, pull that rope there…
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            How did I end up in this situation? I'm sailing{" "}
            <strong>a yacht</strong>, by myself, in <strong>a storm</strong>.
            I'm going to hit <strong>the rocks</strong>, I'm sure I am. First I
            poison <strong>the crew</strong>; now I'm going to drown them too.
            Where is <strong>this harbour</strong>? Oh, I want to go{" "}
            <strong>home</strong>!
          </em>
        </p>
        <h3>Vocabulary: Cooking</h3>
        <p>
          <strong>
            <span>
              slap-up meal
              <br />
            </span>
          </strong>
          large and very good meal
        </p>
        <p>
          <strong>
            <span>
              tucking into
              <br />
            </span>
          </strong>
          starting to eat food with great enthusiasm
        </p>
        <p>
          <strong>
            <span>
              serving up
              <br />
            </span>
          </strong>
          bringing food to a table and/or putting food onto plates for people to
          eat
        </p>
        <p>
          <strong>
            <span>
              dessert
              <br />
            </span>
          </strong>
          sweet food that people eat after a main meal
        </p>
        <p>
          <strong>
            <span>
              food poisoning
              <br />
            </span>
          </strong>
          an illness affecting your stomach, caused by old or badly cooked food
        </p>
      </div>
    );
  } else if (currentSeriesName === "The Race" && currentEpisodeNumber == 9) {
    content = (
      <div class="text" dir="ltr">
        <h3>Plain sailing</h3>
        <p>
          "It's a miracle! I didn't hit any rocks and we are safe in the harbour
          at Papeete on the island of Tahiti. It's just a quick stop to clean up
          the yacht and take on fresh water. I'm going to find one more souvenir
          to take home as part of my challenge."
        </p>
        <h3>Transcript</h3>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            It's day 61 – and it's a miracle! I didn't hit any rocks and we're
            safe in the harbour at Papeete on the island of Tahiti. It’s just a
            quick stop to clean up the yacht and take on fresh water.{" "}
            <strong>I'm going to find</strong> one more souvenir to take home as
            part of my challenge – some type of musical instrument – hmmm. And
            how are my travelling companions? Well, they're not under the
            weather anymore – I mean, they aren't feeling ill – they've
            recovered from the food poisoning that I unfortunately gave them –
            but strangely, they still seem very pleased with me.
          </em>
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          'Aloha' Phil! There you are, we were looking for you.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Hi. I thought you two should rest, so I went off to buy something.
          Look, I've bought a 'pahu' – it's a traditional Tahitian drum. I need
          some kind of exotic instrument as part of my challenge – so here we
          go. And my credit card works here, so I’ve bought us all some
          colourful Polynesian shirts – don't they look great?
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Brilliant – Ilove the palm trees…
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          I suppose I could wear it at sea where nobody could see me.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          And I’ve got some food for Peggy. Now look you two, I'm really sorry
          about the lobsters and…
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Be quiet Phil! In fact, well done – you're my hero. You did really
          well sailing the yacht all by yourself. Look, I found this old
          captain's hat the back of a drawer in the galley – go on Phil, put it
          on. You're in charge now! Let me take a photograph. I'm going to put
          that on Facebook.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Yes, well done old chap. You've proved me wrong – you're not as
          useless as you look! Just don't cook us any more of your 'special
          meals'…
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          OK, I'll stick to making the tea.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Perhaps you could sail us home now?
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          I think we should work together as a team. I'd love to stay here for
          longer – it's so beautiful… but we have a job to do. We need to set
          sail and head for the Panama Canal.
        </p>
        <p>
          <strong>
            <span>
              PP and Sophia
              <br />
            </span>
          </strong>
          Aye-aye, captain!
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          He's not really in charge, is he?
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Day 65 and we've had the wind in our sails. We're now passing
            through the Panama Canal. It's an incredible construction and
            luckily for us saves us thousands of kilometres of sailing around
            South America. We're not cheating – we are still sailing around the
            world – but will we do it in 80 days? My companions seem quite
            confident…
          </em>
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Phil,{" "}
          <strong>
            what are you going to spend all the money on when you get home
          </strong>
          ?
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Maybe you could pay me a bit more? Or buy a few more drinks in the
          pub?
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          I haven't thought about it and anyway, we've got to win this race
          first, which is looking very unlikely. But I{" "}
          <strong>am going to write</strong> about our adventures and I hope
          that this time, someone will buy my book. What about you Sophia,{" "}
          <strong>what are you going to do</strong>?
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          I really don't know. I sold everything to pay for my trip. I'm going
          to have to find somewhere to live as soon as I get back to the UK.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Don't worry Sophia. Phil has a sofa you can sleep on! There's room for
          that parrot too. And <strong>I'm going to start</strong> looking for a
          new job as soon as we get home – Captain of the QE2 maybe?
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Ah look, we're finally out of the canal. This must be the Caribbean
          Sea. It's beautiful and it's calm too – there aren't any waves. Look,
          it looks like a swimming pool.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          That's because there's no wind. We'll have to use the engine for a
          while until the wind gets up.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Day 71 – it's windy. Very, very windy. A radio message has warned us
            of a hurricane heading our way. The sea is already getting rough.
            It's time to batten down the hatches and prepare for another very
            bumpy ride. I'm getting quite used to this!
          </em>
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          This is wild! We've got to change course – find some shelter.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Yes, you're right. Our sails will just rip to pieces in this weather.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          No – I think we should carry on. We've been in worse seas than this.
          And we can't waste any more time. Come on everyone, we can't let this
          little storm beat us. <strong>We're going to get through this</strong>
          .
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Are you feeling ok Phil?
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          I'm feeling great.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            For once I feel like I know what I'm doing. I'm not scared. I’ve got
            Passepartout, Sophia and our lucky parrot Peggy with me –and that
            makes me think <strong>everything is going to be ok</strong>. I hope
            I'm right!
          </em>
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          OK Phil, maybe it's the captain's hat - but you really are a changed
          man. Come on then, let's ride this storm.
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Hold on tight – there's a huge wave coming.
        </p>
        <p>
          <strong>
            <span>
              All
              <br />
            </span>
          </strong>
          Whoooahhhh!
        </p>
        <h3>Vocabulary:Weather-related phrases</h3>
        <p>
          <strong>
            <span>
              under the weather
              <br />
            </span>
          </strong>
          unwell; feeling ill
        </p>
        <p>
          <strong>
            <span>
              (to have) the wind in our sails
              <br />
            </span>
          </strong>
          making good progress
        </p>
        <p>
          <strong>
            <span>
              batten down the hatches
              <br />
            </span>
          </strong>
          prepare for a difficult situation
        </p>
        <p>
          <strong>
            <span>
              ride the storm
              <br />
            </span>
          </strong>
          to stay safe and not be damaged or harmed during a difficult time
        </p>
      </div>
    );
  } else if (currentSeriesName === "The Race" && currentEpisodeNumber == 10) {
    content = (
      <div class="text" dir="ltr">
        <h3>The last leg</h3>
        <p>
          "We were sailing through a huge hurricane when a massive wave hit us.
          Oh why did I try to sail through this storm? I was hoping to get back
          home in 80 days but that seems impossible now. I must make sure my
          crew is ok – I need them now more than ever."
        </p>
        <h3>Transcript</h3>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Day 73 – we were sailing through a huge hurricane when a massive
            wave hit us. Oh why did I <strong>try to sail</strong> through this
            storm? I was <strong>hoping to get</strong> back home in 80 days but
            that seems impossible now. I must make sure my crew is ok – I need
            them now more than ever…
          </em>
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Is everyone OK?
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Oh, ouch, my arm. Passepartout, are you OK down there?
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Where I am? Who am I?
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          You're Passepartout – you're on a yacht and we were hit by a big wave.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Oh yes… I knew that… of course… a big wave. Let me just get up… oh my
          legs… right, I need to inspect the damage.
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Well, Peggy the parrot seems OK.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Hooray! Well the satnav is still working but there's a tear in the
          front sail and everything in the galley is underwater.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          I'm so sorry. I <strong>wanted to carry on</strong> through the storm
          – but I was wrong.
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          It's OK Phil. I thought you were very courageous, very brave. Look
          we're still alive. We've just got to get back to London, and with the
          money you'll get, we… I mean you… can <strong>
            enjoy living
          </strong>{" "}
          the rest of your life.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Oh Sophia, thank you, I'm so glad we found you.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          We won’t be going anywhere with this damage.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          We must try Passepartout – never give up!
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            I don't know where all my courage and determination has come from
            but I like it! We are now sailing across the Atlantic – it doesn't
            seem as big and scary anymore. We've sailed past the Azores – we
            couldn't <strong>stop to have</strong> a rest – and now we're not
            far from the coastline of Britain, but we've run into some thick fog
            and we can’t see where we're going. I can hear the foghorn of a
            lighthouse but we are all so tired, weary and exhausted from our
            trip that we're… falling… asleep.
          </em>
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          What's that? We've hit something. We're sinking.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Oh no, look, water, water. Abandon ship, abandon ship! Get the
          lifebelts.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Quick, set off one of those emergency flares – we need help.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Oh no, The Mermaid is sinking, farewell.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            We've <strong>failed to get back</strong> home in 80 days. Disaster!
            We didn’t reach the pub in London on time and we've lost Tom's yacht
            – the yacht I was <strong>supposed to win</strong> and then sell to
            make some money. But we're alive and we have been rescued by a
            lifeboat. It's taking us to shore where we can make our way to the
            station, catch a train to London and hopefully meet our friends in
            the Horse and Groom pub.
          </em>
        </p>
        <p>
          <strong>
            <span>
              John
              <br />
            </span>
          </strong>
          Phil – goodness, we'd forgotten all about you. And you, Pete.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          We have been sailing around the world for 80 days… We’ve nearly faced
          death and you have forgotten about us?!
        </p>
        <p>
          <strong>
            <span>
              Tom
              <br />
            </span>
          </strong>
          He's just joking. It's great to see you again: let me get you a drink
          and you can tell me all about your adventure but, hold on, who's your
          new companion?
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          This is Sophia – we met her in Sao Tome and she's helped us sail
          around the world.
        </p>
        <p>
          <strong>
            <span>
              Tom
              <br />
            </span>
          </strong>
          Pleased to meet you Sophia.
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Sorry we're a day late.
        </p>
        <p>
          <strong>
            <span>
              Tom
              <br />
            </span>
          </strong>
          A day late? You mean it's day 81? Oh well. In that case, the yacht is
          still mine. A bet is a bet!
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          Ahh… well, about that. Your yacht… The Mermaid… she's wonderful…. I
          mean, she was wonderful… we had an accident… we hit some rocks and
          sank.
        </p>
        <p>
          <strong>
            <span>
              Tom
              <br />
            </span>
          </strong>
          You're joking?!
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Errr… he's not.We sank off the coast of Cornwall this morning.
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Tom wasn't pleased to hear the news about his yacht. I{" "}
            <strong>was hoping to win</strong> our bet. But here we are, with no
            yacht and no money - and I have to write a story about how we{" "}
            <strong>failed to sail</strong> around the world in 80 days.
          </em>
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Excuse me. Can everyone <strong>stop talking</strong> for a moment – I
          have an important announcement. I've just double-checked our route on
          the computer and I realised that at zero degrees west and zero degrees
          east we crossed the International Date Line.
        </p>
        <p>
          <strong>
            <span>
              Tom
              <br />
            </span>
          </strong>
          Very interesting, Pete – but so what?
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Well when you cross that line you gain an extra day – that means today
          is only day 80, not day 81!
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          You're right Passepartout – today is day 80. We're on time! What would
          I do without you?
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          So does that mean Phil has won the challenge after all?
        </p>
        <p>
          <strong>
            <span>
              Tom
              <br />
            </span>
          </strong>
          Well… erm… I suppose so. You went around the world in 80 days – but
          did you <strong>stop to collect</strong> the things on your challenge
          list?
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          I… we got them all. Look… Morna music from Cape Verde, cacao beans
          from Sao Tome, Bourbon Pointu coffee from Reunion Island, a conch
          shell from… well we don't know where really, a Savi mask from Papua
          New Guinea, and a pahu drum from Tahiti.
        </p>
        <p>
          <strong>
            <span>
              Tom
              <br />
            </span>
          </strong>
          Impressive! Congratulations – but I'm afraid you still don’t get a
          prize – that was my yacht, and you sank it.
        </p>
        <p>
          <strong>
            <span>
              Phil
              <br />
            </span>
          </strong>
          It's OK. I don't really need it. I've decided there's something much
          more important. Sophia… I'm so glad we rescued you… I've grown very
          fond of you and I <strong>don’t want to lose</strong> you… I know it's
          going to be complicated but… will you marry me?
        </p>
        <p>
          <strong>
            <span>
              Sophia
              <br />
            </span>
          </strong>
          Oh gosh… well, yes! You're my hero – give me a kiss.
        </p>
        <p>
          <strong>
            <span>
              PP
              <br />
            </span>
          </strong>
          Oh dear… I suppose I <strong>get to keep</strong> the parrot?
        </p>
        <p>
          <strong>
            Phil
            <br />
          </strong>
          <em>
            Dear Diary – My adventure is going to make a great story. I'm{" "}
            <strong>hoping to sell</strong> lots of books this time. Sometimes
            you need a big adventure to change your life. Even when your journey
            doesn't go to plan you just learn so much. Luckily for me, I've won
            a great prize – a loyal friend in Passepartout, and Sophia, a new
            friend and wife. It's good to be home.
          </em>
        </p>
        <h3>Vocabulary:Bravery</h3>
        <p>
          <strong>
            <span>
              courageous
              <br />
            </span>
          </strong>
          being brave in a difficult or scary situation
        </p>
        <p>
          <strong>
            <span>
              brave
              <br />
            </span>
          </strong>
          able to deal with a difficult situation without showing fear
        </p>
        <p>
          <strong>
            <span>
              determination
              <br />
            </span>
          </strong>
          not allowing anything to stop you doing what you are trying to do
        </p>
        <p>
          <strong>
            <span>
              impressive
              <br />
            </span>
          </strong>
          describes someone or something that is special, large or shows great
          skill
        </p>
        <p>
          <strong>
            <span>
              hero
              <br />
            </span>
          </strong>
          someone who you love or admire because they have done something brave
          or impressive
        </p>
      </div>
    );
  }

  return content;
};

export default TranscriptContent;
