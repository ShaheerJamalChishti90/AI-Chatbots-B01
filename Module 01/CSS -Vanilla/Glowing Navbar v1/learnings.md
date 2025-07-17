
---

## 🔷 `/* Body Setup */`

```css
body {
  margin: 0;
  background-color: #161616;
  overflow: hidden;
  font-family: Arial, sans-serif;
}
```

### 🔹 `body` kya hota hai?

Ye **poori website ka main area** hota hai — jisme sab kuch dikhai deta hai.

### 🔸 Properties samjho:

| Property                          | Matlab (Roman Urdu)                                    | Kya karta hai?                                    |
| --------------------------------- | ------------------------------------------------------ | ------------------------------------------------- |
| `margin: 0;`                      | Website ke chaaro taraf ka space hata do               | White border hata deta hai jo by default hoti hai |
| `background-color: #161616;`      | Background ko andhera grayish black kar do             | Is color se poori website dark lagti hai          |
| `overflow: hidden;`               | Jo cheezein bahar nikalti hain body se, unhe chhupa do | Scrollbars wagaira nahi dikhengi                  |
| `font-family: Arial, sans-serif;` | Likhaai Arial font mein dikhay                         | Professional aur clean font hoti hai              |

---

## 🔷 ``/* logo setup */``

```css
.logo-container {
  position: absolute;
  top: -5;
  left: 20px;
  z-index: 2;
}
```

### 🔹 `.logo-container`

Is class mein **logo ya naam** ko page ke ek specific jagah par rakhna hai.

| Property              | Matlab                         | Kaam                                                                   |
| --------------------- | ------------------------------ | ---------------------------------------------------------------------- |
| `position: absolute;` | Isay fixed jagah par chipka do | Isse hum is element ko kisi bhi exact jagah rakh sakte hain            |
| `top: -5;`            | Thora upar le jao (-5px)       | Negative top ka matlab thora upar push karna                           |
| `left: 20px;`         | Left se 20 pixel door le jao   | Thoda left side se andar aayega                                        |
| `z-index: 2;`         | Dusre elements ke upar dikhao  | Layer system hota hai – jiska z-index zyada hota hai woh upar hota hai |

---

```css
.logo {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  padding: 12px 25px; 
  border-radius: 10px;
  z-index: 1;
  text-decoration: none;
  cursor: pointer; 
}
```

### 🔹 `.logo`

Ye actual **text/logo** ka style hai – jaise "Shaheer Jamal".

| Property                 | Matlab                                                    | Kaam                                                                |
| ------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------- |
| `color: #fff;`           | White color mein dikhay                                   | `#fff` = white                                                      |
| `font-size: 18px;`       | Text thoda bara karo                                      | 18 pixels font                                                      |
| `font-weight: bold;`     | Text mota dikhay                                          | Bold likhai                                                         |
| `position: relative;`    | Iske andar glow effects (before/after) ke liye jaruri hai | Relative hone se pseudo-elements theek jagah position le sakte hain |
| `padding: 12px 25px;`    | Text ke ird gird space                                    | Upar niche 12px, left right 25px                                    |
| `border-radius: 10px;`   | Kinare gol                                                | Shape rounded                                                       |
| `z-index: 1;`            | Peechay ka background layer se upar dikhe                 | before/after se upar rahe                                           |
| `text-decoration: none;` | Neeche wali line hata do                                  | Link underline ko hata deta hai                                     |
| `cursor: pointer;`       | Mouse le jao to haath banay                               | Jaise button ho                                                     |

---

## 🌈 `/* Glow background behind logo */`

```css
.logo::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #333;
  border-radius: 10px;
  z-index: -1;
  transition: background 0.3s ease;
}
```

### 🔹 `.logo::after` kya hai?

Yeh ek **background layer** hai jo **logo ke neeche hoti hai** – glow ke upar base banati hai.

| Property                            | Matlab                        | Kaam                                  |
| ----------------------------------- | ----------------------------- | ------------------------------------- |
| `content: "";`                      | Yeh cheez visible banata hai  | Yeh pseudo-element ke liye jaruri hai |
| `position: absolute;`               | Logo ke andar fix ho jaye     | Logo ke andar hi chipka hua           |
| `top: 0; left: 0;`                  | Bilkul corner se start karo   | Same size ka background               |
| `width: 100%; height: 100%;`        | Logo ke size jitna            | Cover pura logo                       |
| `background: #333;`                 | Dark gray color ka background | Logo ke peechay layer                 |
| `border-radius: 10px;`              | Rounded corner same as logo   | Taake match kare                      |
| `z-index: -1;`                      | Peechay chhup jaye            | Logo ke neeche ho                     |
| `transition: background 0.3s ease;` | Smooth change jab hover ho    | Style me animation laye               |

