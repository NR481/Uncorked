'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wines', [
      {
        name: '2017 Breaking Ground Pinot Noir',
        image: 'https://images.squarespace-cdn.com/content/v1/594838cee6f2e168a7522341/1635776868917-ODGE5V7Z6H24A25XL7VI/CMP17.jpg?format=500w',
        vintage: 2017,
        description: 'I love the intersection of aromas in this wine. It opens with lovely and lifted raspberry and cinnamon notes, but then it takes a turn and deepens into purple lilac, warm boysenberry, and cedar bark along with an intriguing dark loam quality. That rush of complexity carries into the palate, supported by supple tannins and a pleasant chew. The overall impression is delightful and leaves me wanting another glass.',
        varietal: 'Pinot Noir',
        wineryId: 1
      },
      {
        name: '2018 Calkins Lane Syrah',
        image: 'https://images.squarespace-cdn.com/content/v1/594838cee6f2e168a7522341/1621058876862-OV1ZHFBT2FXUOL7HQ9XI/SYR18%2Bbottleshot.jpg?format=750w',
        vintage: 2018,
        description: 'Leaning into the more expressive side of Syrah, this is subtle and dark, fringed with violets, licorice, black pepper, and blue fruits. The palate is profound and will not be ignored, and the tannins carry this wine forever.',
        varietal: 'Syrah',
        wineryId: 1
      },
      {
        name: '2019 Vireton Pinot Gris',
        image: 'https://3kqvof47skd91wh23kbbxpdv-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/AS-Vireton-PG-NV-1000x300.png',
        vintage: 2019,
        description: 'Honeydew melon, stone fruits and citrus blossom emanate from the Vireton Pinot Gris. There are tropical undertones too, made of banana and guava, with a touch of subtle minerality. The wine is supple and tidy on the palate with a broad texture but finishes gracefully with notes of apple and walnut shell. A balanced and refreshing wine, this Pinot Gris is best enjoyed slightly chilled and accompanied by vegetable and poultry dishes.',
        varietal: 'Pinot Gris',
        wineryId: 2
      },
      {
        name: '2019 Summit Vineyard Chardonnay',
        image: 'https://3kqvof47skd91wh23kbbxpdv-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/AS-Summit-CH-NV-1000x300-1.png',
        vintage: 2019,
        description: 'Leading with citrus, mineral characteristics and exotic flowers, the Summit Vineyard Chardonnay is electric. Candied Meyer lemon, wet stone and crushed flint join jasmine and magnolia on the nose. On the palate, there’s depth delivered by citrus fruit notes, fine white tannins and a mesmerizing acidity. The wine flexes added layers with every sip, united by immaculate texture.',
        varietal: 'Chardonnay',
        wineryId: 2
      },
      {
        name: '2015 Spirit House Riesling',
        image: 'https://shop.argylewinery.com/assets/images/products/thumbnails/2015ArgyleSpirithouseRieslingBottleWeb.png',
        vintage: 2015,
        description: 'Always an ongoing exploration, this year\'s Spirithouse Riesling comes exclusively from our experiments in skin contact, cold-soaked Riesling. Chilled Lone Star Vineyard fruit was de-stemmed into bins and placed back into the cold room to soak upon themselves and pressed at different intervals: from 24 hours up to 30 days. Each pressing was put to neutral oak barrel and allowed to ferment to dryness and left upon lees for 16 months. The resulting wines are of incredible breadth and texture, while teasing out more Riesling-esque aromatics: wild plum, ginger, lemon blossom and white tea. Be sure not to over-chill this wine as it calls for cellar temperature to fully embrace the nuances.',
        varietal: 'Riesling',
        wineryId: 3
      },
      {
        name: '2010 Extended Tirage Brut Rosé',
        image: 'https://shop.argylewinery.com/assets/images/products/thumbnails/2010ArgyleETBrutRoseBottleWeb.png',
        vintage: 2015,
        description: 'Aged upon its lees for 10 years, 2010 Extended Tirage Brut Rosé is impressive for its balanced interplay of a creamy, layered texture and the electric energy of fresh disgorgement. Always starting the blend, Pinot Meunier from Knudsen Vineyard in the Dundee Hills brings a beautiful rose petal and red raspberry spice core. Pinot Noir provides creamy depth, while the small portion of Chardonnay tightens the blend and brings fresh, volcanic mineral length.',
        varietal: 'Rosé',
        wineryId: 3
      },
      {
        name: '2018 Le Pré du Col Pinot Noir',
        image: 'https://wineshop.bergstromwines.com/assets/images/wines/originals/18%20Le%20Pre%20with%20Border-01.jpg',
        vintage: 2018,
        description: 'Light red cherry in color, the 2018 Le Pré du Col Pinot Noir has effusive aromas of cherry and plum fruits, citrus oils, Chinese Five Spice, bouillon, meaty mushrooms, incense, and dark chocolate. The wine is elegantly framed with silky tannins, soft, plush plum and dark-berried fruit, spice flavors, and a succulent vein of juicy acidity on the finish. The use of no new oak barrels in 2018 allows this great site to shine with its natural spice and fruit flavors. This wine is approachable now for early enjoyment but should age well for the next decade or more.',
        varietal: 'Pinot Noir',
        wineryId: 4
      },
      {
        name: '2017 Sigrid Chardonnay',
        image: 'https://wineshop.bergstromwines.com/assets/images/wines/originals/17%20sigrid%20gold%20border-01.jpg',
        vintage: 2017,
        description: 'This is a very aromatic wine with an outstanding complex bouquet of sweet baking spices, poached pear, saffron, hazelnut, Chantilly cream, slightly toasted brioche, Meyer lemon, and stone fruits. On the palate, it is bright and youthful, with a juicy natural acidity and a fine mineral structure. This should develop beautifully over the next decade.',
        varietal: 'Chardonnay',
        wineryId: 4
      },
      {
        name: '2018 Lavinea Elton Pinot Noir',
        image: 'https://filemanager.orderport.net/CarltonWinemakersStudio/Catalog/6034607b-371e-4e8e-992a-b9933fec1df0-Thumb.jpg?ts=637541794797730000',
        vintage: 2018,
        description: 'Brilliant yet darker ruby color. Very youthful and a bit closed aromatically. With air, scents of cola, black cherry, Provencal herbs, and a hint of white pepper emerge. The entry is round, almost lush but with a sleek texture. A medium weight palate offers sweet cherry and marionberry flavors enhanced by exotic spices. A very focused core of fruit is framed by firm but polished tannins that carry the wine to an enduring finish, while the palate remains enchanting with the striking mix of flavors that linger and linger. Slow to reveal itself, this is a wine that will provide great pleasure given time.',
        varietal: 'Pinot Noir',
        wineryId: 5
      },
      {
        name: '2018 Asilda Pinot Noir',
        image: 'https://filemanager.orderport.net/CarltonWinemakersStudio/Catalog/52f9721a-4434-4e23-bd18-bdf74ee8f28e-Thumb.jpg?ts=637586563965100000',
        vintage: 2018,
        description: 'Asilda Pinot Noir, from the Yamhill-Carlton district, has a perfumed, floral bouquet that is pure and seductive, lovely red cherries and fresh strawberry fruit.  The palate is medium-bodied with supple tannin, great depth of fruit, a caressing texture and rounded spicy red berries on the long finish.  What a gorgeous Pinot Noir. Superb.',
        varietal: 'Pinot Noir',
        wineryId: 5
      },
      {
        name: '2011 Statement Pinot Noir',
        image: 'https://shop.stollerwinegroup.com/assets/images/products/pictures/2011StatementPinotNoir_WD.png',
        vintage: 2011,
        description: 'This wine is only made in very special vintages—and 2011 in our cellar was definitely special, being one of the two or three most intense, pure and ageable vintages I’ve seen. The wine almost vibrates with the acid tension, three-dimensional black fruit, almost spherically balanced with acid and tannin—the epitome of Ribbon Ridge’s red-black spice and mineral Pinot Noir expression. Alcohol is low to perfect this balance, pH likewise, and acids focused. This wine will age exceptionally—expect it to reach 30-plus with ease.',
        varietal: 'Pinot Noir',
        wineryId: 6
      },
      {
        name: '2013 Reserve Pinot Noir',
        image: 'https://shop.stollerwinegroup.com/assets/images/products/pictures/2013_pinot_noir_reserve_ridgecrest-WD1.png',
        vintage: 2011,
        description: 'The 2013 vintage is a beautiful example of a classic, aged Willamette Valley Pinot Noir. Bright red fruit characteristics evolve into delicate aromatics of plums and dark currants that are accentuated with a hint of spice and tea. The palate is just divine with bright, juicy acidity and gorgeous fine-grain tannin texture. We’ve done the hard part of cellaring this wine for you, so sit back and enjoy this fantastic Pinot Noir.',
        varietal: 'Pinot Noir',
        wineryId: 6
      },
      {
        name: '2019 Mt. Jefferson Cuvée Pinot Noir',
        image: 'https://images.commerce7.com/cristom-vineyards/images/large/2019-mt-jefferson-1634245907944.jpg',
        vintage: 2019,
        description: 'Made from a combination of Estate fruit as well as Pinot from surrounding vineyards in the Eola-Amity Hills, the Mt. Jefferson Cuvée wine conveys a rich sense of place, deserving its reputation as one of the most expansive yet stylistically consistent Pinot Noirs in the world.',
        varietal: 'Pinot Noir',
        wineryId: 7
      },
      {
        name: '2019 Louise Vineyard Chardonnay',
        image: 'https://images.commerce7.com/cristom-vineyards/images/large/cristom-eola-amity-hills-chardonnay-bottle-shot---non-vintage-1630349802052.jpg',
        vintage: 2019,
        description: 'When planting began on the estate in 1993, founder Paul Gerrie reserved a special hillside for Chardonnay.   Between 1993-1995, the steepest part of the Louise Vineyard hillside was planted to Dijon clones of Chardonnay.  In time, much of the Chardonnay was grafted to Pinot Noir, and what remains is 0.5 acres (0.202 hectares) of Dijon (French/Bernard) clone 95 on the northern edge of Louise Vineyard predominantly planted on a moderately shallow, gravelly Columbia River Basalt soil known as Ritner.  The east-facing block is densely planted (2,311 vines/acre (5,710 vines/hectare)) and runs east to west down the hillside (365 ft to 320 ft (101 m to 98 m)) on a devigorating rootstock through a cobbly volcanic soil.',
        varietal: 'Chardonnay',
        wineryId: 7
      },
      {
        name: '2014 Dundee Hills Chardonnay',
        image: 'https://www.domaineserene.com/assets/images/products/pictures/WEB-Evenstad-Reserve-Chardonnay.png',
        vintage: 2014,
        description: 'Our flagship Chardonnay; a balanced and elegant wine that displays firm acidity, richness and persistence. Clonal variation and site-driven diversity deliver a wine of superior quality from vintage to vintage.',
        varietal: 'Chardonnay',
        wineryId: 9
      },
      {
        name: '2019 Mount Richmond Pinot Noir',
        image: 'https://www.domaineserene.com/assets/images/products/pictures/WEB-Evenstad-Reserve-Chardonnay.png',
        vintage: 2019,
        description: 'Italian plum and blackberry bramble introduce this black-fruited wine with wafts of rose and croissant. The smooth, savory palate is replete with berry compote and black fig accompanied by powdered cocoa, nutmeg and cinnamon.',
        varietal: 'Pinot Noir',
        wineryId: 10
      },
      {
        name: '2015 Pinot Noir Block Reserve',
        image: 'https://client-assets.ecellar1.com/eyrievineyards/prod_header_133.png',
        vintage: 2015,
        description: 'Italian plum and blackberry bramble introduce this black-fruited wine with wafts of rose and croissant. The smooth, savory palate is replete with berry compote and black fig accompanied by powdered cocoa, nutmeg and cinnamon.',
        varietal: 'Pinot Noir',
        wineryId: 11
      },
      {
        name: '2018 Yamhill-Carlton Pinot Noir',
        image: 'https://www.granmoraine.com/sites/default/files/styles/jfeis_orig_500/public/2021-09/GM%20Web%20PDP%20Image_YC%20PN%20Magnum.jpg?itok=Ij20g9yl',
        vintage: 2018,
        description: 'Sourced from our two estate vineyards in the Yamhill-Carlton sub-AVA, our 2018 Yamhill-Carlton Pinot Noir has the voice of a soul singer in front of a timeless string band. It has vibrant tannins, cleansing acidity, and is extremely linear-driven.',
        varietal: 'Pinot Noir',
        wineryId: 12
      },
      {
        name: '2021 Carter Pinot Noir',
        image: 'https://shop.kenwrightcellars.com/assets/images/products/pictures/CARTER.jpg',
        vintage: 2021,
        description: 'Fruit focused. Darker blue and black fruits of cassis, blackberry & dried blueberry supported by firm avidity and moderate tannins.',
        varietal: 'Pinot Noir',
        wineryId: 13
      },
      {
        name: '2018 King Estate Willamette Valley Muscat',
        image: 'https://kingestate.com/wp-content/uploads/18-63-1-BT1.png',
        vintage: 2018,
        description: 'Grown at 1,000 feet in elevation on Block 21A on our Estate Vineyard, this semi-sweet Muscat is 100% certified Biodynamic®. Delectably floral with sharp stone fruit nuances, this is simply a treat.',
        varietal: 'Muscat',
        wineryId: 14
      },
      {
        name: '2017 Dry Riesling',
        image: 'https://shop.lemelsonvineyards.com/assets/images/products/pictures/lemelson-dry-riesling-VZAUTX.jpg',
        vintage: 2017,
        description: 'The 2017 Riesling was made from grapes sourced from both of our estate vineyards in the Dundee Hills AVA.  To help maximize aromatic intensity and complexity, the wine was fermented in both tanks and stainless steel barrels.  The finished wine was aged on the lees for 5 months with occasional stirring.  The results are honeyed pineapple, pear, Meyer lemon and orange zest fruit framed by white flower and subtle petrol aromatics.',
        varietal: 'Dry Riesling',
        wineryId: 15
      },
      {
        name: '2019 Ponzi Pinot Blanc',
        image: 'https://www.ponzivineyards.com/assets/images/products/pictures/19PBKo.png',
        vintage: 2019,
        description: 'Classic aromas of powdered sugar, chamomile and candied lemon peel mingle with notes of brioche, honeycomb and key lime.  The mouth gives a salty freshness, slight pineapple and nectarine along with poached pear, cinnamon and white peppercorn. The long finish is laced with juicy acidity.',
        varietal: 'Pinot Blanc',
        wineryId: 16
      },
      {
        name: '2017 Sunny Mountain Vineyard Pinot Noir',
        image: 'https://rexhill.com/wp-content/uploads/2020/05/17_SunnyMtn_PN_Bottle-Shot.png',
        vintage: 2017,
        description: 'The pretty 2017 REX HILL Sunny Mountain Vineyard Pinot Noir greets with floral notes like violets and lavender, delicate red and black fruit aromas, and hints of sweet oak and faint spices like cinnamon and mace. As the wine opens, whole cluster attributes reveal deeper, darker fruits evoking blackberry jam with thyme, ruby port, and some earth and savory notes. Lithe and restrained, this wine shows great tension between fruit, acid and tannin, promising the structure to age well.',
        varietal: 'Pinot Noir',
        wineryId: 17
      },
      {
        name: '2018 Dundee Hills Estate Pinot Noir',
        image: 'https://shop.sokolblosser.com/assets/images/products/pictures/DPN-web-XLQWRZ.png',
        vintage: 2018,
        description: 'The nose is rich with mushroom, truffle, and forest floor, accompanied by black cherry, cranberry,  and clove. The palate reflects the cranberry, black cherry and truffle, but also introduces a dash of black pepper with medium tannins and acidity on the finish.',
        varietal: 'Pinot Noir',
        wineryId: 18
      },
      {
        name: '2017 Mineral Springs Ranch Pinot Noir',
        image: 'https://purchase.sotervineyards.com/assets/images/products/pictures/o_17msr_listing.jpg',
        vintage: 2017,
        description: 'Aromas: pure red cherry, cinnamon, dried raspberry. Primary Flavors: bing cherry, boysenberry. Secondary Flavors: burdock root, vanilla seed pod. Finish: spicy, balanced, polished tannins.',
        varietal: 'Pinot Noir',
        wineryId: 19
      },
      {
        name: '2019 Single-Vineyard Carneros Chardonnay',
        image: 'https://www.thedonumestate.com/assets/upload/images/wines/.thumbs/wines-2019-donum-carneros-reserve-chardonnay-0.0.1600.png',
        vintage: 2019,
        description: 'Bright gold in color, the Reserve Chardonnay opens with aromas of apple, lemon, Asian spice, apricot, and a hint of flint. The palate is rich and intense, but well balanced, with flavors of Macintosh apple, lime, and fresh cut flowers. The flinty note returns on the long, bold finish.',
        varietal: 'Chardonnay',
        wineryId: 20
      },
      {
        name: '2018 Cabernet Franc',
        image: 'https://www.gunbun.com/wp-content/uploads/2016/01/2013CabFranc_sm.png',
        vintage: 2018,
        description: 'Rhinefarm’s Cabernet Franc is known for its rich, savory, peppery character and intense dark fruit flavors. French oak usage adds sweet smokiness and fresh coffee beans to the mix. It’s a heavy, dense wine that is only available through the Bacchus Club and direct from the winery.',
        varietal: 'Cabernet Franc',
        wineryId: 21
      },
      {
        name: '2018 Zinfandel',
        image: 'https://images.commerce7.com/hamel-family-wines/images/large/hamel_zinfandel_750_so_fa-1616601657017.png',
        vintage: 2018,
        description: 'A deep ruby robe in the glass, this wine\'s aromas display red and black fruits and floral notes of lavender and rose petal over a background of graphite, black peppercorn, and forest floor. The structure is finely layered with good amplitude and vitality towards the middle of the palate and a complex finish where pure dark fruit and savory spice notes emerge. The wine is alluring and accessible upon release, but will additionally gain complexity over the next seven years.',
        varietal: 'Zinfandel',
        wineryId: 22
      },
      {
        name: '2018 Atlas East Cabernet Sauvignon',
        image: 'https://store.scribewinery.com/assets/images/products/pictures/2018_Atlas_East_CabSauv.jpg',
        vintage: 2018,
        description: 'Wild blackberry, bay laurel, graphite.',
        varietal: 'Cabernet Sauvignon',
        wineryId: 22
      },
      {
        name: '2018 Hanzell Vineyards Cabernet Sauvignon',
        vintage: 2018,
        description: 'Heady aromas of dark cherry, black licorice, cassis, cedar and rose petal fill the glass and compel one to taste. The palate reflects the aromas, interweaving bright notes of pink grapefruit, red cherry, cranberry and blood orange with pencil lead and tar. Intriguing and delicious in its youth, this wine will surely evolve and reveal more personality for many years to come.',
        varietal: 'Cabernet Sauvignon',
        wineryId: 24
      },
      {
        name: '2019 Altura Collection Dolcetto',
        image: 'https://viansa.imgix.net/common/images/products/2019 Viansa Dolcetto Russian River.png?auto=compress,format&h=600&w=246',
        vintage: 2019,
        description: 'This beautifully composed Italian wine expresses hints of red currants, dried herbs, and talc jump out of the glass while flavors of plums, kirsch, and dried flowers carry the wine on the palate.',
        varietal: 'Dolcetto',
        wineryId: 25
      },
      {
        name: '2019 Chateau Buena Vista Grand Reserve Cabernet Sauvignon',
        image: 'https://store.buenavistawinery.com/Catalog/PRT_BVCSN193_BVBTLSHOT_20211101_094803.PNG',
        vintage: 2019,
        description: 'A deep ruby-purple in color, this beautiful Zinfandel opens with aromas of blackberry jam, dried flowers and smoky undertones. Black cherry and black plum flavors are met with black pepper and a note of citrus peel. Soft, grainy tannins with balanced acidity lead to a spicy and fresh finish.',
        varietal: 'Cabernet Sauvignon',
        wineryId: 26
      },
      {
        name: '2019 Gap\'s Crown Vineyard Chardonnay',
        image: 'https://shop.threestickswines.com/assets/images/products/pictures/2019gapschard.png',
        vintage: 2019,
        description: 'This wine is characterized by its signature minerality and vibrant acidity, accented by flavors of kiwi, citrus zest, green apple and depth across the palate. Every moment with this heavenly chardonnay is to be savored.',
        varietal: 'Cabernet Sauvignon',
        wineryId: 27
      },
      {
        name: '2017 Napa Valley Merlot',
        image: 'https://shop.vsattui.com/assets/images/wines/originals/2017%20Napa%20Valley%20Merlot.png',
        vintage: 2017,
        description: 'The aromas are reminiscent of cassis and black cherry with pretty, floral rose petal notes. On the palate the wine is richly flavored with juicy blueberry and sweet, red berry fruit balanced by a refreshing acidity. The finish is smooth, round and plush but more powerful as the flavors dissipate leaving a solid core of toasty oak and a very pleasant, lingering impression of dark fruit.',
        varietal: 'Merlot',
        wineryId: 28
      },
      {
        name: '2018 Signature Shiraz',
        image: 'https://www.darioush.com/system/uploads/image/asset/2652/2018_Shiraz_-_H600.jpg',
        vintage: 2018,
        description: 'A bevy of dense black fruits and savory spices unfold and persist on the palate— plum, licorice, and black cherry maintain exceptional freshness and focus, while beautiful floral fragrances of lavender and rose hips reveal the wine’s nuanced varietal character. Bergamot, cola, smoked bacon, and Asian incense add dimension and depth across the long, rewarding finish.',
        varietal: 'Shiraz',
        wineryId: 29
      },
      {
        name: '2020 Napa Valley Sauvignon Blanc',
        image: 'https://montelena.com/wp-content/uploads/2020/05/CHM_Shop_SauvignonBlanc_2020_Details-1.png',
        vintage: 2020,
        description: 'This Sauvignon Blanc delivers. Yields were low and the vintage was creatively challenging, but our small field blend of heritage clones and new selections has come through once again. Resilience seems to be the aspirational virtue tied to 2020, which reflects the character and nature of this 40 year old vineyard as it continues to produce outstanding quality with little fanfare.',
        varietal: 'Sauvignon Blanc',
        wineryId: 30
      },
      {
        name: '2016 Cabernet Sauvignon',
        image: 'https://thefamilycoppola.blob.core.windows.net/web/Inglenook/wines/NV_Ing_SauvBlanc_340x740-2.png',
        vintage: 2016,
        description: 'On the nose, the 2016 Inglenook Cabernet Sauvignon opens with very focused fresh, ripe black cherry and blackberry aromas. In the background, scents of garrigue – lavender, thyme, and bay – emerge and build complexity. On the palate, the wine is superbly balanced to the point that it is difficult to identify individual flavor components, although cassis bud and blackberry do reveal themselves. The fine-grained, polished tannins are very much in harmony with the oak and exhibit an underlying firmness that continues throughout the long, lingering aromatic finish.',
        varietal: 'Cabernet Sauvignon',
        wineryId: 31
      },
      {
        name: '2018 Estate Pinot Noir',
        image: 'https://www.domainecarneros.com/system/uploads/fae/image/asset/725/2018_Estate_Pinot_Noir.png',
        vintage: 2018,
        description: 'Beginning with the nose one encounters plum clafouti, cherries, bergamot tea, and red roses. Ten months of barrel age lends a sweetness that balances the supple tannin from this exceptional vintage producing an intense full bodied Napa Valley Pinot Noir. Of particular note in this edition is the juicy and sweet fruited entry upon the palate, backed up by delicate spice notes (sassafras) and leather that lead to baked cherry and black raspberry. The hallmark of Domaine Carneros Pinot Noir is the texture, and this acclaimed wine delivers with a supple and silky mouth feel.',
        varietal: 'Pinot Noir',
        wineryId: 32
      },
      {
        name: '2016 Petit Verdot',
        image: 'https://www.lunavineyards.com/upload/img/7/PV16_600.png',
        vintage: 2016,
        description: 'Vibrant blackberry and wild blueberry jam, with underlying earth and graphic notes. Warm blueberry pie with notes of clove and vanilla. Long, soft mocha tannin finish.',
        varietal: 'Petit Verdot',
        wineryId: 33
      },
      {
        name: '2019 Andretti California Sangiovese',
        image: 'https://client-assets.ecellar1.com/andrettiwinery/prod_image1_1571.jpg',
        vintage: 2019,
        description: 'Pretty notes of strawberry, pomegranate, cloves and spice.',
        varietal: 'Sangiovese',
        wineryId: 34
      },
      {
        name: '2019 Field Book Syrah',
        image: 'https://spottswoode.com/wp-content/uploads/2020/01/SPW-Field-Book-2019-Bottle-200x708.png',
        vintage: 2019,
        description: 'A savory and textural wine, the 2019 Griffin’s Lair Syrah evokes notes of black pepper, blueberry, dried herbs, bacon fat, and a wild, brambly ruggedness only found in cool-coastal Syrah. The chalky, rounded tannins underlay ethereal aromas of sage, hibiscus, and forest understory. This wine unravels to reveal a hearty core encompassed by layers of complexity.',
        varietal: 'Syrah',
        wineryId: 35
      },
      {
        name: '2019 Stag\'s Leap Napa Valley Viognier',
        image: 'https://www.stagsleap.com/dw/image/v2/BDBC_PRD/on/demandware.static/-/Sites-tweus-master-catalog/default/dw17acdc19/images/hi-res/StagsLeap/8033671-2019-Stags-Leap-NV-Viognier-750/8033671-2019-Stags-Leap-NV-Viognier-750.png?sw=566&sh=849&sm=fit',
        vintage: 2019,
        description: 'Honeycomb and slate greet the nose first in this dry, crisp and lengthy white wine, moderate in viscosity and ripeness. Lovely notes of apricot follow around a tease of honeysuckle and white flower. It’s impressive through the focused finish.',
        varietal: 'Viognier',
        wineryId: 36
      },
      {
        name: '2018 Rancho Victoria Barbera',
        image: 'https://shop.castellodiamorosa.com/assets/images/products/pictures/barbera_18.png',
        vintage: 2018,
        description: 'A classic Italian varietal wine with plush aromas of dark cherry, black raspberry, and pomegranate complemented by bittersweet chocolate and nutmeg. Barbera is the third most planted red grape in Italy, where winemakers have relied on it since the 13th century to produce robust wines that age beautifully.',
        varietal: 'Barbera',
        wineryId: 37
      },
      {
        name: '2018 Beringer Bros Rye Barrel Aged Red Blend',
        image: 'https://www.beringer.com/dw/image/v2/BDBC_PRD/on/demandware.static/-/Sites-tweus-master-catalog/default/dw928c44a9/images/hi-res/Beringer/8057609_2018_Beringer_Brothers_Rye_Red%20Blend-750/8057609_2018_Beringer_Brothers_Rye_Red%20Blend-750.png?sw=566&sh=849&sm=fit',
        vintage: 2018,
        description: 'This wine is bursting with ripe strawberry, caramel and vanilla with Rye Whiskey character coming through on notes of coriander, caraway, lavender, and bergamot. Full bodied with silky tannins and a rich, lingering finish.',
        varietal: 'Red Blend',
        wineryId: 38
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Wines', null, {});
  }
};
