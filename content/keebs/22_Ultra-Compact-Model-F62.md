---
title: "Model F62 Kishsaver - 60%"
summary: "d-floe's keyboard overview for the Ultra Compact Model F62 by Model F Labs."
tags:
- 60Percent
- keyboard
---

![[keebs/attachments/model-f-kishsaver.png]]

## Model F62 Kishsaver

- Received: July 22nd, 2023
- Weight (built): 1609g / 3.547lbs

### Introspective

This board will probably be my first real commitment to leaving the MX switch space. I did experiment a little with the Niz switches, but other than that, I've never tried anything else. I hear the Model F Buckling springs are excellent, and I think it'll be a perfect opportunity to really try it out in a modern form-factor. Likewise, I like juxtaposition of Modern switches in retro boards, and retro switches in modern boards. Furthermore, I don't really know what to expect with this one, but at least the board is an In-Stock option rather than a limited buy.

### Purchase

![[keebs/attachments/Model-F62-Kishsaver-60.png]]
I found this awesome deal on MechMarket for this board in black, pre modded, for only 255 USD. What a steal!

### First Impressions

![[keebs/attachments/22_Ultra-Compact-Model-F62-1.png]]
After typing on this board for a couple days I have a few thoughts:

1. These switches are really loud and really fun to type on. The click of the buckling springs are very satisfying both in sound and feel. The sound is a much more aggressive CLUNK compared to the MX clicks
2. I really wish there was a flipped spacebar option, the edge of the spacebar currently is uncomfortable to type on because of how the edge just digs into my thumb. I might consider 3D printing one but idk how yet.
3. Whoever built this keyboard forgot to install the stabilizer stems so now I have to order them myself. The long mods are really wobbly.
4. I'm not a fan of the rough finish of the powder-coating so I decided that I will be stripping it using a gallon of Klean Strip. Submerging the chassis in paint stripper seems to have done a great job though it takes time. If the zinc starts to tarnish I'll just have it cerakoted in silver.

### Concept

After fiddling around in Keyboard Render Kit I found my dream setup for this board. When it comes to buckling springs boards the limiting factor for creativity is the available keycaps, so I needed to find a combination that worked with what I was able to acquire. I settled on Unicomp's custom printed Red Cyrillic keycaps on white, and I was going to combine it with the gray keycaps that I got with the board to make a Modern Dolch Light set with red Cyrillic sub legends.

![[keebs/attachments/22_Ultra-Compact-Model-F62-6.png]]

> Unicomp red Cyrillic custom printed keyset

![[keebs/attachments/22_Ultra-Compact-Model-F62-7.png]]

> First render idea using Unicomp white alphas + gray mods on black

![[keebs/attachments/22_Ultra-Compact-Model-F62-8.png]]

> Second render idea using Unicomp gray alphas + Model F Keyboards dark gray mods on black

![[keebs/attachments/22_Ultra-Compact-Model-F62-9.png]]

> Third render idea using Unicomp Pearl and Pebble red Cyrillic on burgundy.

![[keebs/attachments/22_Ultra-Compact-Model-F62-10.png]]

> Fourth render idea using Unicomp white + gray mods red Cyrillic on burgundy.

![[keebs/attachments/22_Ultra-Compact-Model-F62-2.png]]
![[keebs/attachments/22_Ultra-Compact-Model-F62-3.png]]

> Final render idea using Unicomp white + gray mods red Cyrillic on silver.

### Stripping Process

