Bilkul! Chalo CSS ke **positions** ko is tarah samajhtay hain jaisay tum 5 saal ke ho — simple aur maze daar tareeqay se 😄

---

### 🧸 Socho ek room hai, usme kuch toys hain...

Har toy ko kahin na kahin **rakhna** hai. CSS mein `position` ka kaam bhi yahi hota hai — cheezon (jaise buttons, boxes, images) ko page (ya parent box) ke andar **rakhnay** ka tareeqa batana.

---

### 1. `static` (default position)

📍\*\*"Jahan jagah mili, wahin baith gaya"\*\*

Yeh normal tareeqa hai. Cheez apni jagah khud dhondti hai aur line mein lag jaati hai.

📦 Box: “Mujhe koi special order nahi mila, mein line mein khud hi aa gaya!”

---

### 2. `relative`

📍\*\*"Mein apni jagah par hoon, lekin thora idhar-udhar ho sakta hoon"\*\*

Yeh cheez apni jagah par **rehti hai**, lekin tum usse keh sakte ho: "thora right chalay jao", ya "neeche ho jao".
(Magar baqi boxes usse usi jagah samajhtay hain jahan pehle tha.)

📦 Box: “Mein yahin hoon, bas thora sa move kar gaya.”

---

### 3. `absolute`

📍\*\*"Jahan bola wahan chala gaya — apna boss ban gaya"\*\*

Yeh box apni asal jagah **chhod deta hai** aur usko sirf uske parent ke mutabiq rakha jaata hai (agar parent `relative` ho).

📦 Box: “Mujhe kehdo ‘top: 0; left: 0’ — mein seedha corner mein pohanch jaunga!”

---

### 4. `fixed`

📍\*\*"Mein screen par chipak gaya hoon!"\*\*

Yeh box **hamaysha screen ke sath rehta hai**, scroll karo ya kuch bhi karo — yeh hilega nahi.

📦 Box: “Mein tumhare screen ke corner mein chipka hoon, mein kahin nahi jaa raha!”

---

### 5. `sticky`

📍\*\*"Jab tak zarurat ho, tab tak chipka rahoon"\*\*

Yeh normal jagah pe hota hai, **magar** jaise hi tum scroll karte ho, yeh **chipak jaata hai** ek jagah pe!

📦 Box: “Mein normal tha, lekin scroll kiya to mein top pe chipak gaya 😎”

---

### Ek Choti Si Table:

| Position | Kya karta hai?                           |
| -------- | ---------------------------------------- |
| static   | Normal jagah pe hota hai                 |
| relative | Apni jagah se thora idhar-udhar hota hai |
| absolute | Parent box ke hisaab se chala jaata hai  |
| fixed    | Screen ke sath chipak jaata hai          |
| sticky   | Scroll pe chipak jaata hai               |

---

Agar chaho to mein tumhare liye ek **fun demo** bhi bana sakta hoon jisme yeh saare positions dikha doon — bas keh do 💡