---

## 🌈 `/* Glowing rainbow effect */`

```css
.logo::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  background: linear-gradient(...);
  background-size: 600%;
  z-index: -2;
  filter: blur(8px);
  opacity: 0;
  border-radius: 12px;
  transition: opacity 0.3s ease-in-out;
  animation: glowing 20s linear infinite;
}
```

### 🔹 `.logo::before`

Yeh hai **rainbow light effect** jo mouse hover pe show hota hai.

| Property                | Matlab                          | Kaam                           |
| ----------------------- | ------------------------------- | ------------------------------ |
| `calc(100% + 10px);`    | Logo se thoda bada              | Border ke bahar tak glow kare  |
| `linear-gradient(...)`  | Rainbow colors                  | Bahut hi colorful background   |
| `background-size: 600%` | Badi rainbow                    | Move karne ke liye zaroori hai |
| `filter: blur(8px);`    | Blur effect                     | Halka fade glow                |
| `opacity: 0;`           | Default mein chhupa hua         | Hover pe dikhayega             |
| `transition`            | Smooth transition               | Glow smoothly aaye             |
| `animation`             | `@keyframes glowing` apply karo | Rainbow hilta rehta hai        |

---

```css
.logo:hover::before {
  opacity: 1;
}
```

* Jab tum **mouse le jao logo ke upar**, rainbow glow **show** ho jata hai!

---

```css
.logo:active {
  color: #000;
  font-weight: bold;
}
.logo:active::after {
  background: transparent;
}
```

* Jab **click karo**, text **black** ho jata hai aur background **transparent**.

---

## 🔷 `/* Navbar Container */`

```css
.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 40px;
  background-color: #1e1e1e;
  position: relative;
  z-index: 1;
}
```

### 🔹 `.navbar`

Yeh hoti hai **top wali bar** jisme menu hota hai (Home, About, etc.)

| Property                     | Matlab                          | Kaam                          |
| ---------------------------- | ------------------------------- | ----------------------------- |
| `display: flex;`             | Row mein cheezein lagao         | Sab menu ek line mein         |
| `justify-content: flex-end;` | Right side chipka do            | Buttons right par aaye        |
| `align-items: center;`       | Center mein vertically          | Neeche upar se barabar lagay  |
| `padding: 10px 40px;`        | Space andar se                  | Upar niche 10px, side se 40px |
| `background-color: #1e1e1e;` | Dark gray background            | Stylish lagta hai             |
| `position: relative;`        | Pseudo-elements ke liye zaroori |                               |
| `z-index: 1;`                | Logo ke neeche ya upar ho sake  |                               |

---

## 🔷 `/* Individual Nav Links */`

```css
.nav-link {
  position: relative;
  margin: 0 20px;
  margin-right: 5px;
  padding: 12px 25px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  z-index: 0;
}
```

### 🔹 `.nav-link`

Har **button** ka style (jaise Home, Contact)

* Same logo jaisa hi style hai
* Rounded button
* White text
* Padding for spacing

---

### 🔹 `::before`, `::after`, `:hover`, `:active` — sab kuch same hai logo jaisa:

* `::after` = dark background
* `::before` = rainbow glow (blur)
* `:hover` pe glow on
* `:active` pe black text + transparent background

---

## 🔷 `@keyframes glowing`

```css
@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
}
```

Yeh ek **animation dance step** hai.

* Background rainbow **left se right** jata hai aur wapis.
* Is animation ka naam `glowing` hai.
* Use hoti hai `.logo::before` aur `.nav-link::before` mein.

---

## ✅ Full Summary:

Tumhara CSS code:

✅ Ek **dark stylish website** banata hai
✅ Usme ek **logo hota hai jo glow karta hai**
✅ Ek **navbar hoti hai jisme buttons** right side pe hote hain
✅ Har button aur logo ke peechay ek **magic glowing rainbow light** hoti hai
✅ Jab mouse le jao → light on!
✅ Jab click karo → style change!

---

Agar chaho to mein is CSS ke sath ek **HTML demo file** bhi bana doon jo isay live chalaye — ya aur bhi upgrade chahiye ho to woh bhi batao! 😎