To strip the original black powder coating off of the keyboard I bought a gallon of [Klean Strip paint stripper](https://www.homedepot.com/p/Klean-Strip-1-Gal-Premium-Paint-Remover-and-Stripper-GKPS300/307994460) and poured it all into a metal container. I then submerged the keyboard chassis parts into the vat of paint stripper and waited for roughly 4 hour increments, each time scraping off more and more of the residual powder coating. Originally I was having a lot of trouble getting it off but after buying a stainless steel wire brush I was able to get the coating off much faster. Paint stripper is very corrosive so I went through 3 pairs of heavy duty rubber gloves to get this project done. Try not to breathe this stuff in if you can help it, and always work in a well ventilated area. I did this on my porch witch a big fan blowing the vapors away.

![[keebs/attachments/22_Ultra-Compact-Model-F62-4.png]]
![[keebs/attachments/22_Ultra-Compact-Model-F62-5.png]]

After about a day of soaking and stripping, the final result turned out pretty decent. There's some blemishes from the raw Zinc but some people say they like it. I'm still on the fence about it, but if it starts to really bother me I'll get it cerakoted in [H-151 Satin Aluminum](https://www.cerakote.com/shop/cerakote-coating/H-151/satin-aluminum).

![[keebs/attachments/22_Ultra-Compact-Model-F62-11.png]]

### Flipped Spacebar Design

Due to the design of the buckling spring spacebar using a wire that attaches to the spacebar itself, it's impossible to simply flip the spacebar. So I took it upon myself to model a "flipped" spacebar and have it 3D printed by JLCPCB.
I took the SCAD model from [Jaseg's Model M Keycaps](https://github.com/jaseg/Model-m), generated it using OpenSCAD, exported it as an STL and modified the rest in Blender.

![[keebs/attachments/22_Ultra-Compact-Model-F62-14.png]]
![[keebs/attachments/22_Ultra-Compact-Model-F62-12.png]]

Since the cost of resin printing was so cheap, I had two of each available material printed. I await their arrival to test out the result.
![[keebs/attachments/22_Ultra-Compact-Model-F62-15.png]]

#### V1

After receiving the first prototype I quickly noticed a few issues with my design:

- The hole for the wire to go in was too tight and allowed very little room for the wire to rotate.
- The plastic bits on the bottom were causing the keycap to bottom out before actuating
- The depth of the keycap was too shallow making it so the cap would hit the barrel before actuation.

![[keebs/attachments/22_Ultra-Compact-Model-F62-16.png]]

For version two I will need to make the keycap tall enough to actuate properly but not too tall that I end up with an identical keycap to the original.

![[keebs/attachments/22_Ultra-Compact-Model-F62-17.png]]
### Lubing Buckling Spring Keycaps

Unlike MX switches, the push mechanism for buckling spring switches are driven by the integrated stem underneath the keycap. All of the friction in the keypress comes from the keycap stem rubbing against the barrel of the switch. Much like in MX switches, minimizing the friction of the stem using Krytox 205g0 greatly improves the sound and feel of the switch.

> [!important] Important
>
> Make sure to only lube the outside of the stem! Lubing the inside will get lube on the spring which will ruin the buckling spring mechanism.
> There should only be enough lube to give the stem a small greasy sheen, there should not be any visible white globs of lube.

![[keebs/attachments/22_Ultra-Compact-Model-F62.png]]

### Parts

- Case: ~~Black~~ Raw Zinc
- Keycaps: Unicomp Red Cyrillic on Brilliant White + Gray Modifiers
    - Custom 3D printed flipped spacebar from JLCPCB(?)
- Layout: HHKB-style split right shift and regular 2-unit wide backspace
- Configuration: Floss Modded, lubed spacebar wire, lubed keycap stems
- Bumpers: [Anodized Mechanical Keyboard Feet](https://www.amazon.com/dp/B0BKM1HC1D)

### Pricing

| Vendor            | Item                                                                         | Subtotal | Total      |
| ----------------- | ---------------------------------------------------------------------------- | -------- | ---------- |
| MechMarket        | Ultra Compact Model F62 Keyboard Black, Unicomp US APL Buttons, Floss Modded | **255**  | **255**    |
| Unicomp           | Unicomp White Red Russian Legends keycaps, stabilizer inserts                | **79**   | **93.59**  |
| Model F Keyboards | Extra Parts                                                                  | **20**   | **29.99**  |
|                   |                                                                              |
| Grand Total       |                                                                              | **354**  | **378.58** |
