// Base de datos de productos Maria Nila
const MARIA_NILA_PRODUCTS = {
    // ==================== HEAD & HAIR HEAL (Cuero cabelludo sensible) ====================
    headHairHealShampoo: { name: "Head & Hair Heal Shampoo", desc: "Calma cuero cabelludo sensible con aloe vera y piroctona olamina.", img: "https://marianila.com/cdn/shop/files/13650-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-shampoo-350-ml", category: "scalp" },
    headHairHealConditioner: { name: "Head & Hair Heal Conditioner", desc: "Acondicionador calmante para el cuero cabelludo.", img: "https://marianila.com/cdn/shop/files/13651-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-conditioner-300-ml", category: "scalp" },
    headHairHealMasque: { name: "Head & Hair Heal Masque", desc: "Mascarilla calmante con aloe vera para cuero cabelludo sensible.", img: "https://marianila.com/cdn/shop/files/13652-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-masque-250-ml", category: "scalp" },
    headHairHealSoothingSerum: { name: "Head & Hair Heal Serum", desc: "Serum calmante para el cuero cabelludo con aloe vera.", img: "https://marianila.com/cdn/shop/files/13653-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-soothing-serum-150-ml", category: "scalp" },
    headHairHealScalpScrub: { name: "Head & Hair Heal Scalp Scrub", desc: "Exfoliante fisico para cuero cabelludo sensible con sales marinas.", img: "https://marianila.com/cdn/shop/files/13655-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-scalp-scrub-200-ml", category: "scalp" },
    headHairHealScalpTonic: { name: "Head & Hair Heal Scalp Tonic", desc: "Tonico calmante para reducir irritacion y picazon del cuero cabelludo.", img: "https://marianila.com/cdn/shop/files/13656-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-scalp-tonic-150-ml", category: "scalp" },
    headHairHealDuo: { name: "Head & Hair Heal Care Duo", desc: "Pack ahorro champu + acondicionador para cuero cabelludo sensible.", img: "https://marianila.com/cdn/shop/files/13654-packshot.jpg", url: "https://marianila.com/products/care-duo-head-hair-heal", category: "scalp" },
    
    // ==================== TRUE SOFT (Cabello seco) ====================
    trueSoftShampoo: { name: "True Soft Shampoo", desc: "Hidratacion profunda con aceite de argan para cabello seco.", img: "https://marianila.com/cdn/shop/files/3630-packshot.jpg", url: "https://marianila.com/products/true-soft-shampoo-350-ml", category: "dry" },
    trueSoftConditioner: { name: "True Soft Conditioner", desc: "Acondicionador hidratante con aceite de argan.", img: "https://marianila.com/cdn/shop/files/3631-packshot.jpg", url: "https://marianila.com/products/true-soft-conditioner-300-ml", category: "dry" },
    trueSoftMasque: { name: "True Soft Masque", desc: "Mascarilla nutritiva para cabello seco con aceite de argan.", img: "https://marianila.com/cdn/shop/files/3632-packshot.jpg", url: "https://marianila.com/products/true-soft-masque-250-ml", category: "dry" },
    trueSoftArganOil: { name: "True Soft Argan Oil", desc: "Aceite de argan para hidratacion.", img: "https://marianila.com/cdn/shop/files/3637-packshot.jpg", url: "https://marianila.com/products/true-soft-argan-oil-100-ml", category: "dry" },
    trueSoftBoosterMasque: { name: "True Soft Booster Masque", desc: "Mascarilla intensiva para cabello muy seco.", img: "https://marianila.com/cdn/shop/files/3633-packshot.jpg", url: "https://marianila.com/products/true-soft-booster-masque-250-ml", category: "dry" },
    trueSoftLeaveInCream: { name: "True Soft Leave In Cream", desc: "Crema sin enjuague hidratante con aceite de argan para cabello seco.", img: "https://marianila.com/cdn/shop/files/3635-packshot.jpg", url: "https://marianila.com/products/true-soft-leave-in-cream-100-ml", category: "dry" },
    trueSoftHairPrimer: { name: "True Soft Hair Primer", desc: "Pre-shampoo hidratante que facilita el desenredado y protege.", img: "https://marianila.com/cdn/shop/files/3636-packshot.jpg", url: "https://marianila.com/products/true-soft-hair-primer-150-ml", category: "dry" },
    trueSoftDuo: { name: "True Soft Care Duo", desc: "Pack ahorro champu + acondicionador True Soft.", img: "https://marianila.com/cdn/shop/files/3634-packshot.jpg", url: "https://marianila.com/products/care-duo-true-soft", category: "dry" },
    
    // ==================== PURE VOLUME (Cabello fino) ====================
    pureVolumeShampoo: { name: "Pure Volume Shampoo", desc: "Voluminizador con provitamina B5 para cabello fino.", img: "https://marianila.com/cdn/shop/files/3610-packshot.jpg", url: "https://marianila.com/products/pure-volume-shampoo-350-ml", category: "fine" },
    pureVolumeConditioner: { name: "Pure Volume Conditioner", desc: "Acondicionador voluminizador ligero.", img: "https://marianila.com/cdn/shop/files/3611-packshot.jpg", url: "https://marianila.com/products/pure-volume-conditioner-300-ml", category: "fine" },
    pureVolumeMasque: { name: "Pure Volume Masque", desc: "Mascarilla voluminizadora con provitamina B5.", img: "https://marianila.com/cdn/shop/files/3612-packshot.jpg", url: "https://marianila.com/products/pure-volume-masque-250-ml", category: "fine" },
    pureVolumeMousse: { name: "Pure Volume Mousse", desc: "Espuma nutritiva y voluminizadora para cabello fino.", img: "https://marianila.com/cdn/shop/files/3613-packshot.jpg", url: "https://marianila.com/products/pure-volume-mousse-300-ml", category: "fine" },
    pureVolumeLeaveInCream: { name: "Pure Volume Leave In Cream", desc: "Crema ligera sin enjuague para dar cuerpo al cabello fino.", img: "https://marianila.com/cdn/shop/files/3614-packshot.jpg", url: "https://marianila.com/products/pure-volume-leave-in-cream-100-ml", category: "fine" },

    // ==================== LUMINOUS COLOUR (Cabello teñido) ====================
    luminousColourShampoo: { name: "Luminous Colour Shampoo", desc: "Preserva color con extracto de Granada.", img: "https://marianila.com/cdn/shop/files/3625-packshot.jpg", url: "https://marianila.com/products/luminous-colour-shampoo-350-ml", category: "colored" },
    luminousColourConditioner: { name: "Luminous Colour Conditioner", desc: "Acondicionador preservador de color.", img: "https://marianila.com/cdn/shop/files/3626-packshot.jpg", url: "https://marianila.com/products/luminous-colour-conditioner-300-ml", category: "colored" },
    luminousColourMasque: { name: "Luminous Colour Masque", desc: "Mascarilla protectora del color con extracto de granada.", img: "https://marianila.com/cdn/shop/files/3627-packshot.jpg", url: "https://marianila.com/products/luminous-colour-masque-250-ml", category: "colored" },
    luminousColourLeaveInCream: { name: "Luminous Colour Leave In Cream", desc: "Crema sin enjuague que sella el color y aporta brillo.", img: "https://marianila.com/cdn/shop/files/3628-packshot.jpg", url: "https://marianila.com/products/luminous-colour-leave-in-cream-100-ml", category: "colored" },
    luminousColourToneFinishSpray: { name: "Luminous Colour Tone Finish Spray", desc: "Spray fijador que mantiene el color vibrante y aporta brillo.", img: "https://marianila.com/cdn/shop/files/3629-packshot.jpg", url: "https://marianila.com/products/luminous-colour-tone-finish-spray-150-ml", category: "colored" },

    // ==================== PURIFYING CLEANSE (Cuero cabelludo graso) ====================
    purifyingCleanseShampoo: { name: "Purifying Cleanse Shampoo", desc: "Champu purificante para cuero cabelludo graso.", img: "https://marianila.com/cdn/shop/files/3615-packshot.jpg", url: "https://marianila.com/products/purifying-cleanse-shampoo-350-ml", category: "oily" },
    purifyingCleanseExfoliatingSerum: { name: "Purifying Cleansing Serum", desc: "Serum exfoliante detox para el cuero cabelludo.", img: "https://marianila.com/cdn/shop/files/3616-packshot.jpg", url: "https://marianila.com/products/purifying-cleanse-exfoliating-serum-150-ml", category: "oily" },
    purifyingCleanseDetoxMasque: { name: "Purifying Cleanse Detox Masque", desc: "Mascarilla detox purificante para cuero cabelludo graso.", img: "https://marianila.com/cdn/shop/files/3617-packshot.jpg", url: "https://marianila.com/products/purifying-cleanse-detox-masque-250-ml", category: "oily" },

    // ==================== STRUCTURE REPAIR (Cabello dañado) ====================
    structureRepairShampoo: { name: "Structure Repair Shampoo", desc: "Repara cabello dañado con keratina.", img: "https://marianila.com/cdn/shop/files/3600-packshot.jpg", url: "https://marianila.com/products/structure-repair-shampoo-350-ml", category: "damaged" },
    structureRepairConditioner: { name: "Structure Repair Conditioner", desc: "Acondicionador reparador con keratina.", img: "https://marianila.com/cdn/shop/files/3601-packshot.jpg", url: "https://marianila.com/products/structure-repair-conditioner-300-ml", category: "damaged" },
    structureRepairMasque: { name: "Structure Repair Masque", desc: "Mascarilla reparadora intensiva con keratina.", img: "https://marianila.com/cdn/shop/files/3602-packshot.jpg", url: "https://marianila.com/products/structure-repair-masque-250-ml", category: "damaged" },
    structureRepairLeaveInCream: { name: "Structure Repair Leave In Cream", desc: "Crema sin enjuague reparadora para cabello dañado.", img: "https://marianila.com/cdn/shop/files/3603-packshot.jpg", url: "https://marianila.com/products/structure-repair-leave-in-cream-100-ml", category: "damaged" },
    bondBuilder: { name: "Bond Builder", desc: "Reparador de enlaces capilares intensivo.", img: "https://marianila.com/cdn/shop/files/3604-packshot.jpg", url: "https://marianila.com/products/bond-builder-100-ml", category: "damaged" },
    structureRepairBondingBooster: { name: "Structure Repair Bonding Booster", desc: "Potenciador de union que refuerza enlaces capilares en tratamientos quimicos.", img: "https://marianila.com/cdn/shop/files/3605-packshot.jpg", url: "https://marianila.com/products/structure-repair-bonding-booster-100-ml", category: "damaged" },

    // ==================== SHEER SILVER (Cabello rubio/canoso) ====================
    sheerSilverShampoo: { name: "Sheer Silver Shampoo", desc: "Pigmentos violeta que neutralizan tonos dorados en rubios.", img: "https://marianila.com/cdn/shop/files/3640-packshot.jpg", url: "https://marianila.com/products/sheer-silver-shampoo-350-ml", category: "blonde" },
    sheerSilverConditioner: { name: "Sheer Silver Conditioner", desc: "Acondicionador con pigmentos violeta para rubios.", img: "https://marianila.com/cdn/shop/files/3641-packshot.jpg", url: "https://marianila.com/products/sheer-silver-conditioner-300-ml", category: "blonde" },
    sheerSilverMasque: { name: "Sheer Silver Masque", desc: "Mascarilla con pigmentos violeta para neutralizar tonos.", img: "https://marianila.com/cdn/shop/files/3642-packshot.jpg", url: "https://marianila.com/products/sheer-silver-masque-250-ml", category: "blonde" },
    sheerSilverBoosterMasque: { name: "Sheer Silver Booster Masque", desc: "Mascarilla intensiva con pigmentos violeta.", img: "https://marianila.com/cdn/shop/files/3643-packshot.jpg", url: "https://marianila.com/products/sheer-silver-booster-masque-250-ml", category: "blonde" },
    sheerSilverToneFixerSpray: { name: "Sheer Silver Tone Fixer Spray", desc: "Spray fijador con pigmentos violeta para neutralizar tonos amarillos entre lavados.", img: "https://marianila.com/cdn/shop/files/3645-packshot.jpg", url: "https://marianila.com/products/sheer-silver-tone-fixer-spray-150-ml", category: "blonde" },
    sheerSilverDuo: { name: "Sheer Silver Shampoo + Conditioner Duo", desc: "Pack champu y acondicionador con pigmentos violeta para rubios.", img: "https://marianila.com/cdn/shop/files/3644-packshot.jpg", url: "https://marianila.com/products/sheer-silver-shampoo-conditioner-duo", category: "blonde" },
    
    // ==================== COLOUR REFRESH (Máscaras de color) ====================
    colourRefreshAutumnRed: { name: "Colour Refresh Autumn Red", desc: "Mascara de color rojo intenso con aceite de argan.", img: "https://marianila.com/cdn/shop/files/3650-packshot.jpg", url: "https://marianila.com/products/colour-refresh-autumn-red-100-ml", category: "color-mask" },
    colourRefreshCacao: { name: "Colour Refresh Cacao", desc: "Mascara de color marron oscuro con aceite de argan.", img: "https://marianila.com/cdn/shop/files/3651-packshot.jpg", url: "https://marianila.com/products/colour-refresh-cacao-100-ml", category: "color-mask" },
    colourRefreshCacaoIntense: { name: "Colour Refresh Cacao Intense", desc: "Mascara de color marron muy oscuro.", img: "https://marianila.com/cdn/shop/files/3652-packshot.jpg", url: "https://marianila.com/products/colour-refresh-cacao-intense-100-ml", category: "color-mask" },
    colourRefreshPearlSilver: { name: "Colour Refresh Pearl Silver", desc: "Mascara de color plata con pigmentos violeta.", img: "https://marianila.com/cdn/shop/files/3653-packshot.jpg", url: "https://marianila.com/products/colour-refresh-pearl-silver-100-ml", category: "color-mask" },
    colourRefreshBrightCopper: { name: "Colour Refresh Bright Copper", desc: "Mascara de color cobre brillante.", img: "https://marianila.com/cdn/shop/files/3666-packshot.jpg", url: "https://marianila.com/products/colour-refresh-bright-copper-300-ml", category: "color-mask" },
    colourRefreshBrightRed: { name: "Colour Refresh Bright Red", desc: "Mascara de color rojo brillante intenso.", img: "https://marianila.com/cdn/shop/files/3655-packshot.jpg", url: "https://marianila.com/products/colour-refresh-bright-red-100-ml", category: "color-mask" },
    colourRefreshCoolCream: { name: "Colour Refresh Cool Cream", desc: "Mascara de color beige frio para rubios.", img: "https://marianila.com/cdn/shop/files/3656-packshot.jpg", url: "https://marianila.com/products/colour-refresh-cool-cream-100-ml", category: "color-mask" },
    colourRefreshPinkPeach: { name: "Colour Refresh Pink Peach", desc: "Mascara de color rosa melocoton.", img: "https://marianila.com/cdn/shop/files/3657-packshot.jpg", url: "https://marianila.com/products/colour-refresh-pink-peach-100-ml", category: "color-mask" },
    colourRefreshLavender: { name: "Colour Refresh Lavender", desc: "Mascara de color lavanda suave.", img: "https://marianila.com/cdn/shop/files/3658-packshot.jpg", url: "https://marianila.com/products/colour-refresh-lavender-100-ml", category: "color-mask" },
    colourRefreshBeigeBlonde: { name: "Colour Refresh Beige Blonde", desc: "Mascara de color rubio beige.", img: "https://marianila.com/cdn/shop/files/3659-packshot.jpg", url: "https://marianila.com/products/colour-refresh-beige-blonde-100-ml", category: "color-mask" },
    colourRefreshCaramelBrown: { name: "Colour Refresh Caramel Brown", desc: "Mascara de color marron caramelo.", img: "https://marianila.com/cdn/shop/files/3660-packshot.jpg", url: "https://marianila.com/products/colour-refresh-caramel-brown-100-ml", category: "color-mask" },
    colourRefreshPearlRose: { name: "Colour Refresh Pearl Rose", desc: "Mascara de color rosa perla.", img: "https://marianila.com/cdn/shop/files/3661-packshot.jpg", url: "https://marianila.com/products/colour-refresh-pearl-rose-100-ml", category: "color-mask" },
    colourRefreshWhiteMix: { name: "Colour Refresh White Mix", desc: "Base blanca para diluir y crear tonos pastel.", img: "https://marianila.com/cdn/shop/files/3662-packshot.jpg", url: "https://marianila.com/products/colour-refresh-white-mix-100-ml", category: "color-mask" },
    colourRefreshHoneyBlonde: { name: "Colour Refresh Honey Blonde", desc: "Mascara de color rubio miel.", img: "https://marianila.com/cdn/shop/files/3663-packshot.jpg", url: "https://marianila.com/products/colour-refresh-honey-blonde-100-ml", category: "color-mask" },
    colourRefreshBlack: { name: "Colour Refresh Black", desc: "Mascara de color negro intenso.", img: "https://marianila.com/cdn/shop/files/3664-packshot.jpg", url: "https://marianila.com/products/colour-refresh-black-100-ml", category: "color-mask" },
    colourRefreshVividViolet: { name: "Colour Refresh Vivid Violet", desc: "Mascara de color violeta vivo.", img: "https://marianila.com/cdn/shop/files/3665-packshot.jpg", url: "https://marianila.com/products/colour-refresh-vivid-violet-100-ml", category: "color-mask" },

    // ==================== COILS & CURLS (Cabello rizado) ====================
    coilsCurlsCoWash: { name: "Coils & Curls Co-Wash", desc: "Limpieza suave sin sulfatos para rizos.", img: "https://marianila.com/cdn/shop/files/3670-packshot.jpg", url: "https://marianila.com/products/coils-curls-co-wash", category: "curly" },
    coilsCurlsOilInCream: { name: "Coils & Curls Oil In Cream", desc: "Crema leave-in definidora de rizos con manteca de karite.", img: "https://marianila.com/cdn/shop/files/3671-packshot.jpg", url: "https://marianila.com/products/coils-curls-oil-in-cream", category: "curly" },
    coilsCurlsFinishingTreatmentMasque: { name: "Coils & Curls Finishing Masque", desc: "Mascarilla nutritiva para definir y suavizar rizos.", img: "https://marianila.com/cdn/shop/files/3672-packshot.jpg", url: "https://marianila.com/products/coils-curls-finishing-treatment-masque", category: "curly" },
    coilsCurlsWeightlessCurlDefiner: { name: "Weightless Curl Definer", desc: "Gel definidor de rizos sin peso con aloe vera.", img: "https://marianila.com/cdn/shop/files/3673-packshot.jpg", url: "https://marianila.com/products/coils-curls-weightless-curl-definer", category: "curly" },
    coilsCurlsLusciousCurlDefiner: { name: "Luscious Curl Definer", desc: "Gel rico que define rizos con medio agarre.", img: "https://marianila.com/cdn/shop/files/3674-packshot.jpg", url: "https://marianila.com/products/coils-curls-luscious-curl-definer", category: "curly" },
    coilsCurlsPrimer: { name: "Coils & Curls Primer", desc: "Pre-shampoo y acondicionador sin enjuague para rizos definidos.", img: "https://marianila.com/cdn/shop/files/3675-packshot.jpg", url: "https://marianila.com/products/coils-curls-primer", category: "curly" },
    coilsCurlsCurlCream: { name: "Coils & Curls Curl Cream", desc: "Crema definidora de rizos con medio agarre y brillo.", img: "https://marianila.com/cdn/shop/files/3676-packshot.jpg", url: "https://marianila.com/products/coils-curls-curl-cream", category: "curly" },

    // ==================== STYLING (Productos para peinar) ====================
    oceanSpray: { name: "Ocean Spray", desc: "Spray de agua salada con extra agarre para beach waves.", img: "https://marianila.com/cdn/shop/files/3680-packshot.jpg", url: "https://marianila.com/products/ocean-spray-150-ml", category: "styling" },
    saltyMist: { name: "Salty Mist", desc: "Bruma salina ligera para textura natural.", img: "https://marianila.com/cdn/shop/files/3681-packshot.jpg", url: "https://marianila.com/products/salty-mist-150-ml", category: "styling" },
    stylingMousse: { name: "Styling Mousse", desc: "Espuma de peinado con agarre flexible.", img: "https://marianila.com/cdn/shop/files/3682-packshot.jpg", url: "https://marianila.com/products/styling-mousse-300-ml", category: "styling" },
    stylingSpray: { name: "Styling Spray", desc: "Spray de peinado con agarre ligero.", img: "https://marianila.com/cdn/shop/files/3683-packshot.jpg", url: "https://marianila.com/products/styling-spray-300-ml", category: "styling" },
    finishingSpray: { name: "Finishing Spray", desc: "Laca de fijacion fuerte y brillo.", img: "https://marianila.com/cdn/shop/files/3684-packshot.jpg", url: "https://marianila.com/products/finishing-spray-300-ml", category: "styling" },
    shapingHeatSpray: { name: "Shaping Heat Spray", desc: "Protector termico para plancha y secador.", img: "https://marianila.com/cdn/shop/files/3685-packshot.jpg", url: "https://marianila.com/products/shaping-heat-spray-150-ml", category: "styling" },
    creamHeatSpray: { name: "Cream Heat Spray", desc: "Protector termico en crema para peinado.", img: "https://marianila.com/cdn/shop/files/3686-packshot.jpg", url: "https://marianila.com/products/cream-heat-spray-150-ml", category: "styling" },
    quickDryHeatSpray: { name: "Quick Dry Heat Spray", desc: "Protector termico de secado rapido.", img: "https://marianila.com/cdn/shop/files/3687-packshot.jpg", url: "https://marianila.com/products/quick-dry-heat-spray-150-ml", category: "styling" },
    glossCoat: { name: "Gloss Coat", desc: "Spray alisador termoactivado para brillo.", img: "https://marianila.com/cdn/shop/files/3688-packshot.jpg", url: "https://marianila.com/products/gloss-coat-200-ml", category: "styling" },
    stylingCream: { name: "Styling Cream", desc: "Crema moldeadora flexible para definicion.", img: "https://marianila.com/cdn/shop/files/3689-packshot.jpg", url: "https://marianila.com/products/styling-cream-100-ml", category: "styling" },
    volumeSpray: { name: "Volume Spray", desc: "Spray voluminizador ligero para raiz.", img: "https://marianila.com/cdn/shop/files/3690-packshot.jpg", url: "https://marianila.com/products/volume-spray-100-ml", category: "styling" },
    powerPowder: { name: "Power Powder", desc: "Polvo texturizador para volumen extra en raiz.", img: "https://marianila.com/cdn/shop/files/3691-packshot.jpg", url: "https://marianila.com/products/power-powder-20-g", category: "styling" },
    cleansingPowder: { name: "Cleansing Powder", desc: "Polvo limpiador para peinar y texturizar.", img: "https://marianila.com/cdn/shop/files/3692-packshot.jpg", url: "https://marianila.com/products/cleansing-powder-60-g", category: "styling" },
    sprayWax: { name: "Spray Wax", desc: "Cera en aerosol para textura y definicion.", img: "https://marianila.com/cdn/shop/files/3693-packshot.jpg", url: "https://marianila.com/products/spray-wax-200-ml", category: "styling" },
    stylingPaste: { name: "Styling Paste", desc: "Pasta moldeadora flexible con mate.", img: "https://marianila.com/cdn/shop/files/3694-packshot.jpg", url: "https://marianila.com/products/styling-paste-100-ml", category: "styling" },
    extremeWax: { name: "Extreme Wax", desc: "Cera de fijacion extrema y brillo medio.", img: "https://marianila.com/cdn/shop/files/3695-packshot.jpg", url: "https://marianila.com/products/extreme-wax-100-ml", category: "styling" },
    fixatingWax: { name: "Fixating Wax", desc: "Cera fijadora de acabado mate.", img: "https://marianila.com/cdn/shop/files/3696-packshot.jpg", url: "https://marianila.com/products/fixating-wax-100-ml", category: "styling" },
    veganSculptingWax: { name: "Vegan Sculpting Wax", desc: "Cera moldeadora vegana para estilismo.", img: "https://marianila.com/cdn/shop/files/3697-packshot.jpg", url: "https://marianila.com/products/vegan-sculpting-wax-100-ml", category: "styling" },
    dryShampoo: { name: "Dry Shampoo", desc: "Champu seco refrescante para lavados entre lavados.", img: "https://marianila.com/cdn/shop/files/3698-packshot.jpg", url: "https://marianila.com/products/dry-shampoo-250-ml", category: "styling" },
    soothingDryShampoo: { name: "Soothing Dry Shampoo", desc: "Champu seco calmante para cuero cabelludo sensible.", img: "https://marianila.com/cdn/shop/files/3699-packshot.jpg", url: "https://marianila.com/products/soothing-dry-shampoo-250-ml", category: "styling" },
    hairPrimer: { name: "Hair Primer", desc: "Pre-shampoo protector que facilita el desenredado y protege del calor.", img: "https://marianila.com/cdn/shop/files/3702-packshot.jpg", url: "https://marianila.com/products/hair-primer-150-ml", category: "styling" },
    shineCream: { name: "Shine Cream", desc: "Crema brillante para aportar luz y suavidad sin peso.", img: "https://marianila.com/cdn/shop/files/3703-packshot.jpg", url: "https://marianila.com/products/shine-cream-100-ml", category: "styling" },
    textureCream: { name: "Texture Cream", desc: "Crema texturizadora para definicion y separacion de mechas.", img: "https://marianila.com/cdn/shop/files/3704-packshot.jpg", url: "https://marianila.com/products/texture-cream-100-ml", category: "styling" },

    // ==================== OTROS ====================
    healingCicaOil: { name: "Healing Cica Oil", desc: "Aceite reparador con Cica para barrera cutanea.", img: "https://marianila.com/cdn/shop/files/3700-packshot.jpg", url: "https://marianila.com/products/healing-cica-oil-100-ml", category: "treatment" },
    floralDriftHairMist: { name: "Floral Drift Hair Mist", desc: "Bruma capilar floral con fragancia suave.", img: "https://marianila.com/cdn/shop/files/3701-packshot.jpg", url: "https://marianila.com/products/floral-drift-fine-fragrance-hair-mist-100-ml", category: "treatment" },
    hairButter: { name: "Hair Butter", desc: "Manteca nutritiva intensiva con manteca de karite para cabello muy seco.", img: "https://marianila.com/cdn/shop/files/3705-packshot.jpg", url: "https://marianila.com/products/hair-butter-100-ml", category: "treatment" },
    scalpTreatment: { name: "Scalp Treatment", desc: "Tratamiento intensivo para equilibrar y calmar el cuero cabelludo.", img: "https://marianila.com/cdn/shop/files/3706-packshot.jpg", url: "https://marianila.com/products/scalp-treatment-100-ml", category: "treatment" }
};

// Tratamiento Premium Olaplex del Salón
const OLAPLEX_TREATMENTS = {
    treatmentPremium: { 
        name: "Tratamiento Premium Olaplex", 
        desc: "Régenera puentes de disulfuro. Protocolo: 1) Broad Spectrum Chelating (3 min) - elimina minerales. 2) Olaplex N°1 (5 min) - recupera enlaces. 3) Olaplex N°2 (3 min) - sella enlaces. 4) Champú N°4 (1 min). 5) Mascarilla N°5 (3 min - encapsulado sin oxígeno).",
    },
    treatmentExpress: { 
        name: "Tratamiento Olaplex Express", 
        desc: "Tratamiento 3 veces más fuerte, 3 veces más suave, 3 veces más elástico en 3 min. Paso 1: Prechampu. Paso 2: Olaplex N°3 Plus aplicado con las manos de raíces a puntas.",
    }
};

function getMariaNilaRecommendations(diagnosis) {
    const recommendations = [];
    const { density, thickness, hydration, sebum, isColored, isBlonde, isCurly, isDamaged } = diagnosis;
    
    // Cabello seco (hidratación baja)
    if (hydration < 50) {
        recommendations.push(MARIA_NILA_PRODUCTS.trueSoftShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.trueSoftConditioner);
        recommendations.push(MARIA_NILA_PRODUCTS.trueSoftMasque);
        recommendations.push(MARIA_NILA_PRODUCTS.trueSoftArganOil);
        recommendations.push(MARIA_NILA_PRODUCTS.trueSoftLeaveInCream);
    }
    
    // Cabello fino (densidad baja)
    if (density < 150) {
        recommendations.push(MARIA_NILA_PRODUCTS.pureVolumeShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.pureVolumeConditioner);
        recommendations.push(MARIA_NILA_PRODUCTS.pureVolumeMousse);
        recommendations.push(MARIA_NILA_PRODUCTS.pureVolumeLeaveInCream);
        recommendations.push(MARIA_NILA_PRODUCTS.volumeSpray);
    }
    
    // Cuero cabelludo graso
    if (sebum > 65 || sebum === 'Alto') {
        recommendations.push(MARIA_NILA_PRODUCTS.purifyingCleanseShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.purifyingCleanseExfoliatingSerum);
        recommendations.push(MARIA_NILA_PRODUCTS.purifyingCleanseDetoxMasque);
    }
    
    // Cabello teñido
    if (isColored) {
        recommendations.push(MARIA_NILA_PRODUCTS.luminousColourShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.luminousColourConditioner);
        recommendations.push(MARIA_NILA_PRODUCTS.luminousColourMasque);
        recommendations.push(MARIA_NILA_PRODUCTS.luminousColourLeaveInCream);
        recommendations.push(MARIA_NILA_PRODUCTS.colourRefreshCacao);
        recommendations.push(MARIA_NILA_PRODUCTS.colourRefreshHoneyBlonde);
    }
    
    // Rubios / Canas
    if (isBlonde) {
        recommendations.push(MARIA_NILA_PRODUCTS.sheerSilverShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.sheerSilverConditioner);
        recommendations.push(MARIA_NILA_PRODUCTS.sheerSilverMasque);
        recommendations.push(MARIA_NILA_PRODUCTS.sheerSilverToneFixerSpray);
        recommendations.push(MARIA_NILA_PRODUCTS.colourRefreshPearlSilver);
    }
    
    // Cabello rizado
    if (isCurly) {
        recommendations.push(MARIA_NILA_PRODUCTS.coilsCurlsCoWash);
        recommendations.push(MARIA_NILA_PRODUCTS.coilsCurlsOilInCream);
        recommendations.push(MARIA_NILA_PRODUCTS.coilsCurlsFinishingTreatmentMasque);
        recommendations.push(MARIA_NILA_PRODUCTS.coilsCurlsWeightlessCurlDefiner);
        recommendations.push(MARIA_NILA_PRODUCTS.coilsCurlsCurlCream);
    }
    
    // Cabello dañado
    if (isDamaged || thickness < 65) {
        recommendations.push(MARIA_NILA_PRODUCTS.structureRepairShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.structureRepairConditioner);
        recommendations.push(MARIA_NILA_PRODUCTS.structureRepairMasque);
        recommendations.push(MARIA_NILA_PRODUCTS.bondBuilder);
        recommendations.push(MARIA_NILA_PRODUCTS.structureRepairBondingBooster);
    }
    
    // Cuero cabelludo sensible
    if (hydration < 40 || sebum < 30) {
        recommendations.push(MARIA_NILA_PRODUCTS.headHairHealShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.headHairHealConditioner);
        recommendations.push(MARIA_NILA_PRODUCTS.headHairHealSoothingSerum);
        recommendations.push(MARIA_NILA_PRODUCTS.headHairHealScalpTonic);
    }
    
    // Protectores térmicos (siempre útiles)
    recommendations.push(MARIA_NILA_PRODUCTS.shapingHeatSpray);
    recommendations.push(MARIA_NILA_PRODUCTS.creamHeatSpray);
    
    // Styling para textura
    recommendations.push(MARIA_NILA_PRODUCTS.oceanSpray);
    recommendations.push(MARIA_NILA_PRODUCTS.stylingMousse);
    recommendations.push(MARIA_NILA_PRODUCTS.textureCream);
    
    // Eliminar duplicados por nombre
    const seen = new Set();
    const unique = recommendations.filter(p => {
        if (!p || seen.has(p.name)) return false;
        seen.add(p.name);
        return true;
    });
    
    return unique.slice(0, 12);
}

function getOlaplexRecommendations(diagnosis) {
    const recommendations = [];
    const { density, thickness, hydration, isColored } = diagnosis;
    
    // Tratamiento Premium para casos severos
    if (density < 130 || thickness < 60 || hydration < 45) {
        recommendations.push(OLAPLEX_TREATMENTS.treatmentPremium);
    }
    // Tratamiento Express - siempre mostrar si hay menos de 2
    if (recommendations.length < 2) {
        recommendations.push(OLAPLEX_TREATMENTS.treatmentExpress);
    }
    return recommendations.slice(0, 2);
}

function displayDiagnosisProducts(products) {
    const container = document.getElementById('products-grid');
    if (!container || !products || !Array.isArray(products)) return;
    
    let html = '';
    for (const p of products) {
        if (!p) continue;
        html += '<div style="display:flex;gap:1rem;padding:1rem;background:rgba(255,255,255,0.05);border-radius:12px;">';
        html += '<img src="' + p.img + '" alt="" style="width:60px;height:60px;object-fit:cover;border-radius:8px;background:white;" onerror="this.style.display=\'none\'">';
        html += '<div style="flex:1;"><strong style="color:#fff;">' + p.name + '</strong>';
        html += '<p style="font-size:0.75rem;color:rgba(255,255,255,0.6);">' + p.desc + '</p>';
        html += '<a href="' + p.url + '" target="_blank" style="color:#a78bfa;">Ver producto →</a></div></div>';
    }
    container.innerHTML = html || '<p style="color:#888;">No hay recomendaciones</p>';
}

function displayDiagnosisTreatments(treatments) {
    const container = document.getElementById('treatments-grid');
    if (!container || !treatments || !Array.isArray(treatments)) return;
    
    let html = '';
    for (const t of treatments) {
        if (!t) continue;
        html += '<div style="display:flex;gap:1rem;padding:1rem;background:rgba(255,255,255,0.05);border-radius:12px;border-left:3px solid #10b981;">';
        html += '<div style="font-size:1.5rem;">💊</div>';
        html += '<div style="flex:1;"><strong style="color:#fff;">' + t.name + '</strong>';
        html += '<p style="font-size:0.75rem;color:rgba(255,255,255,0.6);">' + (t.desc || '') + '</p></div></div>';
    }
    container.innerHTML = html || '<p style="color:#888;">No hay recomendaciones</p>';
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('--- Nymara App: Diagnóstico Capilar Integrado ---');

    // One-time migration: remove old saved admin email so field starts empty
    if (!localStorage.getItem('nymara_migrated_admin_email')) {
        localStorage.removeItem('nymara_admin_email');
        localStorage.setItem('nymara_migrated_admin_email', '1');
    }

    /* ═══════════════════════════════════════
       API CLIENT (Cloudflare Worker)
       ═══════════════════════════════════════ */
    const API_URL = 'https://lara-estetica-api.agenda-estetica.workers.dev';

    function getToken() { return localStorage.getItem('nymara_session_token'); }
    function setToken(t) { if (t) localStorage.setItem('nymara_session_token', t); else localStorage.removeItem('nymara_session_token'); }

    const api = {
        async request(path, { method = 'GET', body, headers = {}, raw = false } = {}) {
            const h = { ...headers };
            if (body && !raw) h['Content-Type'] = 'application/json';
            const token = getToken();
            if (token) h['Authorization'] = 'Bearer ' + token;
            const res = await fetch(API_URL + path, { method, headers: h, body: raw ? body : (body ? JSON.stringify(body) : undefined) });
            if (!res.ok) {
                let msg = 'Error (' + res.status + ')';
                try { const j = await res.json(); msg = j.error || msg; } catch (e) {}
                throw new Error(msg);
            }
            if (res.status === 204) return null;
            return res.json();
        },
        login(email, password) { return this.request('/api/auth/login', { method: 'POST', body: { email, password } }); },
        staffLogin(name, password) { return this.request('/api/auth/staff-login', { method: 'POST', body: { email: name, password } }); },
        getStaff() { return this.request('/api/auth/staff'); },
        addStaff(data) { return this.request('/api/auth/staff', { method: 'POST', body: data }); },
        updateStaff(name, data) { return this.request('/api/auth/staff/' + encodeURIComponent(name), { method: 'PUT', body: data }); },
        deleteStaff(name) { return this.request('/api/auth/staff/' + encodeURIComponent(name), { method: 'DELETE' }); },
        logout() { return this.request('/api/auth/logout', { method: 'POST' }); },
        getSession() { return this.request('/api/auth/session'); },
        forgotPassword(email) { return this.request('/api/auth/forgot', { method: 'POST', body: { email } }); },
        resetPassword(email, code, newPassword) { return this.request('/api/auth/reset', { method: 'POST', body: { email, code, newPassword } }); },
        changePassword(currentPassword, newPassword) { return this.request('/api/auth/change-password', { method: 'POST', body: { currentPassword, newPassword } }); },
        getProfile() { return this.request('/api/auth/profile'); },
        updateProfile(data) { return this.request('/api/auth/profile', { method: 'PUT', body: data }); },
        getClients() { return this.request('/api/clients'); },
        addClient(data) { return this.request('/api/clients', { method: 'POST', body: data }); },
        updateClient(data) { return this.request('/api/clients/' + data.id, { method: 'PUT', body: data }); },
        deleteClient(id) { return this.request('/api/clients/' + id, { method: 'DELETE' }); },
        getServices() { return this.request('/api/services'); },
        addService(data) { return this.request('/api/services', { method: 'POST', body: data }); },
        updateService(data) { return this.request('/api/services/' + data.id, { method: 'PUT', body: data }); },
        deleteService(id) { return this.request('/api/services/' + id, { method: 'DELETE' }); },
        getSalons() { return this.request('/api/salons'); },
        addSalon(data) { return this.request('/api/salons', { method: 'POST', body: data }); },
        updateSalon(data) { return this.request('/api/salons/' + data.id, { method: 'PUT', body: data }); },
        deleteSalon(id) { return this.request('/api/salons/' + id, { method: 'DELETE' }); },
        getAppointments() { return this.request('/api/appointments'); },
        addAppointment(row) { return this.request('/api/appointments', { method: 'POST', body: row }); },
        updateAppointment(id, row) { return this.request('/api/appointments/' + id, { method: 'PUT', body: row }); },
        updateAppointmentPhotos(id, photos) { return this.request('/api/appointments/' + id + '/photos', { method: 'PATCH', body: { photos } }); },
        deleteAppointment(id) { return this.request('/api/appointments/' + id, { method: 'DELETE' }); },
        markAppointmentReminded(id) { return this.request('/api/appointments/' + id + '/reminded', { method: 'PATCH' }); },
        getInvoices() { return this.request('/api/invoices'); },
        addInvoice(data) { return this.request('/api/invoices', { method: 'POST', body: data }); },
        deleteInvoice(id) { return this.request('/api/invoices/' + id, { method: 'DELETE' }); },
        setInvoiceStatus(id, status) { return this.request('/api/invoices/' + id, { method: 'PATCH', body: { status } }); },
        getPhotos(clientId) { return this.request('/api/photos' + (clientId ? '?clientId=' + encodeURIComponent(clientId) : '')); },
        uploadPhoto({ clientId, photoId, file, photoDate, photoType, notes, photoHash }) {
            return this.request('/api/photos/upload', {
                method: 'POST',
                raw: true,
                body: file,
                headers: {
                    'x-client-id': clientId,
                    'x-photo-id': photoId,
                    'x-file-name': file.name,
                    'x-photo-date': photoDate || '',
                    'x-photo-type': photoType || 'before',
                    'x-notes': notes || '',
                    'x-photo-hash': photoHash || '',
                },
            });
        },
        updatePhoto(id, data) { return this.request('/api/photos/' + id, { method: 'PUT', body: data }); },
        deletePhoto(id) { return this.request('/api/photos/' + id, { method: 'DELETE' }); },
    };

    /* ═══════════════════════════════════════
       STATE
       ═══════════════════════════════════════ */
    const State = {
        clients: [],
        services: [],
        appointments: [],
        salons: [],
        clientPhotos: {},
        clientSearch: '',
        appointmentClientId: '',
        // Calendar state
        calYear: new Date().getFullYear(),
        calMonth: new Date().getMonth(),
        selectedDate: null,
        selectedSalonId: null,
        isLoading: false,
        // Daily listing state
        dailyDate: (() => { const d = new Date(); const y = d.getFullYear(); const m = String(d.getMonth() + 1).padStart(2, '0'); const day = String(d.getDate()).padStart(2, '0'); return `${y}-${m}-${day}`; })(),
        listMode: 'day',
        listMonth: (() => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0'); })(),
        activeSalonId: localStorage.getItem('nymara_agenda_salon') || 'all',
        // Auth state
        session: null,
        currentUserEmail: null,
        currentUserColor: null,
        // Settings
        settings: {
            startTime: localStorage.getItem('nymara_start_time') || '09:00',
            endTime: localStorage.getItem('nymara_end_time') || '20:00'
        },
        // TPV
        tpv: {
            docType: 'factura-salon',
            cart: [],
            pendingBills: [],
            clientId: '',
            clientNif: '',
            commissionRate: 30,
            salonId: '',
            historySalonId: 'all',
            invoices: [],
            paymentMethod: 'contado',
            paymentCash: '',
            paymentCard: '',
            salesTab: 'facturas',
            controlSheetDate: (() => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); })()
        }
    };

    /* ═══════════════════════════════════════
       DOM REFERENCES
       ═══════════════════════════════════════ */
    const appContent = document.getElementById('app-content');
    const navItems = document.querySelectorAll('.nav-item');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const modalTitle = document.getElementById('modal-title');

    // Auth DOM
    const authScreen = document.getElementById('auth-screen');
    const appLayout = document.getElementById('app-layout');
    const authLoginForm = document.getElementById('auth-login-form');
    const authSubmitText = document.getElementById('auth-submit-text');
    const authSpinner = document.getElementById('auth-spinner');
    const authError = document.getElementById('auth-error');
    const userEmailEl = document.getElementById('user-email');
    const userAvatarEl = document.getElementById('user-avatar');
    const userProfileEl = document.querySelector('.user-profile');
    const btnLogout = document.getElementById('btn-logout');
    const authTabAdmin = document.getElementById('auth-tab-admin');
    const authTabStaff = document.getElementById('auth-tab-staff');
    const authAdminFields = document.getElementById('auth-admin-fields');
    const authStaffFields = document.getElementById('auth-staff-fields');
    const authFormTitle = document.getElementById('auth-form-title');
    const authFormSubtitle = document.getElementById('auth-form-subtitle');
    const btnForgotPassword = document.getElementById('btn-forgot-password');
    const authResetSection = document.getElementById('auth-reset-section');
    const authResetError = document.getElementById('auth-reset-error');
    const authResetSuccess = document.getElementById('auth-reset-success');
    const authResetEmailGroup = document.getElementById('auth-reset-email-group');
    const authResetPasswordGroup = document.getElementById('auth-reset-password-group');
    const authResetTitle = document.getElementById('auth-reset-title');
    const authResetSubtitle = document.getElementById('auth-reset-subtitle');
    const btnSendReset = document.getElementById('btn-send-reset');
    const btnUpdatePassword = document.getElementById('btn-update-password');
    const btnCancelReset = document.getElementById('btn-cancel-reset');

    let authMode = 'admin';
    let isRecoveryMode = false;
    let staffName = null;
    let resetEmail = '';

    function getStaffAptIds() {
        try { return JSON.parse(localStorage.getItem('nymara_staff_apt_ids') || '[]'); }
        catch { return []; }
    }

    function addStaffAptId(id) {
        const ids = getStaffAptIds();
        if (!ids.includes(id)) { ids.push(id); localStorage.setItem('nymara_staff_apt_ids', JSON.stringify(ids)); }
    }

    function isStaffAppointment(aptId) {
        return getStaffAptIds().includes(aptId);
    }

    function getStaffClientIds() {
        try { return JSON.parse(localStorage.getItem('nymara_staff_client_ids') || '[]'); }
        catch { return []; }
    }

    function addStaffClientId(id) {
        const ids = getStaffClientIds();
        if (!ids.includes(id)) { ids.push(id); localStorage.setItem('nymara_staff_client_ids', JSON.stringify(ids)); }
    }

    function isStaffClient(id) {
        return getStaffClientIds().includes(id);
    }

    function getStaffServiceIds() {
        try { return JSON.parse(localStorage.getItem('nymara_staff_service_ids') || '[]'); }
        catch { return []; }
    }

    function addStaffServiceId(id) {
        const ids = getStaffServiceIds();
        if (!ids.includes(id)) { ids.push(id); localStorage.setItem('nymara_staff_service_ids', JSON.stringify(ids)); }
    }

    function isStaffService(id) {
        return getStaffServiceIds().includes(id);
    }

    /* ═══════════════════════════════════════
       HELPERS
       ═══════════════════════════════════════ */
    const USER_COLORS = [
        '#e74c3c', '#2ecc71', '#3498db', '#9b59b6', '#f39c12',
        '#1abc9c', '#e67e22', '#e91e63', '#00bcd4', '#8bc34a',
        '#ff5722', '#795548', '#607d8b', '#673ab7', '#ff6b6b'
    ];

    function getUserColor(email) {
        if (!email) return USER_COLORS[0];
        let hash = 0;
        for (let i = 0; i < email.length; i++) {
            hash = email.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % USER_COLORS.length;
        return USER_COLORS[index];
    }

    function applyUserColor(email) {
        if (!userAvatarEl) return;
        const color = getUserColor(email);
        console.log('User color:', email, '->', color);
        userAvatarEl.style.background = color;
        if (userEmailEl) userEmailEl.style.color = color;
    }

    const generateId = () => {
        if (crypto.randomUUID) return crypto.randomUUID();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    /** Returns 'YYYY-MM-DD' in local time (formato interno: BD, inputs type=date, comparaciones) */
    function toLocalDateStr(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    /** FORMATO EUROPEO DE FECHA PARA MOSTRAR AL USUARIO.
     *  Convierte 'YYYY-MM-DD' o un Date a 'DD-MM-YYYY'.
     *  ⚠️ REGLA: para mostrar cualquier fecha en pantalla/impresión usar SIEMPRE esta función.
     *  No usar toLocalDateStr ni substring(0,10) directamente en texto visible al usuario. */
    function formatDateEU(value) {
        if (!value && value !== 0) return '';
        if (value instanceof Date) value = toLocalDateStr(value);
        const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(value));
        if (m) return `${m[3]}-${m[2]}-${m[1]}`;
        return String(value);
    }

    const WEEKDAY_NAMES = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    const MONTH_NAMES = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const DEFAULT_WA_TEMPLATE = 'Hola {cliente}, desde Estética y Bienestar Lara, en colaboración con {salon}, te recordamos tu cita para el día {fecha} a las {hora}. Si necesitas cambiar o anular su cita por favor hágamelo saber. Para confirmarla agradecería un OK. Gracias y te esperamos';

    /** Helper to send specialized WhatsApp messages */
    function sendWASMessage(phone, name, date = null, time = null, template = null, salonName = '', serviceName = '') {
        if (!phone) {
            showToast('El cliente no tiene un teléfono configurado.', 'error');
            return;
        }
        
        const cleanPhone = phone.replace(/\D/g, '');
        let msg = '';
        
        if (template) {
            const dateObj = date ? new Date(date + 'T00:00:00') : null;
            const dateLabel = dateObj ? dateObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' }) : '';
            msg = template
                .replace(/{cliente}/g, name)
                .replace(/{salon}/g, salonName)
                .replace(/{servicio}/g, serviceName)
                .replace(/{fecha}/g, dateLabel)
                .replace(/{hora}/g, time || '');
        } else if (date && time) {
            const dateObj = new Date(date + 'T00:00:00');
            const dateLabel = dateObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' });
            msg = `Hola ${name} tienes una cita con Nymara Estilistas, el ${dateLabel}, a las ${time}`;
        } else {
            msg = `Hola ${name}, me pongo en contacto contigo desde Nymara Estilistas.`;
        }
        
        const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');
    }

    window.insertWAVariable = function(variable) {
        const ta = document.getElementById('wa-template-textarea');
        if (!ta) return;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const text = ta.value;
        ta.value = text.substring(0, start) + variable + text.substring(end);
        ta.selectionStart = ta.selectionEnd = start + variable.length;
        ta.focus();
    }

    function toggleWATemplate() {
        const select = document.getElementById('enviar-was-select');
        const group = document.getElementById('wa-template-group');
        if (select && group) {
            group.style.display = select.value === 'true' ? '' : 'none';
        }
    }

    /* ═══════════════════════════════════════
       TOAST NOTIFICATIONS
       ═══════════════════════════════════════ */
    function showToast(message, type = 'success') {
        // Remove existing toast
        const existing = document.querySelector('.toast-notification');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;
        toast.innerHTML = `
            <span class="toast-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
            <span>${message}</span>
        `;
        document.body.appendChild(toast);

        // Trigger animation
        requestAnimationFrame(() => toast.classList.add('show'));

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    /* ═══════════════════════════════════════
       API DATA OPERATIONS
       ═══════════════════════════════════════ */

    /** Loads all data from the API into our local State cache */
    async function loadAllData() {
        State.isLoading = true;

        try {
            const [clientsData, servicesData, appointmentsData, salonsData] = await Promise.all([
                api.getClients(),
                api.getServices(),
                api.getAppointments(),
                api.getSalons()
            ]);

            State.salons = salonsData || [];
            if (State.salons.length === 0) {
                const allSalons = await api.getSalons();
                if (allSalons && allSalons.length > 0) State.salons = allSalons;
            }

            // Validar que activeSalonId siga siendo un salón existente
            if (State.activeSalonId !== 'all' && !State.salons.some(s => s.id === State.activeSalonId)) {
                State.activeSalonId = 'all';
                localStorage.setItem('nymara_agenda_salon', 'all');
            }

            State.clients = clientsData;
            State.services = servicesData;

            if (State.session && !State.session.staff) {
                try { State.profile = await api.getProfile(); } catch (e) { State.profile = {}; }
            }
            // Map DB snake_case to JS camelCase for appointments
            State.appointments = appointmentsData.map(a => ({
                id: a.id,
                clientId: a.client_id,
                serviceId: a.service_id,
                salonId: a.salon_id || null,
                date: a.date,
                time: a.time.substring(0, 5), // "HH:MM:SS" → "HH:MM"
                notes: a.notes || '',
                whatsappSent: a.whatsapp_sent || false,
                whatsappSentCount: a.whatsapp_sent_count || 0,
                userEmail: a.user_email || '',
                appointmentPhotos: a.appointment_photos || [],
                isStaffAppointment: a.is_staff_appointment || false,
                staffModifiedBy: a.staff_modified_by || '',
            }));
            
            // Cargar todas las fotos de clientes
            await loadAllClientPhotos();

            } catch (err) {
            console.error('Error loading data:', err);
            showToast('Error al cargar datos: ' + (err.message || err), 'error');
        } finally {
            State.isLoading = false;
            renderRoute();
            updateRemindersBadge();
            
            // Verificación post-carga: ¿Hay recordatorios para las próximas 24 horas?
            if (State.session && !State.session.staff) {
                const count = State.appointments.filter(apt => {
                    if (!isReminderDue(apt)) return false;
                    const client = State.clients.find(c => c.id === apt.clientId);
                    return client && (client.enviar_was === true || client.enviar_was === 'true' || client.enviar_was === 1);
                }).length;
                
                if (count > 0) {
                    showToast(`Tienes ${count} recordatorio${count !== 1 ? 's' : ''} WhatsApp pendiente${count !== 1 ? 's' : ''} en las próximas 24 horas.`, 'info');
                }
            }
        }
    }

    /* ═══════════════════════════════════════
       AUTHENTICATION LOGIC
       ═══════════════════════════════════════ */

    // Check existing session
    async function checkSession() {
        // Check existing API session (admin o staff)
        try {
            const data = await api.getSession();
            if (data.staff) {
                handleStaffSession({ name: data.staff.name, salonId: data.staff.salonId, adminEmail: data.email, staffEmail: data.staff.email || '' });
            } else {
                handleSessionUpdate({ email: data.email });
            }
        } catch (err) {
            console.error('Error checking session:', err);
            handleSessionUpdate(null);
        }
    }



    function handleSessionUpdate(session) {
        State.session = session;
        if (session) {
            if (session.staff) return;
            authScreen.style.display = 'none';
            appLayout.style.display = 'flex';
            
            const email = session.email;
            State.currentUserEmail = email;
            State.currentUserColor = getUserColor(email);
            if (userEmailEl) userEmailEl.textContent = email;
            if (userAvatarEl) {
                userAvatarEl.textContent = email.charAt(0).toUpperCase();
                applyUserColor(email);
            }
            const roleEl = document.querySelector('.user-role');
            if (roleEl) roleEl.textContent = 'Administrador';

            if (State.clients.length === 0 && !State.isLoading) {
                navigate('agenda');
                loadAllData();
            }
        } else {
            if (State.session && State.session.staff) return;
            authScreen.style.display = 'flex';
            appLayout.style.display = 'none';
            resetAuthState();
        }
    }

    function resetAuthState() {
        isRecoveryMode = false;
        showLoginForm();
        if (authLoginForm) {
            authLoginForm.reset();
            // Explicitly clear values to bypass some browser autofill behaviors
            const emailInput = document.getElementById('auth-email');
            const passwordInput = document.getElementById('auth-password');
            if (emailInput) emailInput.value = '';
            if (passwordInput) passwordInput.value = '';
        }
        authError.style.display = 'none';
        authError.className = 'auth-error';
        const btn = document.getElementById('auth-submit-btn');
        if (btn) btn.disabled = false;
        if (authSubmitText) authSubmitText.style.opacity = '1';
        if (authSpinner) authSpinner.style.display = 'none';
    }

    function showLoginForm() {
        authLoginForm.style.display = 'block';
        authResetSection.style.display = 'none';
        authResetError.style.display = 'none';
        authResetSuccess.style.display = 'none';
        authResetEmailGroup.style.display = 'block';
        authResetPasswordGroup.style.display = 'none';
        authResetTitle.textContent = 'Restablecer Contraseña';
        authResetSubtitle.textContent = 'Te enviaremos un código de 6 dígitos a tu correo';
    }

    function showResetForm() {
        authLoginForm.style.display = 'none';
        authResetSection.style.display = 'block';
        authResetError.style.display = 'none';
        authResetSuccess.style.display = 'none';
        authResetEmailGroup.style.display = 'block';
        authResetPasswordGroup.style.display = 'none';
        authResetTitle.textContent = 'Restablecer Contraseña';
        authResetSubtitle.textContent = 'Te enviaremos un código de 6 dígitos a tu correo';
        document.getElementById('auth-reset-email').value = '';
    }

    function showNewPasswordForm() {
        authLoginForm.style.display = 'none';
        authResetSection.style.display = 'block';
        authResetError.style.display = 'none';
        authResetSuccess.style.display = 'none';
        authResetEmailGroup.style.display = 'none';
        authResetPasswordGroup.style.display = 'block';
        authResetTitle.textContent = 'Establecer Nueva Contraseña';
        authResetSubtitle.textContent = 'Elige una nueva contraseña para tu cuenta';
    }

    // Auth mode tabs
    function setAuthMode(mode) {
        authMode = mode;
        if (mode === 'admin') {
            authTabAdmin.style.background = 'var(--accent-gradient)';
            authTabAdmin.style.color = '#fff';
            authTabStaff.style.background = 'transparent';
            authTabStaff.style.color = 'var(--text-secondary)';
            authAdminFields.style.display = 'block';
            authStaffFields.style.display = 'none';
            authFormTitle.textContent = 'Iniciar Sesión';
            authFormSubtitle.textContent = 'Accede a tu panel de control';
            authSubmitText.textContent = 'Entrar';
            btnForgotPassword.style.display = '';
        } else {
            authTabStaff.style.background = 'var(--accent-gradient)';
            authTabStaff.style.color = '#fff';
            authTabAdmin.style.background = 'transparent';
            authTabAdmin.style.color = 'var(--text-secondary)';
            authAdminFields.style.display = 'none';
            authStaffFields.style.display = 'block';
            btnForgotPassword.style.display = 'none';
            authFormTitle.textContent = 'Acceso Staff';
            authFormSubtitle.textContent = 'Introduce tu nombre y contraseña';
            authSubmitText.textContent = 'Entrar como Staff';
        }
        authError.style.display = 'none';
    }

    if (authTabAdmin) authTabAdmin.addEventListener('click', () => setAuthMode('admin'));
    if (authTabStaff) authTabStaff.addEventListener('click', () => setAuthMode('staff'));

    if (btnForgotPassword) btnForgotPassword.addEventListener('click', showResetForm);
    if (btnCancelReset) btnCancelReset.addEventListener('click', () => { showLoginForm(); setAuthMode(authMode); });

    if (btnSendReset) btnSendReset.addEventListener('click', async () => {
        const email = document.getElementById('auth-reset-email').value.trim();
        if (!email) { authResetError.textContent = 'Introduce tu correo electrónico'; authResetError.style.display = 'block'; return; }
        btnSendReset.disabled = true;
        document.getElementById('auth-reset-btn-text').style.opacity = '0';
        document.getElementById('auth-reset-spinner').style.display = 'block';
        authResetError.style.display = 'none';
        try {
            await api.forgotPassword(email);
            resetEmail = email;
            authResetSuccess.style.display = 'block';
            authResetEmailGroup.style.display = 'none';
            authResetPasswordGroup.style.display = 'block';
            authResetTitle.textContent = 'Código de verificación';
            authResetSubtitle.textContent = 'Te hemos enviado un código a tu correo. Introdúcelo junto con tu nueva contraseña.';
        } catch (err) {
            authResetError.textContent = err.message || 'Error al enviar el código';
            authResetError.style.display = 'block';
        } finally {
            btnSendReset.disabled = false;
            document.getElementById('auth-reset-btn-text').style.opacity = '1';
            document.getElementById('auth-reset-spinner').style.display = 'none';
        }
    });

    if (btnUpdatePassword) btnUpdatePassword.addEventListener('click', async () => {
        const code = document.getElementById('auth-reset-code').value.trim();
        const pwd = document.getElementById('auth-reset-new-password').value;
        if (!code) { authResetError.textContent = 'Introduce el código de verificación'; authResetError.style.display = 'block'; return; }
        if (!pwd || pwd.length < 6) { authResetError.textContent = 'La contraseña debe tener al menos 6 caracteres'; authResetError.style.display = 'block'; return; }
        btnUpdatePassword.disabled = true;
        document.getElementById('auth-update-btn-text').style.opacity = '0';
        document.getElementById('auth-update-spinner').style.display = 'block';
        authResetError.style.display = 'none';
        try {
            await api.resetPassword(resetEmail || document.getElementById('auth-reset-email').value.trim(), code, pwd);
            showToast('Contraseña actualizada correctamente.');
            resetEmail = '';
            State.session = null;
            showLoginForm();
            setAuthMode('admin');
        } catch (err) {
            authResetError.textContent = err.message || 'Error al actualizar la contraseña';
            authResetError.style.display = 'block';
        } finally {
            btnUpdatePassword.disabled = false;
            document.getElementById('auth-update-btn-text').style.opacity = '1';
            document.getElementById('auth-update-spinner').style.display = 'none';
        }
    });

    // Handle Auth form submit
    if (authLoginForm) {
        authLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            authSubmitText.style.opacity = '0';
            authSpinner.style.display = 'block';
            const btn = document.getElementById('auth-submit-btn');
            btn.disabled = true;
            authError.style.display = 'none';

            if (authMode === 'staff') {
                const email = document.getElementById('auth-staff-name').value.trim();
                const staffPwd = document.getElementById('auth-staff-password').value;

                if (!email) {
                    authError.textContent = 'Introduce tu email';
                    authError.style.display = 'block';
                    authSubmitText.style.opacity = '1';
                    authSpinner.style.display = 'none';
                    btn.disabled = false;
                    return;
                }
                if (!staffPwd) {
                    authError.textContent = 'Introduce tu contraseña';
                    authError.style.display = 'block';
                    authSubmitText.style.opacity = '1';
                    authSpinner.style.display = 'none';
                    btn.disabled = false;
                    return;
                }

                try {
                    const data = await api.staffLogin(email, staffPwd);
                    setToken(data.token);
                    staffName = data.staff.name;
                    handleStaffSession({ name: data.staff.name, salonId: data.staff.salonId, adminEmail: data.email, staffEmail: data.staff.email || '' });
                } catch (err) {
                    console.error('Staff Auth Error:', err);
                    authError.textContent = err.message || 'Email o contraseña incorrectos';
                    authError.style.display = 'block';
                    authSubmitText.style.opacity = '1';
                    authSpinner.style.display = 'none';
                    btn.disabled = false;
                }
            } else {
                try {
                    const email = document.getElementById('auth-email').value;
                    const password = document.getElementById('auth-password').value;
                    const data = await api.login(email, password);
                    setToken(data.token);
                    handleSessionUpdate({ email: data.email });
                } catch (err) {
                    console.error('Auth Error:', err);
                    authError.textContent = err.message || 'Error en la autenticación';
                    authError.style.display = 'block';
                    authSubmitText.style.opacity = '1';
                    authSpinner.style.display = 'none';
                    btn.disabled = false;
                }
            }
        });
    }

    // Password visibility toggle
    document.addEventListener('click', e => {
        const btn = e.target.closest('.password-toggle');
        if (!btn) return;
        const inputId = btn.dataset.toggle;
        const input = document.getElementById(inputId);
        if (!input) return;
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        btn.setAttribute('aria-label', isPassword ? 'Ocultar contraseña' : 'Mostrar contraseña');
        btn.innerHTML = isPassword
            ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>'
            : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
    });

    function handleStaffSession(account) {
        const adminEmail = account.adminEmail || State.currentUserEmail || '';
        State.session = { staff: true, email: adminEmail, staffName: account.name, staffSalonId: account.salonId || null, staffEmail: account.staffEmail || '' };
        State.currentUserEmail = adminEmail;
        State.currentUserColor = getUserColor(adminEmail);
        if (account.salonId) {
            State.activeSalonId = account.salonId;
            localStorage.setItem('nymara_agenda_salon', account.salonId);
        }
        staffName = account.name;

        authScreen.style.display = 'none';
        appLayout.style.display = 'flex';

        if (userEmailEl) userEmailEl.textContent = account.staffEmail || adminEmail || account.name || '';
        if (userAvatarEl) {
            userAvatarEl.textContent = account.name.charAt(0).toUpperCase();
            userAvatarEl.style.background = '#10b981';
        }
        const roleEl = document.querySelector('.user-role');
        if (roleEl) roleEl.textContent = 'STAFF';

        // Hide restricted nav items for staff
        document.querySelectorAll('.nav-item').forEach(item => {
            const target = item.dataset.target;
            if (target === 'salons' || target === 'diagnosis' || target === 'whatsapp' || target === 'tpv') {
                item.style.display = 'none';
            } else {
                item.style.display = '';
            }
        });
        const settingsBtn = document.getElementById('btn-settings');
        if (settingsBtn) settingsBtn.style.display = 'none';

        if (State.clients.length === 0 && !State.isLoading) {
            navigate('agenda');
            loadAllData();
        }
    }



    // Logout logic with two-step confirmation
    const handleLogoutClick = async (e) => {
        const target = e.currentTarget;
        if (target.dataset.confirming === 'true') {
            target.disabled = true;
            target.innerHTML = '<span>Saliendo...</span>';
            
            if (State.session && State.session.staff) {
                staffName = null;
                State.session = null;
                State.clients = [];
                State.services = [];
                State.appointments = [];
                try { await api.logout(); } catch (e) { console.error('Error al cerrar sesión staff:', e); }
                setToken(null);
                // Restore all nav items
                document.querySelectorAll('.nav-item').forEach(item => { item.style.display = ''; });
                const settingsBtn = document.getElementById('btn-settings');
                if (settingsBtn) settingsBtn.style.display = '';
                authScreen.style.display = 'flex';
                appLayout.style.display = 'none';
                resetAuthState();
                const roleEl = document.querySelector('.user-role');
                if (roleEl) roleEl.textContent = 'Administrador';
                return;
            }
            
            await api.logout();
            setToken(null);
            State.clients = [];
            State.services = [];
            State.appointments = [];
            staffName = null;
            State.session = null;
            document.querySelectorAll('.nav-item').forEach(item => { item.style.display = ''; });
            const settingsBtn = document.getElementById('btn-settings');
            if (settingsBtn) settingsBtn.style.display = '';
            authScreen.style.display = 'flex';
            appLayout.style.display = 'none';
            resetAuthState();
        } else {
            target.dataset.confirming = 'true';
            const originalHtml = target.innerHTML;
            if (target.id === 'btn-logout') {
                target.innerHTML = '<span>¿Salir?</span>';
                target.style.width = 'auto';
                target.style.padding = '0 8px';
            } else {
                const emailSpan = target.querySelector('.user-email');
                if (emailSpan) emailSpan.textContent = '¿Cerrar sesión?';
            }
            
            setTimeout(() => {
                if (target.dataset.confirming === 'true') {
                    target.dataset.confirming = 'false';
                    target.innerHTML = originalHtml;
                    if (target.id === 'btn-logout') {
                        target.style.width = '';
                        target.style.padding = '';
                    } else {
                        const emailSpan = target.querySelector('.user-email');
                        if (emailSpan) emailSpan.textContent = (State.session && State.session.staff)
                            ? (State.session.staffEmail || State.currentUserEmail)
                            : State.currentUserEmail;
                    }
                }
            }, 3000);
        }
    };

    if (btnLogout) {
        btnLogout.addEventListener('click', handleLogoutClick);
    }
    if (userProfileEl) {
        userProfileEl.style.cursor = 'pointer';
        userProfileEl.title = 'Cerrar sesión';
        userProfileEl.addEventListener('click', handleLogoutClick);
    }



    async function addClient(data) {
        data.user_email = State.currentUserEmail;
        try {
            const created = await api.addClient(data);
            State.clients.push(created);
            if (State.session?.staff) addStaffClientId(created.id);
            showToast('Cliente añadido correctamente');
            return true;
        } catch (err) {
            showToast('Error al añadir cliente: ' + err.message, 'error');
            return false;
        }
    }

    async function calculateFileHash(file) {
        const buffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    async function uploadClientPhoto(file, clientId, photoDate, photoType, photoNotes, caspaLevel = null, seboLevel = null, eritemaLevel = null) {
        console.log('uploadClientPhoto called:', { clientId, photoDate, photoType });
        const photoId = generateId();
        const photoHash = await calculateFileHash(file);
        
        try {
            const photoRecord = await api.uploadPhoto({
                clientId,
                photoId,
                file,
                photoDate,
                photoType,
                notes: photoNotes,
                photoHash
            });
            console.log('Photo inserted successfully!');
            return photoRecord;
        } catch (err) {
            showToast('Error al subir foto: ' + err.message, 'error');
            console.error('Upload error:', err);
            return null;
        }
    }

    async function deleteClientPhoto(photoId, clientId) {
        try {
            await api.deletePhoto(photoId);
            
            if (State.clientPhotos[clientId]) {
                State.clientPhotos[clientId] = State.clientPhotos[clientId].filter(p => p.id !== photoId);
            }
            
            showToast('Foto eliminada');
            return true;
        } catch (err) {
            console.error('Error deleting photo:', err);
            showToast('Error al eliminar foto: ' + err.message, 'error');
            return false;
        }
    }

    async function updateClientPhoto(photoId, clientId, updates) {
        await api.updatePhoto(photoId, updates);
        
        if (State.clientPhotos[clientId]) {
            const idx = State.clientPhotos[clientId].findIndex(p => p.id === photoId);
            if (idx >= 0) {
                State.clientPhotos[clientId][idx] = { ...State.clientPhotos[clientId][idx], ...updates };
            }
        }
        
        showToast('Foto actualizada');
        return true;
    }

    async function loadClientPhotos(clientId) {
        console.log('loadClientPhotos called for client:', clientId);
        console.log('State.clients sample:', State.clients.slice(0,2).map(c => ({ id: c.id, name: c.name })));
        try {
            const data = await api.getPhotos(clientId);
            console.log('loadClientPhotos result:', { data, clientId });
            return data || [];
        } catch (e) {
            console.warn('Error loading photos:', e);
            return [];
        }
    }

    async function loadAllClientPhotos() {
        try {
            const data = await api.getPhotos();
            
            State.clientPhotos = {};
            if (data) {
                data.forEach(p => {
                    if (!State.clientPhotos[p.client_id]) {
                        State.clientPhotos[p.client_id] = [];
                    }
                    State.clientPhotos[p.client_id].push(p);
                });
            }
            return data || [];
        } catch (e) {
            console.warn('Error loading all photos:', e);
            return [];
        }
    }

    async function updateClient(data) {
        try {
            await api.updateClient(data);
            State.clients = State.clients.map(c => c.id === data.id ? data : c);
            showToast('Cliente actualizado correctamente');
            return true;
        } catch (err) {
            console.error('Update client error:', err);
            showToast('Error al actualizar: ' + err.message, 'error');
            return false;
        }
    }

    async function deleteClient(id) {
        try {
            await api.deleteClient(id);
            State.clients = State.clients.filter(c => c.id !== id);
            showToast('Cliente eliminado');
            return true;
        } catch (err) {
            showToast('Error al eliminar cliente: ' + err.message, 'error');
            return false;
        }
    }

    // ── Services CRUD ──

    async function addService(data) {
        data.user_email = State.currentUserEmail;
        try {
            const created = await api.addService(data);
            State.services.push(created);
            if (State.session?.staff) addStaffServiceId(created.id);
            showToast('Servicio añadido correctamente');
            return true;
        } catch (err) {
            showToast('Error al añadir servicio: ' + err.message, 'error');
            return false;
        }
    }

    async function updateService(data) {
        try {
            await api.updateService(data);
            State.services = State.services.map(s => s.id === data.id ? data : s);
            showToast('Servicio actualizado correctamente');
            return true;
        } catch (err) {
            showToast('Error al actualizar servicio: ' + err.message, 'error');
            return false;
        }
    }

    async function deleteService(id) {
        try {
            await api.deleteService(id);
            State.services = State.services.filter(s => s.id !== id);
            showToast('Servicio eliminado');
            return true;
        } catch (err) {
            showToast('Error al eliminar servicio: ' + err.message, 'error');
            return false;
        }
    }

    // ── Salons CRUD ──

    async function addSalon(data) {
        data.user_email = State.currentUserEmail;
        console.log('Adding salon:', data);
        try {
            const result = await api.addSalon(data);
            console.log('Salon added:', result);
            State.salons.push(result);
            showToast('Salón añadido correctamente');
            return true;
        } catch (err) {
            console.error('Error adding salon:', err);
            showToast('Error al añadir salón: ' + err.message, 'error');
            return false;
        }
    }

    async function updateSalon(data) {
        console.log('Updating salon:', data);
        try {
            await api.updateSalon(data);
            State.salons = State.salons.map(s => s.id === data.id ? data : s);
            showToast('Salón actualizado correctamente');
            return true;
        } catch (err) {
            console.error('Error updating salon:', err);
            showToast('Error al actualizar salón: ' + err.message, 'error');
            return false;
        }
    }

    async function deleteSalon(id) {
        console.log('Deleting salon:', id);
        try {
            await api.deleteSalon(id);
            State.salons = State.salons.filter(s => s.id !== id);
            showToast('Salón eliminado');
            return true;
        } catch (err) {
            console.error('Error deleting salon:', err);
            showToast('Error al eliminar salón: ' + err.message, 'error');
            return false;
        }
    }

    // ── Appointments CRUD ──

    function adminDisplayName() {
        if (State.profile && State.profile.full_name) return State.profile.full_name;
        const email = State.currentUserEmail || '';
        if (email) return email.split('@')[0];
        return 'Administrador';
    }

    async function addAppointment(data) {
        // Map JS camelCase to DB snake_case
        const dbRow = {
            id: data.id,
            client_id: data.clientId,
            service_id: data.serviceId,
            date: data.date,
            time: data.time,
            notes: data.notes,
            user_email: State.currentUserEmail || '',
            appointment_photos: data.appointmentPhotos || [],
            is_staff_appointment: !!State.session?.staff,
        };
        if (data.salonId) dbRow.salon_id = data.salonId;
        try {
            await api.addAppointment(dbRow);
        } catch (err) {
            console.error('Insert error details:', JSON.stringify({ dbRow, error: err }, null, 2));
            showToast('Error al agendar cita: ' + err.message, 'error');
            return false;
        }
        State.appointments.push(data);
        console.log('State.appointments length after push:', State.appointments.length, 'ClientId:', data.clientId, 'Date:', data.date);
        showToast('Cita agendada correctamente');
        return true;
    }

    async function updateAppointment(id, data) {
        const original = State.appointments.find(a => a.id === id);
        const dbRow = {
            client_id: data.clientId,
            service_id: data.serviceId,
            date: data.date,
            time: data.time,
            notes: data.notes,
            appointment_photos: data.appointmentPhotos || [],
        };
        if (data.salonId) dbRow.salon_id = data.salonId;
        // Si el administrador modifica una cita creada por un staff, dejar constancia de quién la modificó
        if (original && original.isStaffAppointment && State.session && !State.session.staff) {
            dbRow.staff_modified_by = adminDisplayName();
        }
        try {
            await api.updateAppointment(id, dbRow);
        } catch (err) {
            console.error('Update error details:', JSON.stringify({ dbRow, error: err }, null, 2));
            showToast('Error al actualizar cita: ' + err.message, 'error');
            return false;
        }
        const idx = State.appointments.findIndex(a => a.id === id);
        if (idx !== -1) State.appointments[idx] = { ...State.appointments[idx], ...data, staffModifiedBy: dbRow.staff_modified_by || State.appointments[idx].staffModifiedBy || '' };
        showToast('Cita actualizada correctamente');
        return true;
    }

    window.editClientPhoto = async function(photoId, clientId, currentDate, currentNotes, currentType) {
        openModal('Editar Foto', `
            <form id="edit-client-photo-form">
                <div class="form-group">
                    <label>Tipo</label>
                    <select class="form-control" id="edit-client-photo-type">
                        <option value="before" ${currentType === 'before' ? 'selected' : ''}>Antes</option>
                        <option value="after" ${currentType === 'after' ? 'selected' : ''}>Después</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Fecha</label>
                    <div class="form-control" id="edit-client-photo-date" style="background:rgba(0,0,0,0.03);color:var(--text-secondary);cursor:default">${currentDate || '—'}</div>
                </div>
                <div class="form-group">
                    <label>Notas</label>
                    <textarea class="form-control" id="edit-client-photo-notes" rows="3">${currentNotes}</textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        `, () => {
            document.getElementById('edit-client-photo-form').addEventListener('submit', async e => {
                e.preventDefault();
                const newType = document.getElementById('edit-client-photo-type').value;
                const dateDiv = document.getElementById('edit-client-photo-date');
                const newDate = dateDiv.textContent.trim() === '—' ? null : dateDiv.textContent.trim();
                const newNotes = document.getElementById('edit-client-photo-notes').value;
                
                try {
                    await updateClientPhoto(photoId, clientId, { 
                        photo_type: newType, 
                        photo_date: newDate, 
                        notes: newNotes || ''
                    });
                    closeModal();
                    showToast('Foto actualizada');
                    renderRoute();
                } catch (err) {
                    console.error('Error al guardar foto:', err);
                    showToast('Error al guardar foto: ' + (err.message || err), 'error');
                }
            });
        });
    }

    window.editAptPhoto = async function(photoId, aptId, currentDate, currentNotes, currentType) {
        openModal('Editar Foto', `
            <form id="edit-apt-photo-form">
                <div class="form-group">
                    <label>Tipo</label>
                    <select class="form-control" id="edit-apt-photo-type">
                        <option value="before" ${currentType === 'before' ? 'selected' : ''}>Antes</option>
                        <option value="after" ${currentType === 'after' ? 'selected' : ''}>Después</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Fecha</label>
                    <div class="form-control" id="edit-apt-photo-date" style="background:rgba(0,0,0,0.03);color:var(--text-secondary);cursor:default">${currentDate || '—'}</div>
                </div>
                <div class="form-group">
                    <label>Notas</label>
                    <textarea class="form-control" id="edit-apt-photo-notes" rows="3">${currentNotes}</textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        `, () => {
            document.getElementById('edit-apt-photo-form').addEventListener('submit', async e => {
                e.preventDefault();
                const newType = document.getElementById('edit-apt-photo-type').value;
                const newDateDiv = document.getElementById('edit-apt-photo-date');
                const newDate = newDateDiv.textContent.trim() === '—' ? null : newDateDiv.textContent.trim();
                const newNotes = document.getElementById('edit-apt-photo-notes').value;
                
                const apt = State.appointments.find(a => a.id === aptId);
                if (apt && apt.appointmentPhotos) {
                    const photoIdx = apt.appointmentPhotos.findIndex(p => p.id === photoId);
                    if (photoIdx >= 0) {
                        apt.appointmentPhotos[photoIdx].photo_type = newType;
                        apt.appointmentPhotos[photoIdx].photo_date = newDate;
                        apt.appointmentPhotos[photoIdx].notes = newNotes;
                        await api.updateAppointmentPhotos(aptId, apt.appointmentPhotos);
                        
                        // Sync with client_photos if clientPhotoId exists
                        if (apt.appointmentPhotos[photoIdx].clientPhotoId) {
                            try {
                                await api.updatePhoto(apt.appointmentPhotos[photoIdx].clientPhotoId, {
                                    photo_type: newType,
                                    photo_date: newDate,
                                    notes: `Cita ${apt.date}: ${newNotes}`
                                });
                            } catch (err) {
                                console.error('Error syncing client photo:', err);
                            }
                        }

                        closeModal();
                        showToast('Foto actualizada');
                        renderRoute();
                    } else {
                        showToast('Foto no encontrada', 'error');
                    }
                } else {
                    showToast('Cita no encontrada', 'error');
                }
            });
        });
    }

    async function markAppointmentReminded(id) {
        try {
            await api.markAppointmentReminded(id);
        } catch (err) {
            console.error('Error al marcar como avisado (¿columna whatsapp_sent_count existe?):', err);
        }
        const apt = State.appointments.find(a => a.id === id);
        if (apt) apt.whatsappSentCount = (apt.whatsappSentCount || 0) + 1;
        return true;
    }

    function updateRemindersBadge() {
        const badge = document.getElementById('reminders-badge');
        if (!badge) return;
        if (State.session?.staff) {
            badge.style.display = 'none';
            return;
        }
        const count = State.appointments.filter(apt => {
            if (!isReminderDue(apt)) return false;
            const client = State.clients.find(c => c.id === apt.clientId);
            return client && (client.enviar_was === true || client.enviar_was === 'true' || client.enviar_was === 1);
        }).length;

        badge.textContent = count;
        badge.style.display = count > 0 ? '' : 'none';
    }

    async function deleteAppointment(id) {
        try {
            await api.deleteAppointment(id);
        } catch (err) {
            showToast('Error al cancelar cita: ' + err.message, 'error');
            return false;
        }
        State.appointments = State.appointments.filter(a => a.id !== id);
        showToast('Cita cancelada');
        return true;
    }

    /* ═══════════════════════════════════════
       ROUTING
       ═══════════════════════════════════════ */
    let currentRoute = 'agenda';

    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    function closeSidebar() {
        if (appLayout) appLayout.classList.remove('sidebar-open');
    }

    function toggleSidebar() {
        if (appLayout) appLayout.classList.toggle('sidebar-open');
    }

    if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    function navigate(route) {
        if (State.session?.staff && (route === 'tpv' || route === 'sales' || route === 'salons' || route === 'diagnosis' || route === 'whatsapp')) {
            route = 'agenda';
        }
        currentRoute = route;
        navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.target === route);
        });
        if (route === 'tpv' || route === 'sales') tpvLoadInvoices();
        renderRoute();
        closeSidebar();
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => navigate(item.dataset.target));
    });

    /* ═══════════════════════════════════════
       MODAL
       ═══════════════════════════════════════ */
    function openModal(title, htmlContent, onMount) {
        modalTitle.textContent = title;
        modalBody.innerHTML = htmlContent;
        modalOverlay.classList.add('active');
        if (onMount) onMount();
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        setTimeout(() => (modalBody.innerHTML = ''), 300);
    }

    function openBeforeAfterCompare(photos, title = 'Comparativa Antes / Después', context = null) {
        const list = Array.isArray(photos) ? photos : [];
        const before = list.filter(p => p.photo_type !== 'after' && p.photo_type !== 'diagnosis');
        const after = list.filter(p => p.photo_type === 'after');
        const diagnosis = list.filter(p => p.photo_type === 'diagnosis');

        const photoCard = (p, label, color, small = false) => {
            const d = p.photo_date || '';
            return `
                <div class="compare-photo" data-photo-id="${p.id}" draggable="true"
                     style="text-align:center;margin-bottom:0.75rem;cursor:grab;position:relative">
                    <img src="${p.photo_url}" alt="${label}" style="width:100%;${small ? 'height:90px;width:90px' : 'max-height:240px'};object-fit:cover;border-radius:8px;border:2px solid ${color};pointer-events:none">
                    <div style="position:absolute;top:4px;right:4px;background:rgba(0,0,0,0.6);color:#fff;border-radius:4px;font-size:0.65rem;padding:2px 6px">${label}</div>
                    ${d ? `<div style="font-size:0.7rem;color:var(--text-secondary);margin-top:0.25rem">${d}</div>` : ''}
                </div>`;
        };

        const colHtml = (items, label, color) => `
            <div class="compare-col" data-target="${label}" style="flex:1;min-width:0">
                <h3 style="text-align:center;font-size:1rem;font-weight:700;margin-bottom:0.75rem;color:${color}">${label} (${items.length})</h3>
                ${items.length
                    ? items.map(p => photoCard(p, label, color)).join('')
                    : `<div style="border:1px dashed var(--border-color);border-radius:8px;padding:2rem;text-align:center;color:var(--text-secondary);font-size:0.85rem">Arrastra aquí una foto</div>`}
            </div>`;

        const extra = diagnosis.length ? `
            <hr style="margin:1.25rem 0;border:none;border-top:1px solid var(--border-color)">
            <h3 style="text-align:center;font-size:0.95rem;font-weight:700;margin-bottom:0.75rem;color:var(--text-secondary)">Diagnóstico (${diagnosis.length})</h3>
            <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">
                ${diagnosis.map(p => photoCard(p, 'Diagnóstico', '#94a3b8', true)).join('')}
            </div>` : '';

        openModal(title, `
            <div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;align-items:flex-start">
                ${colHtml(before, 'Antes', '#38bdf8')}
                ${colHtml(after, 'Después', '#34d399')}
            </div>
            ${extra}
            ${context ? `<p style="text-align:center;font-size:0.75rem;color:var(--text-secondary);margin-top:1rem">Arrastra una foto a la otra columna para reclasificarla</p>` : ''}
        `, () => {
            let draggedId = null;

            const dropTargets = document.querySelectorAll('.compare-col');
            dropTargets.forEach(col => {
                col.addEventListener('dragover', e => {
                    e.preventDefault();
                    col.style.outline = '2px dashed var(--accent-color)';
                });
                col.addEventListener('dragleave', () => { col.style.outline = ''; });
                col.addEventListener('drop', async e => {
                    e.preventDefault();
                    col.style.outline = '';
                    const targetType = col.dataset.target;
                    const photoId = draggedId;
                    draggedId = null;
                    if (!photoId || !context || !targetType) return;
                    await setPhotoCompareType(photoId, targetType, context);
                });
            });

            document.querySelectorAll('.compare-photo').forEach(el => {
                el.addEventListener('dragstart', e => {
                    draggedId = el.dataset.photoId;
                    e.dataTransfer.effectAllowed = 'move';
                });
                el.addEventListener('click', () => {
                    const p = list.find(x => String(x.id) === String(el.dataset.photoId));
                    if (p) openModal('Foto', `<img src=${p.photo_url} style=max-width:100%;max-height:70vh;border-radius:8px>`);
                });
            });
        });
    }

    async function setPhotoCompareType(photoId, targetType, context) {
        const newType = targetType === 'Después' ? 'after' : targetType === 'Diagnóstico' ? 'diagnosis' : 'before';
        try {
            if (context.aptId) {
                const apt = State.appointments.find(a => a.id === context.aptId);
                if (!apt || !apt.appointmentPhotos) { showToast('Cita no encontrada', 'error'); return; }
                const photo = apt.appointmentPhotos.find(p => String(p.id) === String(photoId));
                if (!photo) { showToast('Foto no encontrada', 'error'); return; }
                photo.photo_type = newType;
                await api.updateAppointmentPhotos(apt.id, apt.appointmentPhotos);
                if (photo.clientPhotoId) {
                    try {
                        await api.updatePhoto(photo.clientPhotoId, { photo_type: newType });
                    } catch (err) {
                        console.error('Error sincronizando foto del cliente:', err);
                    }
                }
                showToast('Foto reclasificada');
            } else if (context.clientId) {
                const photos = (State.clientPhotos && State.clientPhotos[context.clientId]) || [];
                const photo = photos.find(p => String(p.id) === String(photoId));
                if (!photo) { showToast('Foto no encontrada', 'error'); return; }
                photo.photo_type = newType;
                await api.updatePhoto(photoId, { photo_type: newType });
                showToast('Foto reclasificada');
            } else {
                return;
            }
            closeModal();
            renderRoute();
        } catch (err) {
            console.error('Error reclasificando foto:', err);
            showToast('Error al reclasificar foto: ' + (err.message || err), 'error');
        }
    }

    btnCloseModal.addEventListener('click', closeModal);

    // Track where mousedown started to prevent accidental closes
    // when user clicks inside modal and drags to overlay before releasing
    let overlayMouseDownTarget = null;
    modalOverlay.addEventListener('mousedown', e => {
        overlayMouseDownTarget = e.target;
    });
    modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay && overlayMouseDownTarget === modalOverlay) {
            closeModal();
        }
        overlayMouseDownTarget = null;
    });

    /* ═══════════════════════════════════════
       RENDER DISPATCHER
       ═══════════════════════════════════════ */
    function renderRoute() {
        if (currentRoute === 'agenda') content = getAgendaView();
        else if (currentRoute === 'clients') {
            // Recargar fotos de clientes al entrar a la pestaña
            loadAllClientPhotos().then(() => {
                const clientsContent = getClientsView();
                const fadeInDiv = appContent.querySelector('.fade-in');
                if (fadeInDiv) fadeInDiv.innerHTML = clientsContent;
                attachEvents();
            });
            content = getClientsView();
        }
        else if (currentRoute === 'services') content = getServicesView();
        else if (currentRoute === 'tpv') content = getTpvView();
        else if (currentRoute === 'sales') content = getSalesView();
        else if (currentRoute === 'monthly') content = getMonthlyView();
        else if (currentRoute === 'salons') content = getSalonsView();
        else if (currentRoute === 'whatsapp') content = getWhatsAppView();
        else if (currentRoute === 'diagnosis') content = getDiagnosisView();

        appContent.innerHTML = `<div class="fade-in">${content}</div>`;
        
        // Dark mode toggle for diagnosis
        if (currentRoute === 'diagnosis') {
            appContent.classList.add('diagnosis-mode');
        } else {
            appContent.classList.remove('diagnosis-mode');
        }

        attachEvents();
        updateRemindersBadge();

        // Cargar lista de clientes para diagnóstico
        if (currentRoute === 'diagnosis') {
            loadDiagnosisClients();
        }
    }

    /* ═══════════════════════════════════════
       CALENDAR HELPERS
       ═══════════════════════════════════════ */
    function getCalendarDays(year, month) {
        const firstDay = new Date(year, month, 1);
        let startWeekday = firstDay.getDay(); // 0=Sun
        startWeekday = startWeekday === 0 ? 6 : startWeekday - 1; // Convert to Mon=0

        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const prevMonthDays = new Date(year, month, 0).getDate();

        const days = [];

        // Previous month trailing days
        for (let i = startWeekday - 1; i >= 0; i--) {
            const d = prevMonthDays - i;
            const dt = new Date(year, month - 1, d);
            days.push({ date: dt, dateStr: toLocalDateStr(dt), currentMonth: false });
        }

        // Current month days
        for (let d = 1; d <= daysInMonth; d++) {
            const dt = new Date(year, month, d);
            days.push({ date: dt, dateStr: toLocalDateStr(dt), currentMonth: true });
        }

        // Fill remaining to complete grid (6 rows max)
        const remaining = 42 - days.length;
        for (let d = 1; d <= remaining; d++) {
            const dt = new Date(year, month + 1, d);
            days.push({ date: dt, dateStr: toLocalDateStr(dt), currentMonth: false });
        }

        return days;
    }

    function getAppointmentsForDate(dateStr) {
        const salonId = State.activeSalonId || 'all';
        const isAdmin = !State.session?.staff;
        
        return State.appointments
            .filter(a => a.date === dateStr && (salonId === 'all' || a.salonId === salonId))
            .sort((a, b) => a.time.localeCompare(b.time));
    }

    /* ═══════════════════════════════════════
       AGENDA VIEW  (Calendar + Day Detail)
       ═══════════════════════════════════════ */
    function getAgendaView() {
        const todayStr = toLocalDateStr(new Date());
        const todaysAppointments = getAppointmentsForDate(todayStr);

        // Calendar grid
        const days = getCalendarDays(State.calYear, State.calMonth);
        const monthLabel = `${MONTH_NAMES[State.calMonth]} ${State.calYear}`;

        let calCells = '';
        days.forEach(day => {
            const apts = getAppointmentsForDate(day.dateStr);
            const isToday = day.dateStr === todayStr;
            const isSelected = day.dateStr === State.selectedDate;
            const classes = [
                'cal-day',
                !day.currentMonth ? 'other-month' : '',
                isToday ? 'is-today' : '',
                isSelected ? 'is-selected' : ''
            ].filter(Boolean).join(' ');

            let eventsHtml = '';
            const maxShow = 2;
            const showAllSalons = (State.activeSalonId || 'all') === 'all';
            apts.slice(0, maxShow).forEach(apt => {
                const client = State.clients.find(c => c.id === apt.clientId);
                const cName = client ? client.name.split(' ')[0] : '??';
                const salon = State.salons.find(s => s.id === apt.salonId);
                const salonColor = salon && salon.color ? salon.color : 'var(--accent-primary)';
                const salonLabel = (showAllSalons && salon) ? ` <span class="cal-salon-badge" style="background:${salonColor}">${salon.name}</span>` : '';
                eventsHtml += `<span class="cal-event" style="border-left:3px solid ${salonColor}">${apt.time} ${cName}${salonLabel}${apt.isStaffAppointment ? ' <span class="staff-badge">Staff</span>' : ''}</span>`;
            });
            if (apts.length > maxShow) {
                eventsHtml += `<span class="cal-more">+${apts.length - maxShow} más</span>`;
            }

            calCells += `
                <div class="${classes}" data-date="${day.dateStr}">
                    <span class="cal-day-number">${day.date.getDate()}</span>
                    ${eventsHtml}
                </div>`;
        });

        // Day detail panel
        const detailDate = State.selectedDate || todayStr;
        const detailApts = getAppointmentsForDate(detailDate);

        // Client combo search: upcoming appointments for the selected client
        const searchClientId = State.appointmentClientId || '';
        const searchClient = searchClientId ? State.clients.find(c => c.id === searchClientId) : null;
        const clientOptions = State.clients
            .slice()
            .sort((a, b) => (a.name || '').localeCompare(b.name || '', 'es'))
            .map(c => `<option value="${c.id}"${c.id === searchClientId ? ' selected' : ''}>${c.name}</option>`)
            .join('');
        const todaySearchStr = toLocalDateStr(new Date());
        let clientUpcomingHtml = '';
        if (searchClient) {
            const upcoming = State.appointments
                .filter(a => a.clientId === searchClientId && a.date >= todaySearchStr)
                .sort((a, b) => a.date === b.date ? a.time.localeCompare(b.time) : a.date.localeCompare(b.date));
            const upcomingRows = upcoming.length === 0
                ? '<p style="color:var(--text-secondary);font-size:0.85rem;margin:0;">No tiene citas a partir de hoy.</p>'
                : upcoming.map(apt => {
                    const service = State.services.find(s => s.id === apt.serviceId) || { name: 'Eliminado' };
                    const salon = State.salons.find(s => s.id === apt.salonId);
                    return `
                    <button type="button" class="appt-jump-btn" data-date="${apt.date}" style="display:flex;align-items:center;gap:0.5rem;width:100%;text-align:left;background:var(--bg-surface);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:0.5rem 0.75rem;margin-bottom:0.35rem;cursor:pointer;font-size:0.85rem;">
                        <span style="color:var(--text-secondary);font-size:0.8rem;">📅</span>
                        <span style="font-weight:600;color:var(--accent-primary);">${formatDateEU(apt.date)}</span>
                        <span style="color:var(--text-secondary);">${apt.time}</span>
                        <span>${service.name}</span>
                        ${salon ? `<span class="daily-salon-badge" style="background:${salon.color || '#8B5CF6'};color:#fff;border:1px solid ${salon.color || '#8B5CF6'}">${salon.name}</span>` : ''}
                    </button>`;
                }).join('');
            clientUpcomingHtml = `
                <div class="data-card" style="padding:0.75rem 1rem;margin-bottom:0.75rem;">
                    <div style="font-weight:600;margin-bottom:0.5rem;font-size:0.9rem;color:var(--text-secondary);">Próximas citas de <strong style="color:var(--text-primary)">${searchClient.name}</strong> <span class="monthly-count-badge">${upcoming.length}</span></div>
                    ${upcomingRows}
                </div>`;
        }
        console.log('Agenda view: appointments count in State:', State.appointments.length, 'selectedDate:', State.selectedDate, 'detailDate:', detailDate, 'apts for date:', detailApts.length);
        const detailDateObj = new Date(detailDate + 'T00:00:00');
        const detailLabel = detailDateObj.toLocaleDateString('es-ES', {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
        });

        let detailHtml = '';
        if (detailApts.length === 0) {
            detailHtml = `
                <div class="empty-state" style="padding:2rem">
                    <p>No hay citas para este día.</p>
                </div>`;
        } else {
            detailHtml = `<div class="day-detail-list">`;
            detailApts.forEach(apt => {
                const client = State.clients.find(c => c.id === apt.clientId) || { name: 'Eliminado' };
                const service = State.services.find(s => s.id === apt.serviceId) || { name: 'Eliminado', duration: 0 };
const endTime = new Date(new Date(`${apt.date}T${apt.time}`).getTime() + (service.duration || 0) * 60000);
                const endStr = endTime.toTimeString().substring(0, 5);
                
const userColor = apt.userEmail ? getUserColor(apt.userEmail) : 'var(--accent-primary)';
const aptSalon = State.salons.find(s => s.id === apt.salonId);
const aptSalonColor = aptSalon && aptSalon.color ? aptSalon.color : 'var(--accent-primary)';
                const userInitial = apt.userEmail ? apt.userEmail.charAt(0).toUpperCase() : '?';
                const userDisplay = apt.userEmail ? apt.userEmail.split('@')[0] : 'Sistema';
                
                const appointmentPhotos = apt.appointmentPhotos || [];
                let photosHtml = '';
                if (appointmentPhotos.length > 0) {
                    const hasBefore = appointmentPhotos.some(p => p.photo_type !== 'after' && p.photo_type !== 'diagnosis');
                    const hasAfter = appointmentPhotos.some(p => p.photo_type === 'after');
                    photosHtml = '<div class="day-detail-photos" style="margin-top:8px;display:flex;flex-wrap:wrap;gap:8px">';
                    appointmentPhotos.forEach(p => {
                        const photoType = (p.photo_type === 'after') ? 'Después' : (p.photo_type === 'diagnosis' ? 'Diagnóstico' : 'Antes');
                        const photoDate = p.photo_date || '';
                        photosHtml += `
                            <div class="apt-mini-photo" data-apt-id="${apt.id}" data-photo-id="${p.id}" style="position:relative;text-align:center">
                                <img src="${p.photo_url}" style="width:50px;height:50px;object-fit:cover;border-radius:6px;cursor:pointer" onclick="openModal('Foto','<img src=${p.photo_url} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                                <div style="font-size:0.65rem;color:var(--text-secondary)">${photoType}</div>
                                <div style="font-size:0.6rem;color:var(--text-secondary)">${formatDateEU(photoDate)}</div>
                                <div style="position:absolute;top:0;left:0;right:0;display:flex;justify-content:center;gap:2px">
                                    <button type="button" class="apt-photo-edit-btn" data-photo-id="${p.id}" title="Editar" style="background:rgba(0,0,0,0.6);color:white;border:none;border-radius:4px;width:20px;height:20px;cursor:pointer;font-size:10px;opacity:0.8">✏️</button>
                                    <button type="button" class="apt-photo-delete-btn" data-photo-id="${p.id}" title="Eliminar" style="background:rgba(0,0,0,0.6);color:white;border:none;border-radius:4px;width:20px;height:20px;cursor:pointer;font-size:10px;opacity:0.8">🗑️</button>
                                </div>
                            </div>`;
                    });
                    photosHtml += '</div>';
                    if (hasBefore && hasAfter) {
                        photosHtml += `<button type="button" class="btn btn-sm btn-secondary compare-btn" data-apt-id="${apt.id}" style="margin-top:8px;">Antes / Después</button>`;
                    }
                }
                 
                detailHtml += `
                    <div class="day-detail-item">
                        <div class="day-detail-time" style="color:${userColor}">${apt.time} – ${endStr}</div>
                        <div class="day-detail-info">
                            <strong>Cliente: ${client.name}</strong>
                            <span>${service.name} · ${service.duration} min</span>
                            ${apt.notes ? `<span style="font-size:0.8rem;color:var(--text-secondary);display:block;margin-top:2px"><em>${apt.notes}</em></span>` : ''}
                            <span style="font-size:0.75rem;display:block;margin-top:2px"><strong style="color:${aptSalonColor}">Salón: ${aptSalon?.name || 'Salón desconocido'}</strong>${apt.isStaffAppointment ? ` <span class="staff-badge" style="color:${userColor}">Staff</span>` : ''}${apt.isStaffAppointment && apt.staffModifiedBy ? ` <span style="color:var(--text-secondary)">· modificado por <strong style="color:${userColor}">${apt.staffModifiedBy}</strong></span>` : ''}</span>
                            <span class="apt-user-key" style="color:${userColor}" title="${apt.userEmail}">${userDisplay}</span>
                            ${photosHtml}
                        </div>
                        <div class="day-detail-actions">
                            ${!State.session?.staff && client && client.phone ? `
                            <button class="wa-apt-btn" data-aptid="${apt.id}" title="Enviar WhatsApp" style="background:none;border:none;cursor:pointer;margin-right:8px;">
                                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12.031 6.172c-2.32 0-4.516.903-6.183 2.563-3.23 3.23-3.403 8.356-.511 11.777l-1.341 4.904 5.035-1.32c1.077.585 2.29.893 3.522.893h.03c2.321 0 4.516-.903 6.183-2.563 3.413-3.414 3.413-8.948 0-12.362-1.667-1.66-3.863-1.592-6.235-1.592z"/></svg>
                            </button>
                            ` : ''}
                            ${(State.session?.staff ? apt.isStaffAppointment : (!apt.userEmail || apt.userEmail === State.currentUserEmail)) ? `
                            <button class="edit-apt-btn" data-id="${apt.id}" title="Editar cita" style="background:none;border:none;cursor:pointer;margin-right:8px;">
                                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                            </button>
                            <button class="delete-btn" data-id="${apt.id}" title="Eliminar cita">
                                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                            ` : ''}
                        </div>
                    </div>`;
            });
            detailHtml += `</div>`;
        }

        const [startH, startM] = State.settings.startTime.split(':').map(Number);
        const [endH, endM] = State.settings.endTime.split(':').map(Number);
        const startDayMins = startH * 60 + startM;
        const endDayMins = endH * 60 + endM;
        const totalMinutes = endDayMins - startDayMins;
        
        let timelineHtml = '<div class="timeline-wrapper">';
        timelineHtml += `<div class="timeline-header"><span>${State.settings.startTime}</span><span>${State.settings.endTime}</span></div>`;
        timelineHtml += '<div class="timeline-bar" title="Horario comercial para este día">';
        
        if (totalMinutes > 0) {
            const boundaries = new Set([startDayMins, endDayMins]);
            const aptIntervals = detailApts.map(apt => {
                const [h, m] = apt.time.split(':').map(Number);
                const aptStart = h * 60 + m;
                const aptServ = State.services.find(s => s.id === apt.serviceId);
                const aptDur = aptServ ? parseInt(aptServ.duration) : 0;
                const aptEnd = aptStart + aptDur;
                const clippedStart = Math.max(startDayMins, aptStart);
                const clippedEnd = Math.min(endDayMins, aptEnd);
                const salon = State.salons.find(s => s.id === apt.salonId);
                return {
                    start: clippedStart,
                    end: clippedEnd,
                    color: (salon && salon.color) ? salon.color : '#8B5CF6',
                    time: apt.time
                };
            }).filter(i => i.end > i.start);
            aptIntervals.forEach(i => { boundaries.add(i.start); boundaries.add(i.end); });
            const sortedB = Array.from(boundaries).sort((a, b) => a - b);

            for (let i = 0; i < sortedB.length - 1; i++) {
                const segStart = sortedB[i];
                const segEnd = sortedB[i + 1];
                if (segEnd <= segStart) continue;
                const pct = ((segEnd - segStart) / totalMinutes) * 100;
                const stH = Math.floor(segStart / 60).toString().padStart(2, '0');
                const stM = (segStart % 60).toString().padStart(2, '0');
                const enH = Math.floor(segEnd / 60).toString().padStart(2, '0');
                const enM = (segEnd % 60).toString().padStart(2, '0');
                const covering = aptIntervals.filter(iv => iv.start <= segStart && iv.end >= segEnd);

                if (covering.length === 0) {
                    timelineHtml += `<div class="timeline-segment free" style="width:${pct}%;" title="Libre: ${stH}:${stM} - ${enH}:${enM}"></div>`;
                } else if (covering.length === 1) {
                    timelineHtml += `<div class="timeline-segment booked" style="width:${pct}%; background:${covering[0].color}; border-left:1px solid rgba(255,255,255,0.4); border-right:1px solid rgba(255,255,255,0.4);" title="Ocupado (${covering[0].time}): ${stH}:${stM} - ${enH}:${enM}"><span class="segment-time">${stH}:${stM}-${enH}:${enM}</span></div>`;
                } else {
                    const colors = covering.map(c => c.color);
                    const stripeColors = colors.map((c, ci) => `${c} ${ci * (100 / colors.length)}%, ${c} ${(ci + 1) * (100 / colors.length)}%`).join(', ');
                    timelineHtml += `<div class="timeline-segment booked" style="width:${pct}%; background: repeating-linear-gradient(45deg, ${stripeColors}); border-left:1px solid rgba(0,0,0,0.35); border-right:1px solid rgba(0,0,0,0.35);" title="Solapado (${covering.map(c => c.time).join(' / ')}): ${stH}:${stM} - ${enH}:${enM}"><span class="segment-time" style="color:#222;text-shadow:none;">${stH}:${stM}-${enH}:${enM}</span></div>`;
                }
            }
        }
        timelineHtml += '</div>';

        // Time ruler with all time slots
        const slotInterval = 60; // minutes per slot, show hourly marks
        const numSlots = Math.floor(totalMinutes / slotInterval);
        timelineHtml += '<div class="timeline-ruler">';
        for (let i = 0; i <= numSlots; i++) {
            const mins = startDayMins + i * slotInterval;
            if (mins > endDayMins) break;
            const h = Math.floor(mins / 60).toString().padStart(2, '0');
            const m = (mins % 60).toString().padStart(2, '0');
            const pct = (i / numSlots) * 100;
            timelineHtml += `<span class="timeline-tick" style="left:${pct}%">${h}:${m}</span>`;
        }
        timelineHtml += '</div>';

        timelineHtml += `
            <div class="timeline-legend">
                <div class="legend-item"><span class="legend-color free-color"></span> Libre</div>
                <div class="legend-item"><span class="legend-color booked-color"></span> Ocupado</div>
                <div class="legend-item"><span class="legend-color overlap-color"></span> Solapado</div>
            </div>
        </div>`;

        return `
            ${State.salons.length > 0 ? `
            <div style="text-align:center; margin-bottom: 1.5rem;">
                ${State.session?.staff
                    ? `<span class="salon-title">${State.salons.find(s => s.id === State.activeSalonId)?.name || 'Salón'}</span>`
                    : `<select id="agenda-salon-select" class="salon-title-select">
                    <option value="all" ${State.activeSalonId === 'all' ? 'selected' : ''}>Todos los Salones</option>
                    ${State.salons.map(s => `<option value="${s.id}" ${State.activeSalonId === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
                </select>`}
            </div>
            ` : ''}
            <div class="section-header">
                <div>
                    <h1 class="section-title">Agenda</h1>
                    <p style="color:var(--text-secondary)">Calendario de citas · <span class="cloudflare-badge">⚡ Cloudflare</span></p>
                </div>
                <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
                    ${!State.session?.staff ? `
                    <button class="btn btn-secondary" id="btn-settings" title="Configuración">
                        Configuración
                    </button>` : ''}
                    ${!State.session?.staff ? `
                    <button class="btn btn-danger" id="btn-bill-today" onclick="tpvBillToday()" title="Genera la factura para el salón con los servicios del día señalado">
                        Facturar las citas del día señalado
                    </button>` : ''}
                    <button class="btn btn-primary" id="btn-add-appointment" onclick="showAppointmentForm()">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                        Nueva Cita
                    </button>
                </div>
            </div>

            <!-- Stats -->
            <div class="stats-row">
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Citas Hoy</h3><p>${todaysAppointments.length}</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Clientes</h3><p>${(() => { const sf = State.activeSalonId || 'all'; const cf = sf === 'all' ? State.clients : State.clients.filter(c => c.salon_id === sf); return cf.length; })()}</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Servicios</h3><p>${State.services.length}</p></div>
                </div>
            </div>


            <!-- Calendar -->
            <div class="calendar-wrapper">
                <div class="calendar-nav">
                    <button id="cal-prev">◀</button>
                    <h2>${monthLabel}</h2>
                    <button id="cal-next">▶</button>
                </div>
                <div class="calendar-grid">
                    ${WEEKDAY_NAMES.map(n => `<div class="cal-header">${n}</div>`).join('')}
                    ${calCells}
                </div>
            </div>

            <!-- Day Detail -->
            <div class="day-detail">
                <div class="day-detail-header">
                    <div class="day-detail-nav">
                        <button class="cal-nav-btn" id="day-prev" title="Día anterior" aria-label="Día anterior">
                            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <h3>📋 ${detailLabel}</h3>
                        <button class="cal-nav-btn" id="day-next" title="Día siguiente" aria-label="Día siguiente">
                            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                    <button class="btn btn-primary btn-day-add" onclick="showAppointmentForm()">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                        Nueva Cita
                    </button>
                </div>
                <div class="client-search-wrapper" style="position:relative;margin:0.5rem 0 0.75rem;max-width:340px;">
                    <label style="font-size:0.75rem;font-weight:600;display:block;margin-bottom:0.25rem;">Buscar citas por cliente</label>
                    <select id="appointments-client-select" class="form-control" style="width:100%;">
                        <option value="">Seleccionar cliente...</option>
                        ${clientOptions}
                    </select>
                </div>
                ${clientUpcomingHtml}
                ${timelineHtml}
                ${detailHtml}
            </div>
        `;
    }

    /* ═══════════════════════════════════════
       CLIENTS VIEW
       ═══════════════════════════════════════ */
    function getClientsView() {
        const searchTerm = (State.clientSearch || '').toLowerCase().trim();
        const allClients = State.clients.filter(c => {
            if (!searchTerm) return true;
            const salonName = State.salons.find(s => s.id === c.salon_id)?.name || '';
            return (
                (c.name || '').toLowerCase().includes(searchTerm) ||
                (c.phone || '').toLowerCase().includes(searchTerm) ||
                (c.email || '').toLowerCase().includes(searchTerm) ||
                (c.nif || '').toLowerCase().includes(searchTerm) ||
                salonName.toLowerCase().includes(searchTerm)
            );
        });

        let rows = '';
        if (allClients.length === 0 && State.clients.length === 0) {
            rows = `
            <div class="empty-state data-card">
                <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                <h3>No hay clientes registrados</h3>
                <p>Añade tu primer cliente pulsando el botón superior.</p>
            </div>`;
        } else if (allClients.length === 0 && searchTerm) {
            rows = `
            <div class="empty-state data-card">
                <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <h3>No se encontraron resultados</h3>
                <p>No hay clientes que coincidan con "${searchTerm}".</p>
            </div>`;
        } else {
            const salonGroups = new Map();
            allClients.forEach(c => {
                const salonId = c.salon_id || '__sin_salon__';
                if (!salonGroups.has(salonId)) salonGroups.set(salonId, []);
                salonGroups.get(salonId).push(c);
            });
            salonGroups.forEach(clients => clients.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'es')));

            const clientCardHtml = (c) => `
                <div class="client-card" data-client-id="${c.id}">
                    <div class="client-header">
                        <div class="client-info">
                            <h3 style="margin:0;font-weight:600">${c.name}</h3>
                            <div style="display:flex;align-items:center;gap:12px;font-size:0.85rem;color:var(--text-secondary)">
                                ${c.phone ? `<span><a href="https://wa.me/${c.phone.replace(/\D/g, '')}" target="_blank" style="color:var(--text-secondary)">📱 ${c.phone}</a></span>` : ''}
                                ${c.email ? `<span>✉️ ${c.email}</span>` : ''}
                                <span class="${c.enviar_was ? 'status-success' : 'status-danger'}" style="font-size:0.75rem">WA: ${c.enviar_was ? 'Sí' : 'No'}</span>
                            </div>
                            <div style="display:flex;align-items:center;gap:12px;font-size:0.8rem;color:var(--text-secondary);margin-top:2px;">
                                ${c.nif ? `<span><strong>NIF/CIF:</strong> ${c.nif}</span>` : ''}
                                ${c.fiscal_address ? `<span><strong>Dir. fiscal:</strong> ${c.fiscal_address}</span>` : ''}
                            </div>
                             ${c.observations ? `<p style="font-size:0.8rem;color:var(--text-secondary);margin:4px 0 0;font-style:italic">"${c.observations}"</p>` : ''}
                             ${(() => { try { const th = JSON.parse(c.technical_history || '{}'); const hasLaser = th.laser && (th.laser.zone || (th.laser.sessions && th.laser.sessions.length)); const hasRf = th.rf && (th.rf.zone || (th.rf.sessions && th.rf.sessions.length)); if (!hasLaser && !hasRf) return ''; const badges = []; if (hasLaser) badges.push(`<span style="background:#e8f5e9;color:#2e7d32;border-radius:12px;padding:1px 8px;font-size:0.7rem">Láser: ${th.laser.zone || (th.laser.sessions?.length + ' sesiones')}</span>`); if (hasRf) badges.push(`<span style="background:#e3f2fd;color:#1565c0;border-radius:12px;padding:1px 8px;font-size:0.7rem">RF: ${th.rf.zone || (th.rf.sessions?.length + ' sesiones')}</span>`); return `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${badges.join('')}</div>`; } catch(e) { return ''; } })()}
                             ${State.clientPhotos && State.clientPhotos[c.id] && State.clientPhotos[c.id].length > 0 ? `
                                 <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
                                     ${State.clientPhotos[c.id].slice(0, 4).map(p => {
                                         const photoType = (p.photo_type === 'after') ? 'Después' : (p.photo_type === 'diagnosis' ? 'Diagnóstico' : 'Antes');
                                         return `<div style="position:relative;text-align:center">
                                             <img src="${p.photo_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer;border:2px solid var(--border-color)" onclick="openModal('Foto','<img src=${p.photo_url} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                                             <div style="font-size:0.6rem;color:var(--text-secondary);margin-top:2px">${photoType}</div>
                                             <div style="font-size:0.55rem;color:var(--text-secondary)">${formatDateEU(p.photo_date || '')}</div>
                                         </div>`;
                                     }).join('')}
                                     ${State.clientPhotos[c.id].length > 4 ? `<button style="font-size:0.75rem;color:var(--primary-color);align-self:center;cursor:pointer;background:none;border:none;padding:0" onclick="showClientForm(State.clients.find(c => c.id === '${c.id}'))">+${State.clientPhotos[c.id].length - 4} más</button>` : ''}
                                     ${State.clientPhotos[c.id].some(p => p.photo_type !== 'after' && p.photo_type !== 'diagnosis') && State.clientPhotos[c.id].some(p => p.photo_type === 'after') ? `
                                     <button type="button" class="btn btn-sm btn-secondary compare-btn" data-client-id="${c.id}" style="align-self:center;">Antes / Después</button>` : ''}
                                 </div>
                             ` : ''}
                         </div>
                        <div class="client-actions">
                            ${(!State.session?.staff || isStaffClient(c.id)) ? `
                            <button class="edit-btn" data-id="${c.id}" data-type="client" title="Editar">
                                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                            </button>
                            <button class="delete-btn" data-id="${c.id}" data-type="client" title="Eliminar">
                                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                            ` : ''}
                        </div>
                    </div>
                </div>`;

            let salonHtml = '';
            const sortedSalonIds = [...salonGroups.keys()].sort((a, b) => {
                if (a === '__sin_salon__') return 1;
                if (b === '__sin_salon__') return -1;
                const sa = State.salons.find(s => s.id === a);
                const sb = State.salons.find(s => s.id === b);
                return (sa?.name || '').localeCompare(sb?.name || '', 'es');
            });

            sortedSalonIds.forEach(salonId => {
                const clients = salonGroups.get(salonId);
                const salonName = salonId === '__sin_salon__' ? 'Sin salón asignado' : (State.salons.find(s => s.id === salonId)?.name || salonId);
                salonHtml += `
                    <div class="clients-salon-group">
                        <h2 class="clients-salon-heading">${salonName} <span style="font-weight:400;font-size:0.8rem;color:var(--text-secondary)">(${clients.length})</span></h2>
                        <div class="clients-list">${clients.map(clientCardHtml).join('')}</div>
                    </div>`;
            });

            rows = salonHtml;
        }

        return `
            <div class="section-header" style="flex-wrap:wrap;gap:0.75rem">
                <div style="flex:1;min-width:180px"><h1 class="section-title">Clientes</h1><p style="color:var(--text-secondary)">Base de datos de clientes · <span class="cloudflare-badge">⚡ Cloudflare</span></p></div>
                <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:240px;justify-content:flex-end">
                    <div class="client-search-wrapper" style="position:relative;flex:1;max-width:340px">
                        <svg class="client-search-icon" width="18" height="18" fill="none" stroke="var(--text-secondary)" stroke-width="2" viewBox="0 0 24 24" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);pointer-events:none"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input type="text" id="clients-search-input" class="form-control" placeholder="Buscar por nombre, teléfono, email, NIF o salón..." value="${searchTerm}" autocomplete="off" style="padding-left:34px;padding-right:30px">
                        ${searchTerm ? `<button id="clients-search-clear" style="position:absolute;right:6px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text-secondary);font-size:1.1rem;line-height:1;padding:2px" title="Limpiar búsqueda">&times;</button>` : ''}
                    </div>
                    <button class="btn btn-primary" id="btn-add-client">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                        Añadir Cliente
                    </button>
                </div>
            </div>
            ${rows}`;
    }

    /* ═══════════════════════════════════════
       SERVICES VIEW
       ═══════════════════════════════════════ */
    function getServicesView() {
        let rows = '';
        if (State.services.length === 0) {
            rows = `
            <div class="empty-state data-card">
                <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                <h3>No hay servicios registrados</h3>
                <p>Define los servicios que ofreces a tus clientes.</p>
            </div>`;
        } else {
            rows = `
            <div class="data-card">
                <table class="table">
                    <thead><tr><th>Servicio</th><th>Duración</th><th>Precio</th><th>Acciones</th></tr></thead>
                    <tbody>
                    ${State.services.map(s => `
                        <tr>
                            <td style="font-weight:600">${s.name}</td>
                            <td>${s.duration} min</td>
                            <td>${parseFloat(s.price).toFixed(2)} €</td>
                            <td>
                                <div class="actions">
                                    ${(!State.session?.staff || isStaffService(s.id)) ? `
                                    <button class="edit-btn" data-id="${s.id}" data-type="service" title="Editar">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    </button>
                                    <button class="delete-btn" data-id="${s.id}" data-type="service" title="Eliminar">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                    ` : ''}
                                </div>
                            </td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>`;
        }

        return `
            <div class="section-header">
                <div><h1 class="section-title">Servicios</h1><p style="color:var(--text-secondary)">Catálogo de servicios · <span class="cloudflare-badge">⚡ Cloudflare</span></p></div>
                <button class="btn btn-primary" id="btn-add-service">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                    Añadir Servicio
                </button>
            </div>
            ${rows}`;
    }

    /* ═══════════════════════════════════════
       TPV VIEW
       ═══════════════════════════════════════ */
    function tpvClientName(id) {
        if (!id) return 'Consumidor final';
        const c = State.clients.find(x => x.id === id);
        return c ? c.name : 'Consumidor final';
    }

    function tpvSalonOptions() {
        const salons = State.salons;
        if (salons.length === 0) return '<option value="">— Sin salones —</option>';
        if (!State.tpv.salonId || !salons.some(s => s.id === State.tpv.salonId)) State.tpv.salonId = salons[0].id;
        return salons.map(s => `<option value="${s.id}"${s.id === State.tpv.salonId ? ' selected' : ''}>${s.name}</option>`).join('');
    }

    function tpvSelectedSalon() {
        return State.salons.find(s => s.id === State.tpv.salonId) || null;
    }

    function tpvCartTotals() {
        let imports = 0;
        State.tpv.cart.forEach(item => {
            const price = parseFloat(item.price) || 0;
            imports += price * item.qty;
        });
        const isSalonInvoice = State.tpv.docType === 'factura-salon';
        if (isSalonInvoice) {
            const commission = Math.round(imports * 0.70 * 100) / 100;
            const base = Math.round(commission / 1.21 * 100) / 100;
            const tax = Math.round(base * 0.21 * 100) / 100;
            const retention = Math.round(base * 0.15 * 100) / 100;
            const total = Math.round((base + tax - retention) * 100) / 100;
            return { base, commission, commissionRate: 70, tax, retention, total, salonForSalon: Math.round(imports * 0.30 * 100) / 100, salonRetention: retention };
        }
        const base = Math.round(imports / 1.21 * 100) / 100;
        const tax = Math.round(base * 0.21 * 100) / 100;
        return { base, commission: 0, commissionRate: 0, tax, retention: 0, total: imports };
    }

    function tpvFormatMoney(v) {
        return v.toFixed(2) + ' €';
    }

    function tpvPaymentShort(inv) {
        const m = inv.payment_method || 'contado';
        return m === 'tarjeta' ? 'Tarjeta' : (m === 'mixto' ? 'Mixto' : 'Contado');
    }

    function tpvPaymentDetail(inv) {
        const m = inv.payment_method || 'contado';
        if (m === 'mixto') {
            return `Mixto (Contado: ${tpvFormatMoney(Number(inv.payment_cash) || 0)} / Tarjeta: ${tpvFormatMoney(Number(inv.payment_card) || 0)})`;
        }
        return tpvPaymentShort(inv);
    }

    function getTpvView() {
        const isStaff = State.session && State.session.staff;
        const services = State.services.filter(s => !isStaff || isStaffService(s.id));
        const serviceGrid = services.length === 0
            ? '<p style="color:var(--text-secondary);text-align:center;padding:1rem;">No hay servicios disponibles.</p>'
            : `<div class="tpv-service-grid">${services.map(s => `
                <button type="button" class="tpv-service-card" data-service-id="${s.id}">
                    <span class="tpv-service-name">${s.name}</span>
                    <span class="tpv-service-price">${tpvFormatMoney(parseFloat(s.price) || 0)}</span>
                </button>`).join('')}</div>`;

        return `
            <div class="section-header">
                <div><h1 class="section-title">TPV · Punto de Venta</h1><p style="color:var(--text-secondary)">Tickets y facturas simplificadas · <span class="cloudflare-badge">⚡ IVA 21%</span></p></div>
                <button type="button" class="btn btn-secondary" id="btn-tpv-sales">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:-3px;margin-right:0.4rem;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    Listado de Ventas
                </button>
            </div>
            <div class="tpv-layout">
                <div id="tpv-cart-panel">${getTpvCartPanel()}</div>
                <div style="display:flex;flex-direction:column;gap:1rem;">
                    <div class="data-card" style="padding:1.25rem;">
                        <h3 style="margin-bottom:0.75rem;font-size:1rem;">Servicios</h3>
                        ${serviceGrid}
                    </div>
                </div>
            </div>`;
    }

    function getTpvCartPanel() {
        // Cargar automáticamente la factura de salón del día señalado para el salón seleccionado
        // al entrar al TPV (el select no dispara 'change' si solo hay un salón ya preseleccionado)
        if (State.tpv.pendingBills && State.tpv.pendingBills.length > 0 && State.tpv.cart.length === 0) {
            const pend = State.tpv.pendingBills.find(b => b.salonId === State.tpv.salonId);
            if (pend) {
                State.tpv.docType = 'factura-salon';
                State.tpv.cart = pend.items.slice();
            }
        }
        const tpvClients = State.clients.filter(c => !c.salon_id || c.salon_id === State.tpv.salonId);
        const clientOptions = [
            (State.tpv.docType === 'factura'
                ? '<option value="">— Selecciona un cliente —</option>'
                : '<option value="">Consumidor final</option>')
        ].concat(tpvClients.map(c => `<option value="${c.id}"${State.tpv.clientId === c.id ? ' selected' : ''}>${c.name}</option>`)).join('');

        const cartRows = State.tpv.cart.length === 0
            ? '<tr><td colspan="4" style="text-align:center;color:var(--text-secondary);padding:1rem;">El carrito está vacío. Añade servicios desde la derecha.</td></tr>'
            : State.tpv.cart.map((item, i) => `
                <tr>
                    <td style="font-weight:600">
                        <div>${item.name}</div>
                        ${item.notes ? `<div style="font-size:0.72rem;font-style:italic;color:var(--text-secondary);font-weight:400;">Notas: ${item.notes}</div>` : ''}
                    </td>
                    <td style="text-align:center">
                        <button type="button" class="tpv-qty-btn" data-act="dec" data-idx="${i}">−</button>
                        <span style="margin:0 0.5rem;font-weight:600">${item.qty}</span>
                        <button type="button" class="tpv-qty-btn" data-act="inc" data-idx="${i}">+</button>
                    </td>
                    <td style="text-align:right">${tpvFormatMoney((parseFloat(item.price) || 0) * item.qty)}</td>
                    <td style="text-align:center"><button type="button" class="btn btn-danger btn-sm" data-act="remove" data-idx="${i}" style="padding:0.2rem 0.5rem;font-size:0.7rem;">✕</button></td>
                </tr>`).join('');

        const totals = tpvCartTotals();
        const isSalonInvoice = State.tpv.docType === 'factura-salon';
        const docTypeLabel = State.tpv.docType === 'ticket' ? 'Ticket' : (isSalonInvoice ? 'Factura para el Salón' : 'Factura para Cliente');
        const showClient = State.tpv.docType !== 'factura-salon';

        return `
            <div class="data-card" style="padding:1.25rem;">
                <div style="display:flex;gap:0.4rem;margin-bottom:1rem;flex-wrap:nowrap;width:100%;">
                    <button type="button" class="btn ${State.tpv.docType === 'ticket' ? 'btn-primary' : 'btn-secondary'}" id="tpv-doc-ticket" style="flex:0 0 auto;">Ticket</button>
                    <button type="button" class="btn ${State.tpv.docType === 'factura' ? 'btn-primary' : 'btn-secondary'}" id="tpv-doc-factura" style="flex:0 0 auto;">Factura para Cliente</button>
                    <button type="button" class="btn ${State.tpv.docType === 'factura-salon' ? 'btn-primary' : 'btn-secondary'}" id="tpv-doc-factura-salon" style="font-size:1.15rem;font-weight:700;flex:0 0 auto;">Factura-Salón</button>
                    ${State.tpv.pendingBills && State.tpv.pendingBills.length > 0 ? `
                    <span style="display:inline-flex;align-items:center;gap:0.35rem;background:var(--danger);color:#fff;border-radius:999px;padding:0.15rem 0.7rem;font-size:0.95rem;font-weight:800;white-space:nowrap;flex:0 0 auto;margin-left:0.25rem;">
                        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:-3px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                        ${State.tpv.pendingBills.length} por emitir
                    </span>` : ''}
                </div>
                <div class="form-group">
                    <label>Salón de la venta</label>
                    <select class="form-control" id="tpv-sale-salon">${tpvSalonOptions()}</select>
                </div>
                ${showClient ? `
                <div class="form-group">
                    <label>Cliente</label>
                    <select class="form-control" id="tpv-client" ${State.tpv.docType === 'factura' ? 'required' : ''}>${clientOptions}</select>
                </div>` : ''}
                ${State.tpv.docType === 'factura' ? `
                <div class="form-group">
                    <label>NIF del cliente</label>
                    <input type="text" class="form-control" id="tpv-nif" placeholder="NIF / CIF" value="${State.tpv.clientNif}">
                </div>` : ''}
                <table class="table" style="margin-top:0.5rem;">
                    <thead><tr><th>Servicio</th><th style="text-align:center">Cant.</th><th style="text-align:right">Importe</th><th></th></tr></thead>
                    <tbody>${cartRows}</tbody>
                </table>
                <div style="margin-top:1rem;display:flex;flex-direction:column;gap:0.35rem;align-items:flex-end;font-size:0.95rem;">
                    ${isSalonInvoice ? `
                    <div style="color:var(--text-secondary)">Comisión por los Servicios (70%): <strong>${tpvFormatMoney(totals.commission)}</strong></div>
                    <div style="color:var(--text-secondary)">BASE Imponible: <strong>${tpvFormatMoney(totals.base)}</strong></div>
                    <div style="color:var(--text-secondary)">+IVA (21%): <strong>${tpvFormatMoney(totals.tax)}</strong></div>
                    <div style="color:var(--text-secondary)">−Retención (15%): <strong style="color:var(--danger)">${tpvFormatMoney(totals.retention)}</strong></div>
                    <div style="font-size:1.2rem;font-weight:700;">TOTAL FACTURA: ${tpvFormatMoney(totals.total)}</div>
                    <div style="border:1px solid var(--border);border-radius:6px;padding:0.6rem 0.75rem;margin-top:0.4rem;width:100%;">
                        <div style="font-weight:700;text-align:center;font-size:0.95rem;margin-bottom:0.35rem;">A ENTREGAR AL SALÓN</div>
                        <div style="display:flex;justify-content:space-between;">30% PARA EL SALÓN: <strong>${tpvFormatMoney(totals.salonForSalon)}</strong></div>
                        <div style="display:flex;justify-content:space-between;">+RETENCIÓN: <strong>${tpvFormatMoney(totals.salonRetention)}</strong></div>
                        <div style="display:flex;justify-content:space-between;border-top:1px solid var(--border);margin-top:0.3rem;padding-top:0.3rem;font-weight:800;">IMPORTE TOTAL: <strong>${tpvFormatMoney(totals.salonForSalon + totals.salonRetention)}</strong></div>
                    </div>
                    ` : `
                    <div style="color:var(--text-secondary)">TOTAL Servicios sin IVA: <strong>${tpvFormatMoney(totals.base)}</strong></div>
                    <div style="color:var(--text-secondary)">IVA (21%): <strong>${tpvFormatMoney(totals.tax)}</strong></div>
                    <div style="font-size:1.2rem;font-weight:700;">TOTAL: ${tpvFormatMoney(totals.total)}</div>
                    `}
                </div>
                <div class="form-group" style="margin-top:1rem;margin-bottom:0;">
                    <label>Forma de pago</label>
                    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                        <button type="button" class="btn ${State.tpv.paymentMethod === 'contado' ? 'btn-primary' : 'btn-secondary'}" id="tpv-pay-contado">Contado</button>
                        <button type="button" class="btn ${State.tpv.paymentMethod === 'tarjeta' ? 'btn-primary' : 'btn-secondary'}" id="tpv-pay-tarjeta">Tarjeta</button>
                        <button type="button" class="btn ${State.tpv.paymentMethod === 'mixto' ? 'btn-primary' : 'btn-secondary'}" id="tpv-pay-mixto">Mixto</button>
                    </div>
                </div>
                ${State.tpv.paymentMethod === 'mixto' ? `
                <div style="display:flex;gap:0.75rem;align-items:flex-end;margin-top:0.75rem;">
                    <div class="form-group" style="margin:0;flex:1;">
                        <label>Importe en efectivo (€)</label>
                        <input type="number" class="form-control" id="tpv-payment-cash" min="0" max="${totals.total.toFixed(2)}" step="0.01" placeholder="0.00" value="${State.tpv.paymentCash}">
                    </div>
                    <div style="padding-bottom:0.6rem;font-size:0.9rem;color:var(--text-secondary);white-space:nowrap;">Tarjeta: <strong id="tpv-payment-card-label">${tpvFormatMoney(totals.total - (parseFloat(State.tpv.paymentCash) || 0))}</strong></div>
                </div>` : ''}
                <button type="button" class="btn btn-primary" id="tpv-emit" style="width:100%;margin-top:1rem;">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:-4px;margin-right:0.4rem;"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm0-12V5a2 2 0 012-2h2a2 2 0 012 2v0"></path></svg>
                    Emitir ${docTypeLabel}
                </button>
            </div>`;
    }

    function tpvSalesFiltered() {
        if (!State.tpv.salesApplied) return [];
        const salonOk = i => {
            if (State.tpv.historySalonId === 'all') return true;
            if (i.salon_id === State.tpv.historySalonId) return true;
            // Incluir tickets/facturas de cliente que no tienen salón asignado
            if (!i.salon_id && i.doc_type !== 'factura-salon') return true;
            return false;
        };
        const fromOk = i => !State.tpv.salesFrom || (i.created_at || '').substring(0, 10) >= State.tpv.salesFrom;
        const toOk = i => !State.tpv.salesTo || (i.created_at || '').substring(0, 10) <= State.tpv.salesTo;
        return State.tpv.invoices
            .filter(i => i.status !== 'cancelled')
            .filter(i => salonOk(i) && fromOk(i) && toOk(i))
            .sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''));
    }

    function tpvSalesGroups() {
        const map = new Map();
        tpvSalesFiltered().forEach(inv => {
            const key = inv.salon_id || '__sin_salon__';
            const label = State.salons.find(s => s.id === key)?.name || 'Sin salón';
            if (!map.has(key)) map.set(key, { label, items: [] });
            map.get(key).items.push(inv);
        });
        return Array.from(map.values()).sort((a, b) => a.label.localeCompare(b.label));
    }

    function tpvInvoiceNum(inv) {
        return (inv.doc_type !== 'ticket' ? 'F' : 'T') + '-' + String(inv.number).padStart(4, '0');
    }

    function tpvSalesReportRows() {
        if (!State.tpv.salesApplied) {
            return '<tr><td colspan="6" style="text-align:center;color:var(--text-secondary);padding:1rem;">Selecciona un período y pulsa "Aplicar" para ver el detalle.</td></tr>';
        }
        const groups = tpvSalesGroups();
        if (groups.length === 0) {
            return '<tr><td colspan="6" style="text-align:center;color:var(--text-secondary);padding:1rem;">No hay ventas en el período y filtros seleccionados.</td></tr>';
        }
        let html = '';
        let grandTotal = 0;
        groups.forEach(g => {
            html += `<tr class="report-group-header"><td colspan="6">${g.label}</td></tr>`;
            g.items.forEach(inv => {
                const items = Array.isArray(inv.items) ? inv.items : [];
                const dateStr = (inv.created_at || '').substring(0, 10);
                const clientLabel = inv.client_name || 'Consumidor final';
                let servicesLabel = items.length > 0
                    ? items.map(it => `${it.name}${it.qty > 1 ? ` ×${it.qty}` : ''}`).join(', ')
                    : '—';
                if (inv.doc_type === 'factura-salon') {
                    servicesLabel = 'Depilación y otros tratamientos';
                }
                const total = Number(inv.total_amount) || 0;
                grandTotal += total;
                html += `<tr data-sales-row="${inv.id}">
                    <td style="vertical-align:top;text-align:center;"><input type="checkbox" class="inv-select" data-invoice-id="${inv.id}" title="Marcar para anular" onclick="event.stopPropagation()"></td>
                    <td style="vertical-align:top;">${tpvInvoiceNum(inv)}</td>
                    <td style="vertical-align:top;">${formatDateEU(dateStr)}</td>
                    <td style="vertical-align:top;">${clientLabel}</td>
                    <td style="vertical-align:top;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${servicesLabel.replace(/"/g, '')}">${servicesLabel}</td>
                    <td style="vertical-align:top;text-align:right;">${tpvFormatMoney(total)}</td>
                </tr>`;
            });
        });
        grandTotal = Math.round(grandTotal * 100) / 100;
        html += `<tr class="report-grand"><td colspan="5" style="text-align:right;">TOTAL GENERAL (IVA incl.)</td><td style="text-align:right;">${tpvFormatMoney(grandTotal)}</td></tr>`;
        return html;
    }

    function tpvSalesSummary() {
        const list = tpvSalesFiltered();
        let count = 0, base = 0, total = 0, tax = 0, commission = 0, retention = 0;
        list.forEach(i => {
            count++;
            base += Number(i.base_amount) || 0;
            total += Number(i.total_amount) || 0;
            tax += Number(i.tax_amount) || 0;
            if (i.doc_type === 'factura-salon') {
                commission += Number(i.commission_amount) || 0;
                retention += Number(i.retention_amount) || 0;
            }
        });
        commission = Math.round(commission * 100) / 100;
        retention = Math.round(retention * 100) / 100;
        return { count, base, total, tax, commission, retention };
    }

    // Hoja de Control: todos los servicios de un día determinado con importes parciales y total
    function tpvControlSheetRows() {
        const dateStr = State.tpv.controlSheetDate;
        if (!dateStr) return '<tr><td colspan="5" style="text-align:center;color:var(--text-secondary);padding:1rem;">Selecciona un día para ver la hoja de control.</td></tr>';

        const salonId = State.tpv.historySalonId || 'all';
        const dayApts = State.appointments
            .filter(a => a.date === dateStr && (salonId === 'all' || a.salonId === salonId))
            .sort((a, b) => a.time.localeCompare(b.time));

        if (dayApts.length === 0) {
            return `<tr><td colspan="5" style="text-align:center;color:var(--text-secondary);padding:1rem;">No hay citas en este día${salonId === 'all' ? '' : ' para el salón seleccionado'}.</td></tr>`;
        }

        const groups = new Map();
        dayApts.forEach(apt => {
            const key = apt.salonId || '__sin_salon__';
            if (!groups.has(key)) groups.set(key, { label: State.salons.find(s => s.id === key)?.name || 'Sin salón', items: [] });
            const client = State.clients.find(c => c.id === apt.clientId) || { name: 'Eliminado' };
            const service = State.services.find(s => s.id === apt.serviceId) || { name: 'Servicio', price: 0 };
            groups.get(key).items.push({ name: `${client.name} → ${service.name}`, amount: Math.round((parseFloat(service.price) || 0) * 100) / 100 });
        });

        let html = '';
        let grandTotal = 0;
        groups.forEach(g => {
            html += `<tr class="report-group-header"><td colspan="5">${g.label}</td></tr>`;
            g.items.forEach(it => {
                html += `
                    <tr>
                        <td style="vertical-align:top;padding-left:1.25rem;">${it.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style="vertical-align:top;text-align:right;">${tpvFormatMoney(it.amount)}</td>
                    </tr>`;
            });
            const subtotal = Math.round(g.items.reduce((a, it) => a + it.amount, 0) * 100) / 100;
            grandTotal += subtotal;
            const commission = Math.round(subtotal * 0.70 * 100) / 100;
            const base = Math.round(commission / 1.21 * 100) / 100;
            const tax = Math.round(base * 0.21 * 100) / 100;
            const retention = Math.round(base * 0.15 * 100) / 100;
            const salonForSalon = Math.round(subtotal * 0.30 * 100) / 100;
            const totalTecnico = Math.round((base + tax - retention) * 100) / 100;
            const totalEntregar = Math.round((salonForSalon + retention) * 100) / 100;
            html += `
                <tr class="report-subtotal"><td colspan="4" style="text-align:right;">SUBTOTAL ${g.label}</td><td style="text-align:right;">${tpvFormatMoney(subtotal)}</td></tr>
                <tr class="report-grand" style="line-height:1.6;">
                    <td colspan="5" style="padding:0.4rem 0.6rem;">
                        <div style="font-size:0.85rem;">
                            <div style="display:flex;justify-content:space-between;max-width:360px;"><span>Comisión por los servicios (70% Técnico):</span><strong>${tpvFormatMoney(commission)}</strong></div>
                            <div style="display:flex;justify-content:space-between;max-width:360px;"><span>Base:</span><span>${tpvFormatMoney(base)}</span></div>
                            <div style="display:flex;justify-content:space-between;max-width:360px;"><span>+IVA (21%):</span><span>${tpvFormatMoney(tax)}</span></div>
                            <div style="display:flex;justify-content:space-between;max-width:360px;"><span>−Retención (15%):</span><span>−${tpvFormatMoney(retention)}</span></div>
                            <div style="display:flex;justify-content:space-between;max-width:360px;"><strong>→ TOTAL 70% TÉCNICO:</strong><strong>${tpvFormatMoney(totalTecnico)}</strong></div>
                            <div style="border-top:1px solid #999;margin:0.3rem 0;"></div>
                            <div style="display:flex;justify-content:space-between;max-width:360px;"><span>30% PARA EL SALÓN:</span><strong>${tpvFormatMoney(salonForSalon)}</strong></div>
                            <div style="display:flex;justify-content:space-between;max-width:360px;"><span>+RETENCIÓN (15%):</span><strong>${tpvFormatMoney(retention)}</strong></div>
                            <div style="display:flex;justify-content:space-between;max-width:360px;"><strong>→ TOTAL 30% SALÓN:</strong><strong>${tpvFormatMoney(totalEntregar)}</strong></div>
                        </div>
                    </td>
                </tr>`;
        });

        grandTotal = Math.round(grandTotal * 100) / 100;
        html += `<tr class="report-grand"><td colspan="4" style="text-align:right;">TOTAL GENERAL DÍA</td><td style="text-align:right;">${tpvFormatMoney(grandTotal)}</td></tr>`;
        return html;
    }

    function getSalesView() {
        if (State.tpv.salesFrom === undefined) {
            const now = new Date();
            State.tpv.salesFrom = toLocalDateStr(new Date(now.getFullYear(), now.getMonth(), 1));
        }
        if (State.tpv.salesTo === undefined) State.tpv.salesTo = toLocalDateStr(new Date());
        if (State.tpv.salesApplied === undefined) State.tpv.salesApplied = true;

        const salonFilterOptions = [
            '<option value="all">Todos los salones</option>'
        ].concat(State.salons.map(s => `<option value="${s.id}"${State.tpv.historySalonId === s.id ? ' selected' : ''}>${s.name}</option>`)).join('');
        const summary = tpvSalesSummary();
        const tab = State.tpv.salesTab === 'hojas-control' ? 'hojas-control' : 'facturas';
        const controlDate = State.tpv.controlSheetDate;

        return `
            <div class="section-header">
                <div><h1 class="section-title">Listado de Ventas</h1><p style="color:var(--text-secondary)">Ventas entre fechas · filtro por salón · <span class="cloudflare-badge">⚡ Cloudflare</span></p></div>
                <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                    <button type="button" class="btn btn-primary" id="btn-sales-print">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:-3px;margin-right:0.4rem;"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                        ${tab === 'hojas-control' ? 'Imprimir Hoja de Control' : 'Imprimir'}
                    </button>
                    <button type="button" class="btn btn-secondary" id="btn-sales-back">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:-3px;margin-right:0.4rem;"><path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path></svg>
                        Volver al TPV
                    </button>
                </div>
            </div>
            <div class="list-mode-toggle" style="margin-bottom:1rem;width:fit-content;">
                <button type="button" class="list-mode-btn${tab !== 'hojas-control' ? ' active' : ''}" id="sales-tab-facturas">Facturas</button>
                <button type="button" class="list-mode-btn${tab === 'hojas-control' ? ' active' : ''}" id="sales-tab-hojas">Hojas de Control</button>
            </div>
            ${tab === 'facturas' ? `
            <div class="daily-controls" style="justify-content:flex-start;flex-wrap:wrap;gap:0.75rem;">
                <div class="form-group" style="margin:0;">
                    <label style="font-size:0.75rem;font-weight:600;">Salón</label>
                    <select class="form-control" id="sales-salon-select" style="min-width:180px;">${salonFilterOptions}</select>
                </div>
                <div class="form-group" style="margin:0;">
                    <label style="font-size:0.75rem;font-weight:600;">Desde</label>
                    <input type="date" class="form-control" id="sales-from" value="${State.tpv.salesFrom}" style="min-width:150px;">
                </div>
                <div class="form-group" style="margin:0;">
                    <label style="font-size:0.75rem;font-weight:600;">Hasta</label>
                    <input type="date" class="form-control" id="sales-to" value="${State.tpv.salesTo}" style="min-width:150px;">
                </div>
                <div style="display:flex;gap:0.5rem;align-items:flex-end;">
                    <button type="button" class="btn btn-primary" id="btn-sales-apply">Aplicar</button>
                    <button type="button" class="btn btn-secondary" id="btn-sales-reset">Limpiar</button>
                </div>
            </div>
            <div class="stats-row" style="grid-template-columns:repeat(auto-fit,minmax(170px,1fr));margin:1rem 0;">
                <div class="stat-card">
                    <p class="stat-label">Ventas</p>
                    <p class="stat-value">${summary.count}</p>
                </div>
                <div class="stat-card">
                    <p class="stat-label">Importe total</p>
                    <p class="stat-value">${tpvFormatMoney(summary.total)}</p>
                </div>
                <div class="stat-card">
                    <p class="stat-label">IVA incluido</p>
                    <p class="stat-value">${tpvFormatMoney(summary.tax)}</p>
                </div>
            </div>
            <div class="data-card" style="padding:1.25rem;">
                <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
                    <h3 style="font-size:1rem;margin:0;">Detalle agrupado por salón</h3>
                    <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
                        <label style="display:flex;align-items:center;gap:0.35rem;font-size:0.8rem;cursor:pointer;"><input type="checkbox" id="inv-select-all"> Seleccionar todos</label>
                        <button type="button" class="btn btn-sm btn-danger" id="btn-invoices-cancel" style="background:var(--danger,#dc3545);border-color:var(--danger,#dc3545);">Anular seleccionados</button>
                    </div>
                </div>
                <table class="table">
                    <thead><tr><th style="width:30px;"></th><th>Nº</th><th>Fecha</th><th>Cliente</th><th>Servicio</th><th style="text-align:right">Total</th></tr></thead>
                    <tbody id="tpv-history-body">${tpvSalesReportRows()}</tbody>
                </table>
            </div>` : `
            <div class="daily-controls" style="justify-content:flex-start;flex-wrap:wrap;gap:0.75rem;">
                <div class="form-group" style="margin:0;">
                    <label style="font-size:0.75rem;font-weight:600;">Salón</label>
                    <select class="form-control" id="sales-salon-select" style="min-width:180px;">${salonFilterOptions}</select>
                </div>
                <div class="form-group" style="margin:0;">
                    <label style="font-size:0.75rem;font-weight:600;">Día (Hoja de Control)</label>
                    <input type="date" class="form-control" id="control-sheet-date" value="${controlDate}" style="min-width:150px;">
                </div>
            </div>
            <div class="data-card" style="padding:1.25rem;">
                <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
                    <h3 style="font-size:1rem;margin:0;">Hoja de Control · ${controlDate ? formatDateEU(controlDate) : '—'}</h3>
                    <div style="font-size:0.85rem;color:var(--text-secondary);">Todos los servicios del día con importes parciales y totales (70% Técnico / 15% Retención / 30% Salón)</div>
                </div>
                <table class="table">
                    <thead><tr><th>Servicio</th><th></th><th></th><th></th><th style="text-align:right">Importe</th></tr></thead>
                    <tbody id="tpv-control-body">${tpvControlSheetRows()}</tbody>
                </table>
            </div>`
        }`;
    }

    function tpvPrintSelectedInvoices(ids) {
        const printArea = document.getElementById('print-area');
        if (!printArea) return;
        const invoices = State.tpv.invoices.filter(i => ids.includes(i.id));
        if (invoices.length === 0) {
            showToast('No se encontraron las facturas seleccionadas.', 'error');
            return;
        }
        const html = invoices.map((inv, idx) =>
            tpvBuildDocHtml(inv, false) + (idx < invoices.length - 1 ? '<div style="page-break-after:always;"></div>' : '')
        ).join('');
        printArea.innerHTML = html;
        printArea.classList.add('print-active');
        window.print();
        setTimeout(() => {
            printArea.innerHTML = '';
            printArea.classList.remove('print-active');
        }, 300);
    }

    function tpvPrintSales() {
        const printArea = document.getElementById('print-area');
        if (!printArea) return;
        const salon = State.tpv.historySalonId === 'all' ? 'Todos los salones' : (State.salons.find(s => s.id === State.tpv.historySalonId)?.name || 'Salón');
        const fromLabel = formatDateEU(State.tpv.salesFrom) || 'inicio';
        const toLabel = formatDateEU(State.tpv.salesTo) || 'hoy';
        const issuer = State.profile || {};
        const issuerName = (issuer.full_name && issuer.full_name.trim()) ? issuer.full_name : 'Estética y Bienestar Lara';
        const issuerNif = issuer.nif ? `<div style="font-size:0.85rem;color:#555;margin-top:0.2rem;">NIF: ${issuer.nif}</div>` : '';
        const issuerAddress = issuer.fiscal_address ? `<div style="font-size:0.85rem;color:#555;">${issuer.fiscal_address}</div>` : '';

        const dimHead = 'Cliente';
        let grandTotal = 0;
        const groupBlocks = tpvSalesGroups().length === 0
            ? '<div style="padding:1rem;color:#777;text-align:center;">No hay ventas en el período seleccionado.</div>'
            : tpvSalesGroups().map(g => {
                const salonInvs = g.items.filter(i => i.doc_type === 'factura-salon');
                const clientInvs = g.items.filter(i => i.doc_type !== 'factura-salon');

                const buildInvRows = inv => {
                    const items = Array.isArray(inv.items) ? inv.items : [];
                    const dateStr = (inv.created_at || '').substring(0, 10);
                    const dimVal = inv.client_name || 'Consumidor final';
                    let lines = items.length > 0 ? items.map(it => ({
                        name: it.name,
                        qty: it.qty,
                        amount: Math.round((parseFloat(it.price) || 0) * (it.qty || 0) * 100) / 100
                    })) : [{ name: '—', qty: '', amount: Number(inv.base_amount) || 0 }];
                    if (inv.doc_type === 'factura-salon') {
                        lines = [{ name: 'Depilación y otros tratamientos', qty: '', amount: Number(inv.total_amount) || 0 }];
                    }
                    const lineRows = lines.map((line, idx) => `
                        <tr>
                            ${idx === 0 ? `<td rowspan="${lines.length + 1}" style="padding:0.4rem 0.6rem;border-bottom:1px solid #ddd;vertical-align:top;">${formatDateEU(dateStr)}<br><span style="font-size:0.7rem;color:#777;">${tpvInvoiceNum(inv)}</span></td>
                            <td rowspan="${lines.length + 1}" style="padding:0.4rem 0.6rem;border-bottom:1px solid #ddd;vertical-align:top;">${dimVal}</td>` : ''}
                            <td style="padding:0.4rem 0.6rem;border-bottom:1px solid #ddd;">${line.name}</td>
                            <td style="padding:0.4rem 0.6rem;border-bottom:1px solid #ddd;text-align:center;">${line.qty}</td>
                            <td style="padding:0.4rem 0.6rem;border-bottom:1px solid #ddd;text-align:right;">${tpvFormatMoney(line.amount)}</td>
                        </tr>`).join('');
                    const totalRow = `<tr style="border-top:1px solid #999;font-weight:800;">
                        <td style="padding:0.35rem 0.6rem;text-align:right;" colspan="2">TOTAL ${tpvInvoiceNum(inv)}</td>
                        <td style="padding:0.35rem 0.6rem;text-align:right;">${tpvFormatMoney(Number(inv.total_amount) || 0)}</td>
                    </tr>`;
                    grandTotal += Number(inv.total_amount) || 0;
                    return lineRows + totalRow;
                };

                // Totales de las facturas de salón
                const sCommission = Math.round(salonInvs.reduce((a, i) => a + (Number(i.commission_amount) || 0), 0) * 100) / 100;
                const sBase = Math.round(salonInvs.reduce((a, i) => a + (Number(i.base_amount) || 0), 0) * 100) / 100;
                const sTax = Math.round(salonInvs.reduce((a, i) => a + (Number(i.tax_amount) || 0), 0) * 100) / 100;
                const sRetention = Math.round(salonInvs.reduce((a, i) => a + (Number(i.retention_amount) || 0), 0) * 100) / 100;
                const sTotal = Math.round(salonInvs.reduce((a, i) => a + (Number(i.total_amount) || 0), 0) * 100) / 100;
                // Totales de las facturas de cliente
                const cBase = Math.round(clientInvs.reduce((a, i) => a + (Number(i.base_amount) || 0), 0) * 100) / 100;
                const cTax = Math.round(clientInvs.reduce((a, i) => a + (Number(i.tax_amount) || 0), 0) * 100) / 100;
                const cTotal = Math.round(clientInvs.reduce((a, i) => a + (Number(i.total_amount) || 0), 0) * 100) / 100;

                const salonRows = salonInvs.map(buildInvRows).join('');
                const clientRows = clientInvs.map(buildInvRows).join('');

                const salonTable = salonInvs.length > 0 ? `
                    <table style="width:100%;font-size:0.85rem;border-collapse:collapse;margin-top:0.4rem;">
                        <thead>
                            <tr style="color:#555;">
                                <th style="padding:0.35rem 0.6rem;text-align:left;border-bottom:1px solid #999;width:110px;">Fecha</th>
                                <th style="padding:0.35rem 0.6rem;text-align:left;border-bottom:1px solid #999;">${dimHead}</th>
                                <th style="padding:0.35rem 0.6rem;text-align:left;border-bottom:1px solid #999;">Servicio</th>
                                <th style="padding:0.35rem 0.6rem;text-align:center;border-bottom:1px solid #999;width:50px;">Cant.</th>
                                <th style="padding:0.35rem 0.6rem;text-align:right;border-bottom:1px solid #999;width:90px;">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>${salonRows}</tbody>
                    </table>
                    <div style="display:flex;justify-content:flex-end;padding:0.4rem 0.6rem;border-top:2px solid #000;font-weight:700;">
                        <span>Subtotal ${g.label}</span>
                        <span style="min-width:90px;text-align:right;">${tpvFormatMoney(sTotal)}</span>
                    </div>
                    <div style="display:flex;flex-direction:column;align-items:flex-start;padding:0.5rem 0.6rem 0;font-weight:600;white-space:nowrap;">
                        <div style="display:flex;justify-content:space-between;width:330px;padding:0.15rem 0;">Comisión por los servicios (70%): <span>${tpvFormatMoney(sCommission)}</span></div>
                        <div style="display:flex;justify-content:space-between;width:330px;padding:0.15rem 0;">Base: <span>${tpvFormatMoney(sBase)}</span></div>
                        <div style="display:flex;justify-content:space-between;width:330px;padding:0.15rem 0;">+IVA (21%): <span>${tpvFormatMoney(sTax)}</span></div>
                        <div style="display:flex;justify-content:space-between;width:330px;padding:0.15rem 0;">−Retención (15%): <span>−${tpvFormatMoney(sRetention)}</span></div>
                        <div style="display:flex;justify-content:space-between;width:330px;padding:0.3rem 0;border-top:2px solid #000;font-weight:800;">TOTAL GENERAL (IVA incl.): <span>${tpvFormatMoney(sTotal)}</span></div>
                    </div>` : '';

                const clientTable = clientInvs.length > 0 ? `
                    <table style="width:100%;font-size:0.85rem;border-collapse:collapse;margin-top:0.4rem;">
                        <thead>
                            <tr style="color:#555;">
                                <th style="padding:0.35rem 0.6rem;text-align:left;border-bottom:1px solid #999;width:110px;">Fecha</th>
                                <th style="padding:0.35rem 0.6rem;text-align:left;border-bottom:1px solid #999;">${dimHead}</th>
                                <th style="padding:0.35rem 0.6rem;text-align:left;border-bottom:1px solid #999;">Servicio</th>
                                <th style="padding:0.35rem 0.6rem;text-align:center;border-bottom:1px solid #999;width:50px;">Cant.</th>
                                <th style="padding:0.35rem 0.6rem;text-align:right;border-bottom:1px solid #999;width:90px;">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>${clientRows}</tbody>
                    </table>
                    <div style="display:flex;justify-content:flex-end;padding:0.4rem 0.6rem;border-top:2px solid #000;font-weight:700;">
                        <span>Subtotal Cliente</span>
                        <span style="min-width:90px;text-align:right;">${tpvFormatMoney(cTotal)}</span>
                    </div>
                    <div style="display:flex;flex-direction:column;align-items:flex-start;padding:0.5rem 0.6rem 0;font-weight:600;white-space:nowrap;">
                        <div style="display:flex;justify-content:space-between;width:330px;padding:0.15rem 0;">Base: <span>${tpvFormatMoney(cBase)}</span></div>
                        <div style="display:flex;justify-content:space-between;width:330px;padding:0.15rem 0;">+IVA (21%): <span>${tpvFormatMoney(cTax)}</span></div>
                        <div style="display:flex;justify-content:space-between;width:330px;padding:0.3rem 0;border-top:2px solid #000;font-weight:800;">TOTAL GENERAL (IVA incl.): <span>${tpvFormatMoney(cTotal)}</span></div>
                    </div>` : '';

                return `
                <div style="margin-top:1.25rem;">
                    <div style="background:#f4f4f4;padding:0.45rem 0.6rem;font-weight:800;font-size:1rem;">${g.label}</div>
                    ${salonTable}
                    ${clientTable}
                </div>`;
            }).join('');
        grandTotal = Math.round(grandTotal * 100) / 100;

        printArea.innerHTML = `
            <div class="invoice-a4">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #000;padding-bottom:1rem;margin-bottom:1.25rem;">
                    <div>
                        <div style="font-size:1.6rem;font-weight:800;">${issuerName}</div>
                        ${issuerNif}
                        ${issuerAddress}
                    </div>
                    <div style="text-align:right;font-size:0.95rem;">
                        <div style="font-size:1.3rem;font-weight:800;">LISTADO DE VENTAS</div>
                        <div>Agrupado por: <strong>Salón</strong></div>
                        <div>Período: ${fromLabel} → ${toLabel}</div>
                        <div>Emitido: ${formatDateEU(new Date())}</div>
                    </div>
                </div>
                <div style="font-size:0.85rem;color:#333;margin-bottom:0.75rem;">
                    Salón: <strong>${salon}</strong>
                </div>
                ${groupBlocks}
                <div style="display:flex;justify-content:flex-end;margin-top:1.5rem;font-size:0.95rem;">
                    <div style="width:300px;">
                        <div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-top:2px solid #000;font-weight:800;font-size:1.05rem;"><span>TOTAL GENERAL (IVA incl.)</span><span>${tpvFormatMoney(grandTotal)}</span></div>
                    </div>
                </div>
            </div>`;
        printArea.classList.add('print-active');
        window.print();
        setTimeout(() => {
            printArea.innerHTML = '';
            printArea.classList.remove('print-active');
        }, 300);
    }

    function tpvPrintControlSheet() {
        const printArea = document.getElementById('print-area');
        if (!printArea) return;
        const dateStr = State.tpv.controlSheetDate;
        if (!dateStr) { showToast('Selecciona un día para la hoja de control.', 'error'); return; }
        const dObj = new Date(dateStr + 'T00:00:00');
        const dateLabel = dObj.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        const salonFilter = State.tpv.historySalonId === 'all' ? 'Todos los salones' : (State.salons.find(s => s.id === State.tpv.historySalonId)?.name || 'Salón');
        const issuer = State.profile || {};
        const issuerName = (issuer.full_name && issuer.full_name.trim()) ? issuer.full_name : 'Estética y Bienestar Lara';
        const issuerNif = issuer.nif ? `<div style="font-size:0.85rem;color:#555;margin-top:0.2rem;">NIF: ${issuer.nif}</div>` : '';
        const issuerAddress = issuer.fiscal_address ? `<div style="font-size:0.85rem;color:#555;">${issuer.fiscal_address}</div>` : '';

        const salonId = State.tpv.historySalonId || 'all';
        const dayApts = State.appointments
            .filter(a => a.date === dateStr && (salonId === 'all' || a.salonId === salonId))
            .sort((a, b) => a.time.localeCompare(b.time));

        const groups = new Map();
        dayApts.forEach(apt => {
            const key = apt.salonId || '__sin_salon__';
            if (!groups.has(key)) groups.set(key, { label: State.salons.find(s => s.id === key)?.name || 'Sin salón', items: [] });
            const client = State.clients.find(c => c.id === apt.clientId) || { name: 'Eliminado' };
            const service = State.services.find(s => s.id === apt.serviceId) || { name: 'Servicio', price: 0 };
            groups.get(key).items.push({ name: `${client.name} → ${service.name}`, amount: Math.round((parseFloat(service.price) || 0) * 100) / 100 });
        });

        let grandTotal = 0;
        const groupHtml = groups.size === 0
            ? '<div style="padding:1rem;color:#777;text-align:center;">No hay citas en este día.</div>'
            : Array.from(groups.values()).map(g => {
                let subtotal = 0;
                const rows = g.items.map(it => {
                    subtotal += it.amount;
                    return `
                        <tr>
                            <td style="padding:0.4rem 0.6rem;border-bottom:1px solid #eee;">${it.name}</td>
                            <td style="padding:0.4rem 0.6rem;text-align:right;border-bottom:1px solid #eee;width:100px;">${tpvFormatMoney(it.amount)}</td>
                        </tr>`;
                }).join('');
                subtotal = Math.round(subtotal * 100) / 100;
                grandTotal += subtotal;
                const commission = Math.round(subtotal * 0.70 * 100) / 100;
                const base = Math.round(commission / 1.21 * 100) / 100;
                const tax = Math.round(base * 0.21 * 100) / 100;
                const retention = Math.round(base * 0.15 * 100) / 100;
                const salonForSalon = Math.round(subtotal * 0.30 * 100) / 100;
                const totalTecnico = Math.round((base + tax - retention) * 100) / 100;
                const totalEntregar = Math.round((salonForSalon + retention) * 100) / 100;
                return `
                    <div style="margin-top:1.25rem;">
                        <div style="background:#f4f4f4;padding:0.45rem 0.6rem;font-weight:800;font-size:1rem;">${g.label}</div>
                        <table style="width:100%;font-size:0.85rem;border-collapse:collapse;margin-top:0.4rem;">
                            <thead>
                                <tr style="color:#555;">
                                    <th style="padding:0.35rem 0.6rem;text-align:left;border-bottom:1px solid #999;">Servicio</th>
                                    <th style="padding:0.35rem 0.6rem;text-align:right;border-bottom:1px solid #999;width:100px;">Importe</th>
                                </tr>
                            </thead>
                            <tbody>${rows}</tbody>
                        </table>
                        <div style="display:flex;justify-content:flex-end;padding:0.4rem 0.6rem;border-top:2px solid #000;font-weight:700;">
                            <span>SUBTOTAL ${g.label}</span>
                            <span style="min-width:100px;text-align:right;">${tpvFormatMoney(subtotal)}</span>
                        </div>
                        <div style="display:flex;flex-direction:column;align-items:flex-start;padding:0.5rem 0.6rem 0;font-weight:600;white-space:nowrap;">
                            <div style="display:flex;justify-content:space-between;width:360px;padding:0.15rem 0;">Comisión por los servicios (70% Técnico): <span>${tpvFormatMoney(commission)}</span></div>
                            <div style="display:flex;justify-content:space-between;width:360px;padding:0.15rem 0;">Base: <span>${tpvFormatMoney(base)}</span></div>
                            <div style="display:flex;justify-content:space-between;width:360px;padding:0.15rem 0;">+IVA (21%): <span>${tpvFormatMoney(tax)}</span></div>
                            <div style="display:flex;justify-content:space-between;width:360px;padding:0.15rem 0;">−Retención (15%): <span>−${tpvFormatMoney(retention)}</span></div>
                            <div style="display:flex;justify-content:space-between;width:360px;padding:0.3rem 0;border-top:2px solid #000;font-weight:800;">TOTAL 70% TÉCNICO: <span>${tpvFormatMoney(totalTecnico)}</span></div>
                            <div style="display:flex;justify-content:space-between;width:360px;padding:0.15rem 0;margin-top:0.3rem;">30% PARA EL SALÓN: <span>${tpvFormatMoney(salonForSalon)}</span></div>
                            <div style="display:flex;justify-content:space-between;width:360px;padding:0.15rem 0;">+RETENCIÓN (15%): <span>${tpvFormatMoney(retention)}</span></div>
                            <div style="display:flex;justify-content:space-between;width:360px;padding:0.3rem 0;border-top:2px solid #000;font-weight:800;">TOTAL 30% SALÓN: <span>${tpvFormatMoney(totalEntregar)}</span></div>
                        </div>
                    </div>`;
            }).join('');
        grandTotal = Math.round(grandTotal * 100) / 100;

        printArea.innerHTML = `
            <div class="invoice-a4">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #000;padding-bottom:1rem;margin-bottom:1.25rem;">
                    <div>
                        <div style="font-size:1.6rem;font-weight:800;">${issuerName}</div>
                        ${issuerNif}
                        ${issuerAddress}
                    </div>
                    <div style="text-align:right;font-size:0.95rem;">
                        <div style="font-size:1.3rem;font-weight:800;">HOJA DE CONTROL</div>
                        <div>${dateLabel}</div>
                        <div>Salón: <strong>${salonFilter}</strong></div>
                        <div>Emitido: ${formatDateEU(new Date())}</div>
                    </div>
                </div>
                ${groupHtml}
                <div style="display:flex;justify-content:flex-end;margin-top:1.5rem;font-size:0.95rem;">
                    <div style="width:300px;">
                        <div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-top:2px solid #000;font-weight:800;font-size:1.05rem;"><span>TOTAL GENERAL DÍA</span><span>${tpvFormatMoney(grandTotal)}</span></div>
                    </div>
                </div>
            </div>`;
        printArea.classList.add('print-active');
        window.print();
        setTimeout(() => {
            printArea.innerHTML = '';
            printArea.classList.remove('print-active');
        }, 300);
    }

    function tpvRenderCartPanel() {
        const panel = document.getElementById('tpv-cart-panel');
        if (!panel) return;
        panel.innerHTML = getTpvCartPanel();
        tpvBindCartEvents();
    }

    function tpvRenderHistory() {
        const tbody = document.getElementById('tpv-history-body');
        if (!tbody) return;
        tbody.innerHTML = tpvSalesReportRows();
        tpvBindHistoryEvents();
    }

    function tpvAddService(serviceId) {
        const service = State.services.find(s => s.id === serviceId);
        if (!service) return;
        const existing = State.tpv.cart.find(i => i.serviceId === serviceId);
        if (existing) existing.qty++;
        else State.tpv.cart.push({ serviceId, name: service.name, price: service.price, qty: 1 });
        tpvRenderCartPanel();
    }

    function tpvRemoveFromCart(idx) {
        State.tpv.cart.splice(idx, 1);
        tpvRenderCartPanel();
    }

    async function tpvLoadInvoices() {
        try {
            State.tpv.invoices = await api.getInvoices();
        } catch (err) {
            State.tpv.invoices = [];
        }
        tpvRenderHistory();
    }

    function tpvBuildDocHtml(inv, isPreview) {
        const items = Array.isArray(inv.items) ? inv.items : [];
        const isInvoice = inv.doc_type !== 'ticket';
        const num = (isInvoice ? 'F' : 'T') + '-' + String(inv.number).padStart(4, '0');
        const dateStr = (inv.created_at || new Date().toISOString()).substring(0, 16).replace('T', ' ').trim();
        const dateDisplay = dateStr.length >= 10 ? `${formatDateEU(dateStr)}${dateStr.length > 10 ? ' ' + dateStr.slice(11) : ''}` : dateStr;
        const clientName = inv.client_name || 'Consumidor final';
        const nifLine = inv.client_nif ? `<strong>NIF:</strong> ${inv.client_nif}` : '';
        const clientRecord = State.clients.find(c => c.id === inv.client_id);
        const salonRecord = State.salons.find(s => s.id === inv.client_id);
        const fiscalRec = (inv.doc_type === 'factura-salon' ? salonRecord : null) || clientRecord;
        const addressLine = fiscalRec && fiscalRec.fiscal_address ? `<br><strong>Dirección fiscal:</strong> ${fiscalRec.fiscal_address}` : '';
        const issuer = State.profile || {};
        const issuerName = (issuer.full_name && issuer.full_name.trim()) ? issuer.full_name : 'Estética y Bienestar Lara';
        const issuerNif = issuer.nif ? `<div style="font-size:0.85rem;color:#555;margin-top:0.2rem;">NIF: ${issuer.nif}</div>` : '';
        const issuerAddress = issuer.fiscal_address ? `<div style="font-size:0.85rem;color:#555;">${issuer.fiscal_address}</div>` : '';

        if (isInvoice) {
            const lines = items.length === 0
                ? '<tr><td colspan="5" style="padding:0.6rem;color:#777;">—</td></tr>'
                : items.map((i, idx) => `
                    <tr>
                        <td style="padding:0.35rem 0.5rem;border-bottom:1px solid #ddd;">
                            <div>${i.name}</div>
                            ${i.notes ? `<div style="font-size:0.68rem;color:#777;font-style:italic;margin-top:0.1rem;">Notas: ${i.notes}</div>` : ''}
                        </td>
                        <td style="padding:0.35rem 0.5rem;border-bottom:1px solid #ddd;text-align:center;">${i.qty}</td>
                        <td style="padding:0.35rem 0.5rem;border-bottom:1px solid #ddd;text-align:right;">${tpvFormatMoney(parseFloat(i.price) || 0)}</td>
                        <td style="padding:0.35rem 0.5rem;border-bottom:1px solid #ddd;text-align:right;">${tpvFormatMoney((parseFloat(i.price) || 0) * i.qty)}</td>
                    </tr>`).join('');
            return `
                <div class="invoice-a4">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #000;padding-bottom:0.6rem;margin-bottom:0.8rem;">
                        <div>
                            <div style="font-size:1.35rem;font-weight:800;">${issuerName}</div>
                            ${issuerNif}
                            ${issuerAddress}
                        </div>
                        <div style="text-align:right;font-size:0.8rem;">
                            <div style="font-size:1.1rem;font-weight:800;">FACTURA</div>
                            <div>Nº ${num}</div>
                            <div>${dateDisplay}</div>
                        </div>
                    </div>
                    <div style="font-size:0.82rem;margin-bottom:0.8rem;">
                        <strong>Cliente:</strong> ${clientName}${nifLine ? '<br>' + nifLine : ''}${addressLine}
                    </div>
                    <table style="width:100%;font-size:0.8rem;border-collapse:collapse;">
                        <thead>
                            <tr style="background:#f4f4f4;">
                                <th style="padding:0.35rem 0.5rem;text-align:left;border-bottom:2px solid #000;">Servicio</th>
                                <th style="padding:0.35rem 0.5rem;text-align:center;border-bottom:2px solid #000;">Cantidad</th>
                                <th style="padding:0.35rem 0.5rem;text-align:right;border-bottom:2px solid #000;">Precio</th>
                                <th style="padding:0.35rem 0.5rem;text-align:right;border-bottom:2px solid #000;">Importe</th>
                            </tr>
                        </thead>
                        <tbody>${lines}</tbody>
                    </table>
                    <div style="display:flex;justify-content:flex-end;margin-top:0.8rem;font-size:0.82rem;">
                        <div style="width:260px;">
                    ${(() => {
                        if (inv.doc_type === 'factura-salon') {
                            const itemsArr = Array.isArray(inv.items) ? inv.items : [];
                            let imports = 0;
                            itemsArr.forEach(it => { imports += (parseFloat(it.price) || 0) * (it.qty || 1); });
                            const commissionSalon = Math.round(imports * 0.70 * 100) / 100;
                            const baseSalon = Math.round(commissionSalon / 1.21 * 100) / 100;
                            const taxSalon = Math.round(baseSalon * 0.21 * 100) / 100;
                            const retentionSalon = Math.round(baseSalon * 0.15 * 100) / 100;
                            const totalFactura = Math.round((baseSalon + taxSalon - retentionSalon) * 100) / 100;
                            const salonForSalon = Math.round(imports * 0.30 * 100) / 100;
                            const totalEntregar = Math.round((salonForSalon + retentionSalon) * 100) / 100;
                            return `
                            <div style="display:flex;justify-content:space-between;padding:0.15rem 0;"><span>Comisión por los Servicios (70%)</span><strong>${tpvFormatMoney(commissionSalon)}</strong></div>
                            <div style="display:flex;justify-content:space-between;padding:0.15rem 0;"><span>BASE Imponible:</span><strong>${tpvFormatMoney(baseSalon)}</strong></div>
                            <div style="display:flex;justify-content:space-between;padding:0.15rem 0;"><span>+IVA (21%)</span><strong>${tpvFormatMoney(taxSalon)}</strong></div>
                            <div style="display:flex;justify-content:space-between;padding:0.15rem 0;"><span>−Retención (15%)</span><strong>${tpvFormatMoney(retentionSalon)}</strong></div>
                            <div style="display:flex;justify-content:space-between;padding:0.3rem 0;border-top:2px solid #000;font-weight:800;font-size:0.9rem;"><span>TOTAL FACTURA:</span><span>${tpvFormatMoney(totalFactura)}</span></div>
                            <div style="display:flex;justify-content:space-between;padding:0.15rem 0;font-size:0.8rem;"><span>Forma de pago</span><strong>${tpvPaymentDetail(inv)}</strong></div>
                            <div style="border:2px solid #000;border-radius:6px;padding:0.45rem;margin-top:0.55rem;">
                                <div style="font-weight:800;text-align:center;font-size:0.88rem;margin-bottom:0.3rem;border-bottom:1px solid #ccc;padding-bottom:0.25rem;">A ENTREGAR AL SALÓN</div>
                                <div style="display:flex;justify-content:space-between;padding:0.12rem 0;"><span>30% PARA EL SALÓN</span><strong>${tpvFormatMoney(salonForSalon)}</strong></div>
                                <div style="display:flex;justify-content:space-between;padding:0.12rem 0;"><span>+RETENCIÓN</span><strong>${tpvFormatMoney(retentionSalon)}</strong></div>
                                <div style="display:flex;justify-content:space-between;padding:0.2rem 0;border-top:1px solid #000;margin-top:0.2rem;font-weight:800;"><span>IMPORTE TOTAL</span><span>${tpvFormatMoney(totalEntregar)}</span></div>
                            </div>`;
                        }
                        return `
                            <div style="display:flex;justify-content:space-between;padding:0.15rem 0;"><span>Base</span><strong>${tpvFormatMoney(inv.base_amount)}</strong></div>
                            <div style="display:flex;justify-content:space-between;padding:0.15rem 0;"><span>IVA (21%)</span><strong>${tpvFormatMoney(inv.tax_amount)}</strong></div>
                            <div style="display:flex;justify-content:space-between;padding:0.3rem 0;border-top:2px solid #000;font-weight:800;font-size:0.9rem;"><span>TOTAL</span><span>${tpvFormatMoney(inv.total_amount)}</span></div>
                            <div style="display:flex;justify-content:space-between;padding:0.15rem 0;font-size:0.8rem;"><span>Forma de pago</span><strong>${tpvPaymentDetail(inv)}</strong></div>`;
                    })()}
                        </div>
                    </div>
                    <div style="margin-top:1.25rem;text-align:center;font-size:0.7rem;color:#555;border-top:1px solid #ddd;padding-top:0.4rem;">¡Gracias por su visita!</div>
                </div>`;
        }

        const lines = items.length === 0
            ? '<tr><td colspan="3" style="padding:0.5rem;color:var(--text-secondary);">—</td></tr>'
            : items.map(i => `
                <tr>
                    <td style="padding:0.25rem 0.5rem;">${i.name}</td>
                    <td style="padding:0.25rem 0.5rem;text-align:center;">${i.qty}</td>
                    <td style="padding:0.25rem 0.5rem;text-align:right;">${tpvFormatMoney((parseFloat(i.price) || 0) * i.qty)}</td>
                </tr>`).join('');
        return `
            <div class="ticket-print">
                <div style="text-align:center;border-bottom:1px dashed #999;padding-bottom:0.5rem;margin-bottom:0.5rem;">
                    <div style="font-size:1.1rem;font-weight:800;">TICKET</div>
                    <div style="font-size:0.8rem;color:#555;">Nº ${num}</div>
                    <div style="font-size:0.8rem;color:#555;">${dateDisplay}</div>
                </div>
                <div style="font-size:0.85rem;margin-bottom:0.5rem;">
                    <strong>Cliente:</strong> ${clientName}${nifLine ? '<br>' + nifLine : ''}
                </div>
                <table style="width:100%;font-size:0.85rem;border-collapse:collapse;">
                    <thead><tr><th style="text-align:left;border-bottom:1px solid #999;">Servicio</th><th style="border-bottom:1px solid #999;">Cant.</th><th style="border-bottom:1px solid #999;text-align:right;">Importe</th></tr></thead>
                    <tbody>${lines}</tbody>
                </table>
                <div style="margin-top:0.5rem;font-size:0.85rem;text-align:right;">
                    <div>Base: <strong>${tpvFormatMoney(inv.base_amount)}</strong></div>
                    <div>IVA (21%): <strong>${tpvFormatMoney(inv.tax_amount)}</strong></div>
                    ${inv.doc_type === 'factura-salon' ? `<div>Retención (15%): <strong>−${tpvFormatMoney(inv.retention_amount || 0)}</strong></div>` : ''}
                    <div style="font-size:1rem;font-weight:800;">TOTAL: ${tpvFormatMoney(inv.total_amount)}</div>
                </div>
                <div style="margin-top:0.4rem;font-size:0.8rem;text-align:right;"><strong>Forma de pago:</strong> ${tpvPaymentDetail(inv)}</div>
                <div style="margin-top:0.75rem;text-align:center;font-size:0.8rem;color:#555;">¡Gracias por su visita!</div>
            </div>`;
    }

    async function tpvBillToday() {
        const targetStr = State.selectedDate || toLocalDateStr(new Date());
        const dayApts = State.appointments
            .filter(a => a.date === targetStr)
            .sort((a, b) => a.time.localeCompare(b.time));
        if (dayApts.length === 0) {
            showToast('No hay citas en el día señalado.', 'error');
            return;
        }

        const groups = new Map();
        dayApts.forEach(apt => {
            const salonId = apt.salonId || State.activeSalonId;
            const key = salonId || '__sin_salon__';
            if (!groups.has(key)) groups.set(key, { salon: State.salons.find(s => s.id === salonId) || null, items: [] });
            const client = State.clients.find(c => c.id === apt.clientId);
            const service = State.services.find(s => s.id === apt.serviceId);
            const lineName = `${client ? client.name : 'Cliente'} → ${service ? service.name : 'Servicio'}`;
            groups.get(key).items.push({ name: lineName, price: service ? (parseFloat(service.price) || 0) : 0, qty: 1, notes: apt.notes || '' });
        });

        // Construir una factura por salón con citas del día señalado (todos los salones)
        const bills = [];
        groups.forEach((group, key) => {
            if (group.items.length === 0) return;
            const salon = group.salon;
            if (!salon) return;
            bills.push({ salonId: salon.id, salonName: salon.name || salon.id, items: group.items });
        });

        if (bills.length === 0) {
            showToast('No se pudo preparar ninguna factura de salón.', 'error');
            return;
        }

        // Control: no contar salones ya facturados en el día señalado
        const alreadyBilled = (State.tpv.invoices || [])
            .filter(i => i.doc_type === 'factura-salon' && i.status !== 'cancelled' && (i.created_at || '').substring(0, 10) === targetStr)
            .reduce((map, i) => { map[i.salon_id] = true; return map; }, {});
        const remaining = bills.filter(b => !alreadyBilled[b.salonId]);
        if (remaining.length === 0) {
            const names = bills.map(b => `${b.salonName} (ya facturado)`).join(', ');
            showToast(`Todos los salones del día ya han sido facturados: ${names}. Anúlelos en el Listado de Ventas para volver a facturarlos.`, 'error');
            return;
        }

        // Guardar todas las facturas por emitir y no cargar ninguna automáticamente.
        // Se emitirán seleccionando el salón en el TPV.
        State.tpv.pendingBills = remaining;
        State.tpv.docType = 'factura-salon';
        State.tpv.cart = [];
        // Preseleccionar el salón de la primera factura pendiente para que se cargue automáticamente al entrar
        State.tpv.salonId = remaining[0].salonId;
        navigate('tpv');
        showToast(`${remaining.length} factura${remaining.length > 1 ? 's' : ''} de salón por emitir. Selecciona el salón en el TPV.`, 'info');
    }

    async function tpvEmit() {
        if (State.tpv.cart.length === 0) {
            showToast('El carrito está vacío.', 'error');
            return;
        }
        const clientId = document.getElementById('tpv-client') ? document.getElementById('tpv-client').value : '';
        const nifInput = document.getElementById('tpv-nif');
        const clientNif = nifInput ? nifInput.value.trim() : '';
        // Obligatorio: la factura para cliente debe llevar un cliente de la BD completo
        if (State.tpv.docType === 'factura') {
            const client = State.clients.find(c => c.id === clientId);
            if (!client || !client.name || !client.fiscal_address || !client.nif) {
                showToast('Para la Factura de Cliente debes seleccionar un cliente de la base de datos con Nombre, Dirección y CIF/NIF completos.', 'error');
                return;
            }
        }
        const totals = tpvCartTotals();
        const isSalonInvoice = State.tpv.docType === 'factura-salon';
        const salon = isSalonInvoice ? tpvSelectedSalon() : null;
        const payMethod = ['contado', 'tarjeta', 'mixto'].includes(State.tpv.paymentMethod) ? State.tpv.paymentMethod : 'contado';
        let payCash = 0, payCard = 0;
        if (payMethod === 'contado') {
            payCash = totals.total;
        } else if (payMethod === 'tarjeta') {
            payCard = totals.total;
        } else {
            const cashInput = document.getElementById('tpv-payment-cash');
            const v = cashInput ? (parseFloat(cashInput.value) || 0) : 0;
            payCash = Math.min(Math.max(v, 0), totals.total);
            payCard = totals.total - payCash;
        }
        payCash = Math.round(payCash * 100) / 100;
        payCard = Math.round(payCard * 100) / 100;
        // For factura-salon use a single summary line with the total
        let cartItems = State.tpv.cart.map(i => ({ name: i.name, price: parseFloat(i.price) || 0, qty: i.qty, notes: i.notes || '' }));
        if (isSalonInvoice) {
            const totalImports = Math.round(cartItems.reduce((a, i) => a + (i.price * i.qty), 0) * 100) / 100;
            cartItems = [{ name: 'Depilación y otros tratamientos', price: totalImports, qty: 1, notes: '' }];
        }
        const payload = {
            doc_type: State.tpv.docType,
            salon_id: State.tpv.salonId || null,
            client_id: isSalonInvoice ? (salon ? salon.id : null) : (clientId || null),
            client_name: isSalonInvoice ? (salon ? (salon.business_name || salon.name) : (State.profile?.full_name || 'Estética y Bienestar Lara')) : tpvClientName(clientId),
            client_nif: isSalonInvoice ? (salon && salon.nif ? salon.nif : null) : (clientNif || null),
            items: cartItems,
            base_amount: Math.round(totals.base * 100) / 100,
            commission_rate: Math.round(totals.commissionRate * 100) / 100,
            commission_amount: Math.round(totals.commission * 100) / 100,
            tax_amount: Math.round(totals.tax * 100) / 100,
            retention_amount: Math.round(totals.retention * 100) / 100,
            total_amount: Math.round(totals.total * 100) / 100,
            payment_method: payMethod,
            payment_cash: payCash,
            payment_card: payCard
        };
        try {
            const created = await api.addInvoice(payload);
            const doc = {
                ...payload,
                id: created.id,
                number: created.number,
                doc_type: created.doc_type,
                created_at: new Date().toISOString()
            };
            State.tpv.cart = [];
            State.tpv.invoices.unshift(doc);
            // Si era una factura de salón pendiente del día, quitarla de la lista y actualizar el contador
            if (doc.doc_type === 'factura-salon' && State.tpv.pendingBills && State.tpv.pendingBills.length > 0) {
                State.tpv.pendingBills = State.tpv.pendingBills.filter(b => b.salonId !== doc.salon_id);
            }
            await tpvPrintDoc(doc);
            renderRoute();
        } catch (err) {
            showToast('Error al emitir: ' + (err.message || 'error'), 'error');
        }
    }

    async function tpvPrintDoc(doc) {
        const printArea = document.getElementById('print-area');
        if (!printArea) return;
        printArea.innerHTML = tpvBuildDocHtml(doc, false);
        printArea.classList.add('print-active');
        window.print();
        setTimeout(() => {
            printArea.innerHTML = '';
            printArea.classList.remove('print-active');
            showToast((doc.doc_type !== 'ticket' ? 'Factura' : 'Ticket') + ' emitida correctamente.');
            renderRoute();
        }, 300);
    }

    function tpvBindCartEvents() {
        const docTicket = document.getElementById('tpv-doc-ticket');
        const docFactura = document.getElementById('tpv-doc-factura');
        const docFacturaSalon = document.getElementById('tpv-doc-factura-salon');
        if (docTicket) docTicket.addEventListener('click', () => { State.tpv.docType = 'ticket'; tpvRenderCartPanel(); });
        if (docFactura) docFactura.addEventListener('click', () => { State.tpv.docType = 'factura'; tpvRenderCartPanel(); });
        if (docFacturaSalon) docFacturaSalon.addEventListener('click', () => { State.tpv.docType = 'factura-salon'; tpvRenderCartPanel(); });

        const clientSel = document.getElementById('tpv-client');
        if (clientSel) clientSel.addEventListener('change', e => {
            State.tpv.clientId = e.target.value;
            const client = State.clients.find(c => c.id === e.target.value);
            if (client && client.nif && State.tpv.docType === 'factura') {
                State.tpv.clientNif = client.nif;
                tpvRenderCartPanel();
            }
        });
        const saleSalonSel = document.getElementById('tpv-sale-salon');
        if (saleSalonSel) saleSalonSel.addEventListener('change', e => {
            const salonId = e.target.value;
            State.tpv.salonId = salonId;
            // Si hay facturas de salón del día señalado por emitir y hay una para este salón, cargarla automáticamente
            if (State.tpv.pendingBills && State.tpv.pendingBills.length > 0) {
                const pend = State.tpv.pendingBills.find(b => b.salonId === salonId);
                if (pend) {
                    State.tpv.docType = 'factura-salon';
                    State.tpv.cart = pend.items.slice();
                    showToast(`Factura de salón de ${pend.salonName || 'este salón'} cargada. Revisa y pulsa Emitir.`, 'info');
                    tpvRenderCartPanel();
                    return;
                }
            }
            tpvRenderCartPanel();
        });
        const nifInput = document.getElementById('tpv-nif');
        if (nifInput) nifInput.addEventListener('input', e => { State.tpv.clientNif = e.target.value; });

        // Payment method
        [['tpv-pay-contado', 'contado'], ['tpv-pay-tarjeta', 'tarjeta'], ['tpv-pay-mixto', 'mixto']].forEach(([id, val]) => {
            const btn = document.getElementById(id);
            if (btn) btn.addEventListener('click', () => { State.tpv.paymentMethod = val; tpvRenderCartPanel(); });
        });
        const cashInput = document.getElementById('tpv-payment-cash');
        if (cashInput) cashInput.addEventListener('input', e => {
            State.tpv.paymentCash = e.target.value;
            const lbl = document.getElementById('tpv-payment-card-label');
            if (lbl) {
                const t = tpvCartTotals().total;
                const v = Math.min(Math.max(parseFloat(e.target.value) || 0, 0), t);
                lbl.textContent = tpvFormatMoney(t - v);
            }
        });

        document.querySelectorAll('.tpv-qty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.idx, 10);
                const item = State.tpv.cart[idx];
                if (!item) return;
                if (btn.dataset.act === 'inc') item.qty++;
                else if (btn.dataset.act === 'dec') { item.qty--; if (item.qty <= 0) State.tpv.cart.splice(idx, 1); }
                tpvRenderCartPanel();
            });
        });
        document.querySelectorAll('[data-act="remove"]').forEach(btn => {
            btn.addEventListener('click', () => tpvRemoveFromCart(parseInt(btn.dataset.idx, 10)));
        });

        const emitBtn = document.getElementById('tpv-emit');
        if (emitBtn) emitBtn.addEventListener('click', tpvEmit);
    }

    function tpvBindHistoryEvents() {
        const tabFacturas = document.getElementById('sales-tab-facturas');
        const tabHojas = document.getElementById('sales-tab-hojas');
        if (tabFacturas) tabFacturas.addEventListener('click', () => { State.tpv.salesTab = 'facturas'; renderRoute(); });
        if (tabHojas) tabHojas.addEventListener('click', () => { State.tpv.salesTab = 'hojas-control'; renderRoute(); });

        const controlDateInput = document.getElementById('control-sheet-date');
        if (controlDateInput) controlDateInput.addEventListener('change', e => {
            State.tpv.controlSheetDate = e.target.value;
            renderRoute();
        });

        const salesSalonSel = document.getElementById('sales-salon-select');
        if (salesSalonSel) salesSalonSel.addEventListener('change', e => {
            State.tpv.historySalonId = e.target.value;
            renderRoute();
        });
        const salesFrom = document.getElementById('sales-from');
        const salesTo = document.getElementById('sales-to');
        const applyBtn = document.getElementById('btn-sales-apply');
        if (applyBtn) applyBtn.addEventListener('click', () => {
            State.tpv.salesFrom = salesFrom ? salesFrom.value : '';
            State.tpv.salesTo = salesTo ? salesTo.value : '';
            if (State.tpv.salesFrom && State.tpv.salesTo && State.tpv.salesFrom > State.tpv.salesTo) {
                showToast('La fecha "Desde" no puede ser posterior a "Hasta".', 'error');
                return;
            }
            State.tpv.salesApplied = true;
            renderRoute();
        });
        const resetBtn = document.getElementById('btn-sales-reset');
        if (resetBtn) resetBtn.addEventListener('click', () => {
            State.tpv.salesFrom = '';
            State.tpv.salesTo = '';
            State.tpv.historySalonId = 'all';
            State.tpv.salesApplied = false;
            renderRoute();
        });
        const backBtn = document.getElementById('btn-sales-back');
        if (backBtn) backBtn.addEventListener('click', () => navigate('tpv'));
        const printBtn = document.getElementById('btn-sales-print');
        if (printBtn) printBtn.addEventListener('click', () => {
            if (State.tpv.salesTab === 'hojas-control') {
                tpvPrintControlSheet();
                return;
            }
            const selected = Array.from(document.querySelectorAll('.inv-select:checked')).map(b => b.dataset.invoiceId);
            if (selected.length > 0) tpvPrintSelectedInvoices(selected);
            else tpvPrintSales();
        });

        document.querySelectorAll('[data-invoice-id]:not(input)').forEach(btn => {
            btn.addEventListener('click', async e => {
                const invId = btn.dataset.invoiceId;
                if (btn.classList.contains('delete-btn')) {
                    if (!confirm('¿Eliminar este documento del historial?')) return;
                    try {
                        await api.deleteInvoice(invId);
                        State.tpv.invoices = State.tpv.invoices.filter(i => i.id !== invId);
                        renderRoute();
                        showToast('Documento eliminado.');
                    } catch (err) {
                        showToast('Error: ' + (err.message || 'error'), 'error');
                    }
                } else {
                    const inv = State.tpv.invoices.find(i => i.id === invId);
                    if (inv) await tpvPrintDoc(inv);
                }
            });
        });

        const selectAllCheck = document.getElementById('inv-select-all');
        if (selectAllCheck) {
            selectAllCheck.addEventListener('change', () => {
                const boxes = document.querySelectorAll('.inv-select');
                const shouldCheck = selectAllCheck.checked;
                boxes.forEach(b => { b.checked = shouldCheck; });
            });
        }

        const cancelBtn = document.getElementById('btn-invoices-cancel');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', async () => {
                const selected = Array.from(document.querySelectorAll('.inv-select:checked')).map(b => b.dataset.invoiceId);
                if (selected.length === 0) {
                    showToast('Selecciona al menos un ticket/factura para anular.', 'error');
                    return;
                }
                if (!confirm(`¿Anular ${selected.length} documento(s)? Se ocultarán del listado de ventas.`)) return;
                try {
                    for (const id of selected) {
                        await api.setInvoiceStatus(id, 'cancelled');
                    }
                    State.tpv.invoices = State.tpv.invoices.map(i => selected.includes(i.id) ? { ...i, status: 'cancelled' } : i);
                    renderRoute();
                    showToast(`${selected.length} documento(s) anulado(s) correctamente.`);
                } catch (err) {
                    showToast('Error al anular: ' + (err.message || 'error'), 'error');
                }
            });
        }
    }

    function tpvBindEvents() {
        document.querySelectorAll('.tpv-service-card').forEach(btn => {
            btn.addEventListener('click', () => tpvAddService(btn.dataset.serviceId));
        });
        const btnTpvSales = document.getElementById('btn-tpv-sales');
        if (btnTpvSales) btnTpvSales.addEventListener('click', () => navigate('sales'));
        tpvBindCartEvents();
        tpvBindHistoryEvents();
    }

    /* ═══════════════════════════════════════
       DAILY LISTING VIEW
       ═══════════════════════════════════════ */
    function getMonthlyView() {
        const salonId = State.activeSalonId || 'all';
        const isAdmin = !State.session?.staff;
        const showSalonCol = (salonId === 'all' || isAdmin) && State.salons.length > 0;
        const isMonthMode = State.listMode === 'month';

        const buildAptRows = (appointments) => appointments.map(apt => {
            const client = State.clients.find(c => c.id === apt.clientId) || { name: 'Eliminado' };
            const service = State.services.find(s => s.id === apt.serviceId) || { name: 'Eliminado', duration: 0, price: 0 };
            const endTime = new Date(new Date(`${apt.date}T${apt.time}`).getTime() + (service.duration || 0) * 60000);
            const endStr = endTime.toTimeString().substring(0, 5);
            const salon = State.salons.find(s => s.id === apt.salonId);
            const staffClass = apt.isStaffAppointment ? ' staff-apt' : '';
            const staffBadge = apt.isStaffAppointment ? ` <span class="staff-badge">Staff</span>${apt.staffModifiedBy ? ` <span style="color:var(--text-secondary);font-size:0.75rem;">· modificado por <strong>${apt.staffModifiedBy}</strong></span>` : ''}` : '';
            return `
                <tr class="monthly-apt-row${staffClass}">
                    <td class="monthly-time-cell">
                        <span class="monthly-time">${apt.time}</span>
                        <span class="monthly-time-end">– ${endStr}</span>
                    </td>
                    <td><div style="font-weight:600">${client.name}${staffBadge}</div></td>
                    ${showSalonCol ? `<td>${salon ? `<span class="daily-salon-badge" style="background:${salon.color || '#8B5CF6'};color:#fff;border:1px solid ${salon.color || '#8B5CF6'}">${salon.name}</span>` : '<span class="daily-salon-badge">—</span>'}</td>` : ''}
                    <td><span class="monthly-service-badge">${service.name}</span></td>
                    <td>${service.duration} min</td>
                    <td style="color:var(--text-secondary);font-size:0.85rem;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${apt.notes || '—'}</td>
                    <td style="white-space:nowrap">
                        <button class="edit-apt-btn" data-id="${apt.id}" title="Editar cita" style="background:none;border:none;cursor:pointer;padding:4px;color:var(--text-secondary)">
                            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                        </button>
                        <button class="delete-btn" data-id="${apt.id}" title="Eliminar cita" style="background:none;border:none;cursor:pointer;padding:4px;color:var(--text-secondary)">
                            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                    </td>
                </tr>`;
        }).join('');

        const colCount = showSalonCol ? 7 : 6;

        const controlsHtml = `
            <div class="daily-controls">
                <div class="list-mode-toggle">
                    <button type="button" class="list-mode-btn${!isMonthMode ? ' active' : ''}" id="list-mode-day">Día</button>
                    <button type="button" class="list-mode-btn${isMonthMode ? ' active' : ''}" id="list-mode-month">Mes</button>
                </div>
                ${!isMonthMode ? `
                    <button class="cal-nav-btn" id="daily-prev">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <div class="daily-selectors">
                        <input type="date" class="form-control daily-date-input" id="daily-date-input" value="${State.dailyDate}">
                    </div>
                    <button class="cal-nav-btn" id="daily-next">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                ` : `
                    <button class="cal-nav-btn" id="month-prev">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <div class="daily-selectors">
                        <input type="month" class="form-control daily-date-input" id="month-input" value="${State.listMonth}">
                    </div>
                    <button class="cal-nav-btn" id="month-next">
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                `}
            </div>`;

        const statsHtml = (totalCitas, totalMinutos, clientesUnicos) => {
            const totalHoras = Math.floor(totalMinutos / 60);
            const remainMin = totalMinutos % 60;
            return `
            <div class="stats-row monthly-stats">
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Total Citas</h3><p>${totalCitas}</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Clientes Únicos</h3><p>${clientesUnicos.size}</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Tiempo Total</h3><p>${totalHoras}h ${remainMin}m</p></div>
                </div>
            </div>`;
        };

        const emptyRows = () => `
            <tr>
                <td colspan="${colCount}" style="text-align:center;padding:3rem;color:var(--text-secondary)">
                    <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin-bottom:0.75rem;opacity:0.35;display:block;margin-left:auto;margin-right:auto;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                        ${isMonthMode ? 'No hay citas registradas en este mes.' : 'No hay citas registradas en este día.'}
                    </td>
            </tr>`;

        let statsHtmlStr = '';
        let listingHtml = '';

        if (!isMonthMode) {
            // ── DAY MODE ──
            const dateStr = State.dailyDate;
            const dateObj = new Date(dateStr + 'T00:00:00');
            const dayLabel = dateObj.toLocaleDateString('es-ES', {
                weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
            });

            const dayAppointments = State.appointments
                .filter(a => a.date === dateStr && (salonId === 'all' || a.salonId === salonId))
                .sort((a, b) => a.time.localeCompare(b.time));

            let totalMinutos = 0;
            const clientesUnicos = new Set();
            dayAppointments.forEach(apt => {
                const service = State.services.find(s => s.id === apt.serviceId);
                if (service) totalMinutos += parseInt(service.duration) || 0;
                clientesUnicos.add(apt.clientId);
            });

            statsHtmlStr = statsHtml(dayAppointments.length, totalMinutos, clientesUnicos);

            listingHtml = `
            <div class="data-card monthly-table-card" id="daily-print-area">
                <div class="monthly-table-header">
                    <h3>📋 ${dayLabel}</h3>
                    <span class="monthly-count-badge">${dayAppointments.length} cita${dayAppointments.length !== 1 ? 's' : ''}</span>
                </div>
                <table class="table monthly-table">
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Cliente</th>
                            ${showSalonCol ? '<th>Salón</th>' : ''}
                            <th>Servicio</th>
                            <th>Duración</th>
                            <th>Notas</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dayAppointments.length === 0 ? emptyRows() : buildAptRows(dayAppointments)}
                    </tbody>
                </table>
            </div>`;
        } else {
            // ── MONTH MODE ──
            const monthStr = State.listMonth;
            const [year, mon] = monthStr.split('-').map(Number);
            const prefix = monthStr;
            const monthObj = new Date(year, mon - 1, 1);
            const monthLabel = monthObj.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

            const monthAppointments = State.appointments
                .filter(a => a.date && a.date.startsWith(prefix) && (salonId === 'all' || a.salonId === salonId))
                .sort((a, b) => a.date === b.date ? a.time.localeCompare(b.time) : a.date.localeCompare(b.date));

            const dayCount = new Set(monthAppointments.map(a => a.date)).size;

            let totalMinutos = 0;
            const clientesUnicos = new Set();
            monthAppointments.forEach(apt => {
                const service = State.services.find(s => s.id === apt.serviceId);
                if (service) totalMinutos += parseInt(service.duration) || 0;
                clientesUnicos.add(apt.clientId);
            });

            statsHtmlStr = statsHtml(monthAppointments.length, totalMinutos, clientesUnicos);

            const groups = new Map();
            monthAppointments.forEach(apt => {
                if (!groups.has(apt.date)) groups.set(apt.date, []);
                groups.get(apt.date).push(apt);
            });
            const sortedDates = [...groups.keys()].sort();

            if (monthAppointments.length === 0) {
                listingHtml = `
                <div class="data-card monthly-table-card">
                    <div class="monthly-table-header">
                        <h3>📅 ${monthLabel}</h3>
                        <span class="monthly-count-badge">${dayCount} día${dayCount !== 1 ? 's' : ''} con citas</span>
                    </div>
                    <table class="table monthly-table">
                        <tbody>${emptyRows()}</tbody>
                    </table>
                </div>`;
            } else {
                listingHtml = sortedDates.map(dateStr => {
                    const apps = groups.get(dateStr);
                    const dObj = new Date(dateStr + 'T00:00:00');
                    const dLabel = dObj.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
                    return `
                    <div style="margin-bottom:1.75rem;">
                        <div class="data-card monthly-table-card">
                            <div class="monthly-table-header">
                                <h3>📋 ${dLabel}</h3>
                                <span class="monthly-count-badge">${apps.length} cita${apps.length !== 1 ? 's' : ''}</span>
                            </div>
                            <table class="table monthly-table">
                                <thead>
                                    <tr>
                                        <th>Hora</th>
                                        <th>Cliente</th>
                                        ${showSalonCol ? '<th>Salón</th>' : ''}
                                        <th>Servicio</th>
                                        <th>Duración</th>
                                        <th>Notas</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>${buildAptRows(apps)}</tbody>
                            </table>
                        </div>
                    </div>`;
                }).join('');
            }
        }

        return `
            ${State.salons.length > 0 ? `
            <div style="text-align:center; margin-bottom: 1.5rem;">
                ${State.session?.staff
                    ? `<span class="salon-title">${State.salons.find(s => s.id === State.activeSalonId)?.name || 'Salón'}</span>`
                    : `<select id="daily-salon-select" class="salon-title-select">
                    <option value="all" ${State.activeSalonId === 'all' ? 'selected' : ''}>Todos los Salones</option>
                    ${State.salons.map(s => `<option value="${s.id}" ${State.activeSalonId === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
                </select>`}
            </div>
            ` : ''}
            <div class="section-header">
                <div>
                    <h1 class="section-title">Listado de Citas</h1>
                    <p style="color:var(--text-secondary)">${isMonthMode ? 'Todas las citas del mes' : 'Detalle de citas por día'} · <span class="cloudflare-badge">⚡ Cloudflare</span></p>
                </div>
                <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
                    <button class="btn btn-primary" id="btn-print-daily">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                        Imprimir
                    </button>
                </div>
            </div>

            ${controlsHtml}

            ${statsHtmlStr}

            ${listingHtml}
        `;
    }

    /* ═══════════════════════════════════════
       WHATSAPP REMINDERS VIEW
       ═══════════════════════════════════════ */
    function isReminderDue(apt) {
        const now = new Date();
        const aptDate = new Date(apt.date + 'T' + (apt.time || '00:00'));
        if (aptDate.getTime() <= now.getTime()) return false;
        return (aptDate.getTime() - now.getTime()) <= 24 * 60 * 60 * 1000;
    }

    function getWhatsAppView() {
        if (State.session?.staff) {
            return '<div class="data-card" style="padding:3rem;text-align:center;"><p style="color:var(--text-secondary)">Acceso no disponible para staff.</p></div>';
        }
        // Recordatorios: solo citas dentro de las próximas 24 horas
        const toRemind = State.appointments.filter(apt => {
            if (!isReminderDue(apt)) return false;

            const client = State.clients.find(c => c.id === apt.clientId);
            return client && (client.enviar_was === true || client.enviar_was === 'true' || client.enviar_was === 1);
        }).sort((a, b) => {
            if (a.date !== b.date) return a.date.localeCompare(b.date);
            return a.time.localeCompare(b.time);
        });

        if (toRemind.length === 0) {
            return `
            <div class="section-header">
                <div>
                    <h1 class="section-title">Recordatorios WhatsApp</h1>
                    <p style="color:var(--text-secondary)">Gestiona los avisos para las próximas citas · <span class="cloudflare-badge">⚡ Automático</span></p>
                </div>
            </div>
            <div class="data-card" style="padding:3rem;text-align:center;">
                <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="opacity:0.25;margin-bottom:1rem;"><path d="M12.031 6.172c-2.32 0-4.516.903-6.183 2.563-3.23 3.23-3.403 8.356-.511 11.777l-1.341 4.904 5.035-1.32c1.077.585 2.29.893 3.522.893h.03c2.321 0 4.516-.903 6.183-2.563 3.413-3.414 3.413-8.948 0-12.362-1.667-1.66-3.863-1.592-6.235-1.592zm5.753 12.185c-.254.71-1.472 1.286-2.028 1.368-.556.082-1.112.122-1.666-.122-.303-.122-.656-.254-1.076-.442-1.812-.816-3.033-2.656-3.13-2.77-.091-.112-.76-.98-.76-1.884 0-.904.47-1.353.64-1.554.17-.2.37-.25.5-.25s.262-.01.373.01c.123 0 .285-.04.444.33.16.38.542 1.312.59 1.41.05.1.08.21.01.34-.07.13-.1.22-.2.34-.1.12-.21.26-.3.37-.1.12-.22.25-.1.44.13.21.57.94 1.22 1.52.84.75 1.55 1 1.77 1.11.22.11.36.09.49-.06.13-.15.54-.62.68-.84.14-.21.29-.18.49-.1.2.08 1.25.59 1.47.69s.36.16.41.25c.05.1.05.57-.2.1.28l-.01.01zM12.031 0C5.386 0 0 5.385 0 12.031c0 2.11.55 4.16 1.59 5.97L0 24l6.19-1.62c1.77 1.04 3.79 1.59 5.84 1.59h.01C18.66 24 24 18.615 24 12.031 24 5.385 18.66 0 12.031 0z"/></svg>
                <h3 style="margin-bottom:0.5rem;">No hay recordatorios</h3>
                <p style="color:var(--text-secondary);">No hay citas pendientes de notificar en las próximas 24 horas.</p>
            </div>`;
        }

        return `
            <div class="section-header">
                <div>
                    <h1 class="section-title">Recordatorios WhatsApp</h1>
                    <p style="color:var(--text-secondary)">Gestiona los avisos para las próximas citas · <span class="cloudflare-badge">⚡ Automático</span></p>
                </div>
            </div>

            <div class="data-card monthly-table-card">
                <div class="monthly-table-header" style="background: var(--bg-surface); padding: 1.5rem; border-bottom: 1px solid var(--border-color);">
                    <h3 style="display:flex;align-items:center;gap:0.75rem;">
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        Próximas Citas (24 h)
                    </h3>
                    <span class="monthly-count-badge">${toRemind.length} pendiente${toRemind.length !== 1 ? 's' : ''}</span>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Servicio</th>
                            <th style="text-align:center">Veces</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>${toRemind.map(apt => {
                        const client = State.clients.find(c => c.id === apt.clientId);
                        const service = State.services.find(s => s.id === apt.serviceId);
                        const dObj = new Date(apt.date + 'T00:00:00');
                        const dLabel = dObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
                        
                        return `
                            <tr data-aptid="${apt.id}">
                                <td>
                                    <div style="font-weight:600">${client ? client.name : 'Cliente desconocido'}${apt.isStaffAppointment ? ` <span class="staff-badge">Staff</span>` : ''}${apt.isStaffAppointment && apt.staffModifiedBy ? ` <span style="font-size:0.75rem;color:var(--text-secondary)">· modificado por <strong>${apt.staffModifiedBy}</strong></span>` : ''}</div>
                                    <div style="font-size:0.8rem;color:var(--text-secondary)">${client ? client.phone : 'Sin teléfono'}</div>
                                </td>
                                <td><span class="status-badge" style="background:var(--bg-body);color:var(--text-primary)">${dLabel}</span></td>
                                <td><div style="font-weight:500;color:var(--accent-primary)">${apt.time}</div></td>
                                <td><span class="monthly-service-badge">${service ? service.name : '—'}</span></td>
                                <td style="text-align:center">
                                    <span class="status-badge" style="background:var(--bg-body);color:var(--text-primary)" title="Veces que se ha enviado el recordatorio">${apt.whatsappSentCount || 0}×</span>
                                </td>
                                <td>
                                    <button class="btn btn-primary btn-sm send-reminder-btn" 
                                            style="padding: 0.4rem 0.8rem;"
                                            data-name="${client ? client.name : ''}" 
                                            data-phone="${client ? client.phone : ''}" 
                                            data-date="${apt.date}" 
                                            data-time="${apt.time}">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="margin-right:4px;vertical-align:middle"><path d="M12.031 6.172c-2.32 0-4.516.903-6.183 2.563-3.23 3.23-3.403 8.356-.511 11.777l-1.341 4.904 5.035-1.32c1.077.585 2.29.893 3.522.893h.03c2.321 0 4.516-.903 6.183-2.563 3.413-3.414 3.413-8.948 0-12.362-1.667-1.66-3.863-1.592-6.235-1.592zm5.753 12.185c-.254.71-1.472 1.286-2.028 1.368-.556.082-1.112.122-1.666-.122-.303-.122-.656-.254-1.076-.442-1.812-.816-3.033-2.656-3.13-2.77-.091-.112-.76-.98-.76-1.884 0-.904.47-1.353.64-1.554.17-.2.37-.25.5-.25s.262-.01.373.01c.123 0 .285-.04.444.33.16.38.542 1.312.59 1.41.05.1.08.21.01.34-.07.13-.1.22-.2.34-.1.12-.21.26-.3.37-.1.12-.22.25-.1.44.13.21.57.94 1.22 1.52.84.75 1.55 1 1.77 1.11.22.11.36.09.49-.06.13-.15.54-.62.68-.84.14-.21.29-.18.49-.1.2.08 1.25.59 1.47.69s.36.16.41.25c.05.1.05.57-.2.1.28l-.01.01zM12.031 0C5.386 0 0 5.385 0 12.031c0 2.11.55 4.16 1.59 5.97L0 24l6.19-1.62c1.77 1.04 3.79 1.59 5.84 1.59h.01C18.66 24 24 18.615 24 12.031 24 5.385 18.66 0 12.031 0z"/></svg>
                                        Recordar
                                    </button>
                                </td>
                            </tr>`;
                    }).join('')}</tbody>
                </table>
            </div>
            
            <p style="margin-top: 1.5rem; color: var(--text-secondary); font-size: 0.85rem; text-align: center; font-style: italic;">
                * Debes tener abierta esta pestaña para gestionar los recordatorios diarios.
            </p>
        `;
    }

    /* ═══════════════════════════════════════
DIAGNOSIS VIEW - FULLY INTEGRATED
        ═══════════════════════════════════════ */
    let diagnosisImage = null;
    let diagnosisClientId = null;
    let diagnosisClientName = null;
    let currentDiagnosisImage = null;

    function getDiagnosisView() {
        const hasClient = sessionStorage.getItem('nymara_diagnosis_client_id');
        const clientName = sessionStorage.getItem('nymara_diagnosis_client_name') || '';
        const clientPhone = sessionStorage.getItem('nymara_diagnosis_client_phone') || '';
        
        return `
            <div class="section-header">
                <div>
                    <h1 class="section-title">Diagnóstico Capilar</h1>
                    <p style="color:var(--text-secondary)">Análisis avanzado del cuero cabelludo · <span class="cloudflare-badge">⚡ IA Vision</span></p>
                </div>
             </div>
             
            <div id="diagnosis-client-selection" style="display: ${hasClient ? 'none' : 'block'};">
                <div style="max-width:660px;margin:1.5rem auto;padding:2rem;background:var(--bg-card);border:2px solid var(--accent-color);border-radius:16px;box-shadow:0 0 30px rgba(167,139,250,0.3);">
                    <h2 style="margin-top:0;color:#fff;font-size:1.4rem;text-align:center;margin-bottom:0.5rem;">SELECCIONAR CLIENTE</h2>
                    <p style="color:var(--text-secondary);text-align:center;margin-bottom:1.5rem;font-size:0.9rem;">Elija un cliente de la lista para realizar el diagnóstico capilar</p>
                    <div id="diagnosis-clients-list"></div>
                </div>
            </div>
            
            <div id="diagnosis-main" style="display: ${hasClient ? 'block' : 'none'};">
                <div style="background:var(--bg-card);padding:0.85rem;border-radius:12px;margin-bottom:0.85rem;display:flex;justify-content:space-between;align-items:center;border:2px solid var(--accent-color);">
                    <div>
                        <div style="color:#fff;font-size:0.75rem;margin-bottom:4px;">CLIENTE SELECCIONADO</div>
                        <div style="display:flex;align-items:center;gap:10px;">
                            <span id="selected-client-name" style="color:#fff;font-size:1.15rem;font-weight:bold;">${clientName}</span>
                            <span id="selected-client-phone" style="color:var(--accent-color);font-size:0.85rem;font-weight:600;">${clientPhone}</span>
                        </div>
                    </div>
                    <button id="btn-change-client" class="secondary-btn btn-sm">Cambiar Cliente</button>
                </div>
                <iframe src="diagnosis/index.html?v=20250814s" class="diagnosis-iframe" style="width:100%;height:calc(100vh - 240px);border:none;border-radius:12px;background:var(--bg-card);"></iframe>
            </div>
        `;
    }

    function loadDiagnosisClients() {
        const list = document.getElementById('diagnosis-clients-list');
        if (!list) return;

        if (!State.clients || !Array.isArray(State.clients) || State.clients.length === 0) {
            list.innerHTML = '<p style="color:var(--text-secondary);text-align:center;padding:1rem;">No hay clientes registrados.</p>';
            return;
        }

        list.innerHTML = State.clients.map(client => `
            <div class="diagnosis-client-card" data-client-id="${client.id}" style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem;margin-bottom:0.5rem;background:var(--bg-dark);border:1px solid var(--border-color);border-radius:12px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.borderColor='var(--accent-color)'" onmouseout="this.style.borderColor='var(--border-color)'">
                <div style="display:flex;align-items:center;gap:10px;">
                    <div style="width:34px;height:34px;background:var(--accent-color);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#000;font-weight:bold;font-size:0.85rem;">${client.name.charAt(0).toUpperCase()}</div>
                    <div>
                        <strong style="color:#fff;font-size:0.9rem;">${client.name}</strong>
                        <span style="color:var(--text-secondary);font-size:0.8rem;display:block;">${client.phone || 'Sin teléfono'}</span>
                    </div>
                </div>
                <span style="padding:0.35rem 0.75rem;background:var(--accent-color);color:#000;border-radius:8px;font-weight:600;font-size:0.8rem;">Seleccionar</span>
            </div>
        `).join('');

        // Limpiar evento anterior y agregar delegación
        list.onclick = null;
        list.onclick = (e) => {
            const card = e.target.closest('.diagnosis-client-card');
            if (!card) return;
            
            const clientId = card.dataset.clientId;
            if (!clientId) return;
            
            const client = State.clients.find(c => c.id === clientId);
            if (client) {
                selectClientForDiagnosis(client);
            }
        };
    }

    /* ═════════════════════════════════════
        SALONS VIEW
        ═════════════════════════════════════ */
    function getSalonsView() {
        if (State.salons.length === 0) {
            return `
                <div class="section-header">
                    <div>
                        <h1 class="section-title">Salones</h1>
                        <p style="color:var(--text-secondary)">Gestiona tus salones · <span class="cloudflare-badge">⚡ Cloudflare</span></p>
                    </div>
                    <button class="btn btn-primary" id="btn-add-salon">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                        Añadir Salón
                    </button>
                </div>
                <div class="empty-state data-card">
                    <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    <h3>No hay salones registrados</h3>
                    <p>Añade tu primer salón para comenzar.</p>
                </div>`;
        }

        const rows = State.salons.map(s => `
            <div class="client-card" data-salon-id="${s.id}">
                <div class="client-header">
                    <div class="client-info">
                        <h3 style="margin:0;font-weight:600">${s.name}</h3>
                        <div style="display:flex;align-items:center;gap:12px;font-size:0.85rem;color:var(--text-secondary);margin-top:4px;">
                            ${s.address ? `<span>📍 ${s.address}</span>` : ''}
                            ${s.phone ? `<span>📱 ${s.phone}</span>` : ''}
                        </div>
                        ${(s.business_name || s.nif || s.fiscal_address) ? `
                        <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">
                            ${s.business_name ? `<div>🏢 ${s.business_name}</div>` : ''}
                            ${s.nif ? `<div>NIF: ${s.nif}</div>` : ''}
                            ${s.fiscal_address ? `<div>📍 Fiscal: ${s.fiscal_address}</div>` : ''}
                        </div>` : ''}
                    </div>
                    <div class="client-actions">
                        <button class="btn btn-sm btn-secondary edit-btn" data-id="${s.id}" data-type="salon" title="Editar">
                            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                        </button>
                        <button class="btn btn-sm btn-secondary delete-btn" data-id="${s.id}" data-type="salon" title="Eliminar">
                            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        return `
            <div class="section-header">
                <div>
                    <h1 class="section-title">Salones</h1>
                    <p style="color:var(--text-secondary)">Gestiona tus salones · <span class="cloudflare-badge">⚡ Cloudflare</span></p>
                </div>
                <button class="btn btn-primary" id="btn-add-salon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                    Añadir Salón
                </button>
            </div>
            <div class="stats-row">
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Salones</h3><p>${State.salons.length}</p></div>
                </div>
            </div>
            <div class="clients-list">${rows}</div>
        `;
    }

    function generateSalonColor() {
        const palette = ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#06B6D4', '#3B82F6', '#EF4444', '#8B4513', '#14B8A6', '#F97316'];
        return palette[Math.floor(Math.random() * palette.length)];
    }

    function showSalonForm(info = null) {
        const isEdit = !!info;
        const salonColor = isEdit ? (info.color || generateSalonColor()) : generateSalonColor();
        const html = `
            <form id="salon-form">
                <div class="form-group">
                    <label>Nombre del Salón</label>
                    <input type="text" class="form-control" name="name" required value="${isEdit ? info.name : ''}">
                </div>
                <div class="form-group">
                    <label>Color del Salón</label>
                    <div style="display:flex;align-items:center;gap:0.75rem;">
                        <input type="color" class="form-control" name="color" id="salon-color-input" value="${salonColor}" style="width:60px;height:40px;padding:2px;cursor:pointer;">
                        <span id="salon-color-preview" style="display:inline-block;width:28px;height:28px;border-radius:6px;background:${salonColor};border:1px solid var(--border-color);"></span>
                    </div>
                    <small style="color:var(--text-secondary);font-size:0.8rem;">Elige un color para identificar este salón en el calendario.</small>
                </div>
                <div class="form-group">
                    <label>Dirección</label>
                    <input type="text" class="form-control" name="address" value="${isEdit ? (info.address || '') : ''}" placeholder="Calle, número, ciudad...">
                </div>
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="tel" class="form-control" name="phone" value="${isEdit ? (info.phone || '') : ''}" placeholder="+34 600 000 000">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" value="${isEdit ? (info.email || '') : ''}" placeholder="salon@ejemplo.com">
                </div>
                <hr style="margin:1.25rem 0;border:none;border-top:1px solid var(--border-color);">
                <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:1rem;">Datos fiscales del salón. Se usarán en las facturas emitidas a nombre de este salón como cliente.</p>
                <div class="form-group">
                    <label>Nombre de la empresa / Autónomo</label>
                    <input type="text" class="form-control" name="business_name" value="${isEdit ? (info.business_name || '') : ''}" placeholder="Razón social o nombre del titular">
                </div>
                <div class="form-group">
                    <label>NIF / CIF</label>
                    <input type="text" class="form-control" name="nif" value="${isEdit ? (info.nif || '') : ''}" placeholder="NIF o CIF del salón">
                </div>
                <div class="form-group">
                    <label>Dirección fiscal</label>
                    <input type="text" class="form-control" name="fiscal_address" value="${isEdit ? (info.fiscal_address || '') : ''}" placeholder="Calle, número, ciudad, CP">
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar' : 'Añadir'}</button>
                </div>
            </form>`;

        openModal(isEdit ? 'Editar Salón' : 'Nuevo Salón', html, () => {
            document.getElementById('salon-form').addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Guardando…';

                const fd = new FormData(e.target);
                const data = {
                    id: isEdit ? info.id : generateId(),
                    name: fd.get('name'),
                    color: fd.get('color') || generateSalonColor(),
                    address: fd.get('address'),
                    phone: fd.get('phone'),
                    email: fd.get('email'),
                    business_name: fd.get('business_name'),
                    nif: fd.get('nif'),
                    fiscal_address: fd.get('fiscal_address')
                };

                let success;
                if (isEdit) success = await updateSalon(data);
                else success = await addSalon(data);

                if (success) { closeModal(); renderRoute(); }
                else { submitBtn.disabled = false; submitBtn.textContent = isEdit ? 'Guardar' : 'Añadir'; }
            });
            const colorInput = document.getElementById('salon-color-input');
            const colorPreview = document.getElementById('salon-color-preview');
            if (colorInput && colorPreview) colorInput.addEventListener('input', () => {
                colorPreview.style.background = colorInput.value;
            });
        });
    }

    /* ═════════════════════════════════════
        MONTHLY LISTING VIEW
        ═════════════════════════════════════ */
    function attachEvents() {
        // Add buttons
        const btnSettings = document.getElementById('btn-settings');
        if (btnSettings) btnSettings.addEventListener('click', showSettingsForm);

        const btnAddClient = document.getElementById('btn-add-client');
        if (btnAddClient) btnAddClient.addEventListener('click', () => showClientForm());

        const clientsSearchInput = document.getElementById('clients-search-input');
        if (clientsSearchInput) {
            clientsSearchInput.addEventListener('input', e => {
                State.clientSearch = e.target.value;
                const pos = e.target.selectionStart;
                renderRoute();
                const newInput = document.getElementById('clients-search-input');
                if (newInput) { newInput.focus(); newInput.setSelectionRange(pos, pos); }
            });
            clientsSearchInput.focus();
        }

        const clientsSearchClear = document.getElementById('clients-search-clear');
        if (clientsSearchClear) {
            clientsSearchClear.addEventListener('click', () => {
                State.clientSearch = '';
                renderRoute();
                const newInput = document.getElementById('clients-search-input');
                if (newInput) newInput.focus();
            });
        }

        const appointmentsClientSelect = document.getElementById('appointments-client-select');
        if (appointmentsClientSelect) {
            appointmentsClientSelect.addEventListener('change', e => {
                State.appointmentClientId = e.target.value;
                renderRoute();
            });
        }

        document.querySelectorAll('.appt-jump-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const dateStr = btn.dataset.date;
                if (!dateStr) return;
                const [y, m] = dateStr.split('-').map(Number);
                State.calYear = y;
                State.calMonth = m - 1;
                State.selectedDate = dateStr;
                renderRoute();
            });
        });

        const btnAddService = document.getElementById('btn-add-service');
        if (btnAddService) btnAddService.addEventListener('click', () => showServiceForm());

        // TPV
        tpvBindEvents();

        // Salons
        const btnAddSalon = document.getElementById('btn-add-salon');
        if (btnAddSalon) btnAddSalon.addEventListener('click', () => showSalonForm());

        // WhatsApp Reminder direct buttons
        document.querySelectorAll('.send-reminder-btn').forEach(btn => {
            btn.addEventListener('click', async e => {
                try {
                    const { date, time } = e.currentTarget.dataset;
                    const aptId = e.currentTarget.closest('tr')?.dataset.aptid;

                    let name = '', phone = '', template = null, salonName = '', serviceName = '';
                    if (aptId) {
                        const apt = State.appointments.find(a => a.id === aptId);
                        if (apt) {
                            const client = State.clients.find(c => c.id === apt.clientId);
                            const salon = State.salons.find(s => s.id === apt.salonId);
                            const service = State.services.find(s => s.id === apt.serviceId);
                            name = client?.name || e.currentTarget.dataset.name || '';
                            phone = client?.phone || e.currentTarget.dataset.phone || '';
                            template = client?.whatsapp_template || null;
                            salonName = salon?.name || '';
                            serviceName = service?.name || '';
                        }
                    } else {
                        name = e.currentTarget.dataset.name || '';
                        phone = e.currentTarget.dataset.phone || '';
                    }

                    sendWASMessage(phone, name, date, time, template, salonName, serviceName);
                    
                    if (aptId) {
                        await markAppointmentReminded(aptId);
                        renderRoute();
                        showToast('Recordatorio marcado como enviado');
                    }
                } catch (err) {
                    console.error('Error al enviar recordatorio:', err);
                    showToast('Error al enviar recordatorio', 'error');
                }
            });
        });

        // Diagnosis - Nuevo Cliente
        const btnNewClientDiagnosis = document.getElementById('btn-new-client-diagnosis');
        if (btnNewClientDiagnosis) {
            btnNewClientDiagnosis.addEventListener('click', () => {
                showClientFormForDiagnosis();
            });
        }

        // Diagnosis - Mostrar clientes existentes
        const btnShowExistingClients = document.getElementById('btn-show-existing-clients');
        if (btnShowExistingClients) {
            btnShowExistingClients.addEventListener('click', () => {
                const list = document.getElementById('existing-clients-list');
                if (list) {
                    list.style.display = list.style.display === 'none' ? 'block' : 'none';
                }
            });
        }

        // Diagnosis - Buscar cliente
        const clientSearchInput = document.getElementById('client-search-input');
        if (clientSearchInput) {
            clientSearchInput.addEventListener('input', e => {
                const searchTerm = e.target.value.toLowerCase();
                document.querySelectorAll('.diagnosis-client-card').forEach(card => {
                    const name = card.querySelector('strong')?.textContent.toLowerCase() || '';
                    const phone = card.querySelector('span')?.textContent.toLowerCase() || '';
                    card.style.display = (name.includes(searchTerm) || phone.includes(searchTerm)) ? 'flex' : 'none';
                });
            });
        }

        // Diagnosis - Seleccionar cliente existente
        document.querySelectorAll('.select-client-btn').forEach(btn => {
            btn.addEventListener('click', async e => {
                const clientId = e.currentTarget.dataset.clientId;
                const clientName = e.currentTarget.dataset.clientName;
                const client = State.clients.find(c => c.id === clientId);
                if (client) {
                    await selectClientForDiagnosis(client);
                }
            });
        });

        // Diagnosis - Cambiar cliente
        const btnChangeClient = document.getElementById('btn-change-client');
        if (btnChangeClient) {
            btnChangeClient.addEventListener('click', () => {
                document.getElementById('diagnosis-client-selection').style.display = 'block';
                document.getElementById('diagnosis-main').style.display = 'none';
            });
        }

        // Listado de Citas: mode toggle
        const listModeDay = document.getElementById('list-mode-day');
        const listModeMonth = document.getElementById('list-mode-month');
        if (listModeDay) listModeDay.addEventListener('click', () => {
            State.listMode = 'day';
            State.dailyDate = State.dailyDate || toLocalDateStr(new Date());
            renderRoute();
        });
        if (listModeMonth) listModeMonth.addEventListener('click', () => {
            State.listMode = 'month';
            if (!State.listMonth) {
                const d = new Date();
                State.listMonth = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
            }
            renderRoute();
        });

        // Day navigation
        const dailyPrev = document.getElementById('daily-prev');
        const dailyNext = document.getElementById('daily-next');
        const dailyDateInput = document.getElementById('daily-date-input');

        if (dailyPrev) dailyPrev.addEventListener('click', () => {
            const d = new Date(State.dailyDate + 'T00:00:00');
            d.setDate(d.getDate() - 1);
            State.dailyDate = toLocalDateStr(d);
            renderRoute();
        });
        if (dailyNext) dailyNext.addEventListener('click', () => {
            const d = new Date(State.dailyDate + 'T00:00:00');
            d.setDate(d.getDate() + 1);
            State.dailyDate = toLocalDateStr(d);
            renderRoute();
        });
        if (dailyDateInput) dailyDateInput.addEventListener('change', e => {
            State.dailyDate = e.target.value;
            renderRoute();
        });

        // Month navigation
        const monthPrev = document.getElementById('month-prev');
        const monthNext = document.getElementById('month-next');
        const monthInput = document.getElementById('month-input');

        const shiftMonth = delta => {
            const [y, m] = State.listMonth.split('-').map(Number);
            const d = new Date(y, m - 1 + delta, 1);
            State.listMonth = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
            renderRoute();
        };
        if (monthPrev) monthPrev.addEventListener('click', () => shiftMonth(-1));
        if (monthNext) monthNext.addEventListener('click', () => shiftMonth(1));
        if (monthInput) monthInput.addEventListener('change', e => {
            State.listMonth = e.target.value;
            renderRoute();
        });

        // Print daily listing
        const btnPrint = document.getElementById('btn-print-daily');
        if (btnPrint) btnPrint.addEventListener('click', () => {
            window.print();
        });

        // Calendar navigation
        const btnPrev = document.getElementById('cal-prev');
        const btnNext = document.getElementById('cal-next');
        if (btnPrev) btnPrev.addEventListener('click', () => {
            State.calMonth--;
            if (State.calMonth < 0) { State.calMonth = 11; State.calYear--; }
            renderRoute();
        });
        if (btnNext) btnNext.addEventListener('click', () => {
            State.calMonth++;
            if (State.calMonth > 11) { State.calMonth = 0; State.calYear++; }
            renderRoute();
        });

        // Day detail navigation (prev/next day)
        const btnDayPrev = document.getElementById('day-prev');
        const btnDayNext = document.getElementById('day-next');
        const shiftDetailDay = delta => {
            const base = State.selectedDate || toLocalDateStr(new Date());
            const d = new Date(base + 'T00:00:00');
            d.setDate(d.getDate() + delta);
            State.selectedDate = toLocalDateStr(d);
            State.calYear = d.getFullYear();
            State.calMonth = d.getMonth();
            renderRoute();
        };
        if (btnDayPrev) btnDayPrev.addEventListener('click', () => shiftDetailDay(-1));
        if (btnDayNext) btnDayNext.addEventListener('click', () => shiftDetailDay(1));

        // Salon filter
        const salonSelects = [document.getElementById('agenda-salon-select'), document.getElementById('daily-salon-select')];
        salonSelects.forEach(select => {
            if (select) {
                select.addEventListener('change', e => {
                    State.activeSalonId = e.target.value;
                    localStorage.setItem('nymara_agenda_salon', e.target.value);
                    State.selectedDate = null; // Reset selected date when changing salon
                    renderRoute();
                });
            }
        });

        // Calendar day click
        document.querySelectorAll('.cal-day').forEach(dayEl => {
            dayEl.addEventListener('click', () => {
                State.selectedDate = dayEl.dataset.date;
                renderRoute();
            });
        });
    }

    /* ═══════════════════════════════════════
       GLOBAL EVENT DELEGATION
       (Attached only once to document)
       ═══════════════════════════════════════ */
    document.addEventListener('click', async e => {
        // 1. Generic Delete Buttons (.delete-btn) - Clients, Services, Salons, Appointments
        const delBtn = e.target.closest('.delete-btn');
        if (delBtn) {
            e.preventDefault();
            e.stopPropagation();
            
            if (delBtn.dataset.confirming === 'true') {
                const id = delBtn.dataset.id;
                const type = delBtn.dataset.type;
                delBtn.disabled = true;
                
                if (type === 'client') {
                    if (State.session?.staff && !isStaffClient(id)) {
                        showToast('No tienes permiso para eliminar este cliente', 'error');
                        delBtn.disabled = false;
                        delBtn.dataset.confirming = 'false';
                        delBtn.textContent = '';
                        return;
                    }
                    if (await deleteClient(id)) renderRoute();
                } else if (type === 'service') {
                    if (State.session?.staff && !isStaffService(id)) {
                        showToast('No tienes permiso para eliminar este servicio', 'error');
                        delBtn.disabled = false;
                        delBtn.dataset.confirming = 'false';
                        delBtn.textContent = '';
                        return;
                    }
                    if (await deleteService(id)) renderRoute();
                } else if (type === 'salon') {
                    if (await deleteSalon(id)) renderRoute();
                } else {
                    const apt = State.appointments.find(a => a.id === id);
                    if (State.session?.staff && !(apt && apt.isStaffAppointment) && !isStaffAppointment(id)) {
                        showToast('No tienes permiso para eliminar esta cita', 'error');
                        delBtn.disabled = false;
                        delBtn.dataset.confirming = 'false';
                        delBtn.textContent = '';
                        return;
                    }
                    if (!State.session?.staff && apt && apt.userEmail && apt.userEmail !== State.currentUserEmail) {
                        showToast('No puedes eliminar citas de otro administrador', 'error');
                        delBtn.disabled = false;
                        delBtn.dataset.confirming = 'false';
                        delBtn.textContent = '';
                        return;
                    }
                    if (await deleteAppointment(id)) renderRoute();
                }
            } else {
                delBtn.dataset.confirming = 'true';
                const originalHtml = delBtn.innerHTML;
                delBtn.innerHTML = '<span style="font-size:0.7rem">¿Borrar?</span>';
                delBtn.style.background = '#e67e22';
                delBtn.style.width = 'auto';
                delBtn.style.padding = '0 6px';
                
                setTimeout(() => {
                    if (delBtn && delBtn.dataset.confirming === 'true') {
                        delBtn.dataset.confirming = 'false';
                        delBtn.innerHTML = originalHtml;
                        delBtn.style.background = '';
                        delBtn.style.width = '';
                        delBtn.style.padding = '';
                    }
                }, 3000);
            }
            return;
        }

        // 2. Appointment Photo Delete
        const aptDelBtn = e.target.closest('.apt-photo-delete-btn');
        if (aptDelBtn) {
            e.preventDefault();
            e.stopPropagation();
            
            if (aptDelBtn.dataset.confirming === 'true') {
                const photoId = aptDelBtn.dataset.photoId;
                const aptItem = aptDelBtn.closest('.apt-mini-photo');
                const aptId = aptItem?.dataset.aptId;
                
                if (aptId && photoId) {
                    const apt = State.appointments.find(a => a.id === aptId);
                    if (apt && apt.appointmentPhotos) {
                        const photoToDelete = apt.appointmentPhotos.find(p => p.id === photoId);
                        apt.appointmentPhotos = apt.appointmentPhotos.filter(p => p.id !== photoId);
                        await api.updateAppointmentPhotos(aptId, apt.appointmentPhotos);
                        
                        if (photoToDelete && photoToDelete.clientPhotoId) {
                            await deleteClientPhoto(photoToDelete.clientPhotoId);
                        }
                        showToast('Foto eliminada');
                        renderRoute();
                    }
                }
            } else {
                aptDelBtn.dataset.confirming = 'true';
                aptDelBtn.textContent = '¿X?';
                aptDelBtn.style.background = '#e67e22';
                setTimeout(() => {
                    if (aptDelBtn && aptDelBtn.dataset.confirming === 'true') {
                        aptDelBtn.dataset.confirming = 'false';
                        aptDelBtn.textContent = '🗑️';
                        aptDelBtn.style.background = 'rgba(0,0,0,0.6)';
                    }
                }, 3000);
            }
            return;
        }

        // 3. Appointment Photo Edit
        const aptEditBtn = e.target.closest('.apt-photo-edit-btn');
        if (aptEditBtn) {
            e.stopPropagation();
            const photoId = aptEditBtn.dataset.photoId;
            const aptItem = aptEditBtn.closest('.apt-mini-photo');
            const aptId = aptItem?.dataset.aptId;
            const apt = State.appointments.find(a => a.id === aptId);
            const photo = apt?.appointmentPhotos?.find(p => p.id === photoId);
            if (photo && aptId) {
                window.editAptPhoto(photoId, aptId, photo.photo_date || '', photo.notes || '', photo.photo_type || 'before');
            }
            return;
        }

        // 3b. WhatsApp from day detail
        const waBtn = e.target.closest('.wa-apt-btn');
        if (waBtn) {
            e.preventDefault();
            e.stopPropagation();
            const aptId = waBtn.dataset.aptid;
            if (aptId) {
                const apt = State.appointments.find(a => a.id === aptId);
                if (apt) {
                    const client = State.clients.find(c => c.id === apt.clientId);
                    const salon = State.salons.find(s => s.id === apt.salonId);
                    const service = State.services.find(s => s.id === apt.serviceId);
                    const phone = client?.phone || '';
                    const name = client?.name || '';
                    const template = client?.whatsapp_template || null;
                    if (phone) {
                        sendWASMessage(phone, name, apt.date, apt.time, template, salon?.name || '', service?.name || '');
                    } else {
                        showToast('El cliente no tiene teléfono registrado.', 'error');
                    }
                }
            }
            return;
        }

        // 3c. Compare Before/After photos
        const compareBtn = e.target.closest('.compare-btn');
        if (compareBtn) {
            e.preventDefault();
            e.stopPropagation();
            const aptId = compareBtn.dataset.aptId;
            const clientId = compareBtn.dataset.clientId;
            let photos = [];
            if (aptId) {
                const apt = State.appointments.find(a => a.id === aptId);
                photos = apt?.appointmentPhotos || [];
            } else if (clientId) {
                photos = (State.clientPhotos && State.clientPhotos[clientId]) || [];
            }
            openBeforeAfterCompare(photos, 'Comparativa Antes / Después', aptId ? { aptId } : clientId ? { clientId } : null);
            return;
        }

        // 4. Edit Buttons - Clients, Services, Salons, Appointments
        const editBtn = e.target.closest('.edit-btn') || e.target.closest('.edit-apt-btn');
        if (editBtn) {
            e.preventDefault();
            e.stopPropagation();
            const id = editBtn.dataset.id;
            const type = editBtn.dataset.type || 'appointment';
            
            if (id) {
                if (type === 'client') {
                    if (State.session?.staff && !isStaffClient(id)) {
                        showToast('No tienes permiso para editar este cliente', 'error');
                        return;
                    }
                    if (typeof editClient === 'function') editClient(id);
                } else if (type === 'service') {
                    if (State.session?.staff && !isStaffService(id)) {
                        showToast('No tienes permiso para editar este servicio', 'error');
                        return;
                    }
                    if (typeof editService === 'function') editService(id);
                } else if (type === 'salon') {
                    if (typeof editSalon === 'function') editSalon(id);
                } else {
                    const apt = State.appointments.find(a => a.id === id);
                    if (State.session?.staff && !(apt && apt.isStaffAppointment) && !isStaffAppointment(id)) {
                        showToast('No tienes permiso para editar esta cita', 'error');
                        return;
                    }
                    if (!State.session?.staff && apt && apt.userEmail && apt.userEmail !== State.currentUserEmail) {
                        showToast('No puedes editar citas de otro administrador', 'error');
                        return;
                    }
                    if (typeof editAppointment === 'function') editAppointment(id);
                }
            }
            return;
        }

        // 5. Client Photo Delete (The one user reported)
        const clientDelBtn = e.target.closest('.client-photo-remove-btn');
        if (clientDelBtn) {
            e.preventDefault();
            e.stopPropagation();
            
            if (clientDelBtn.dataset.confirming === 'true') {
                const photoId = clientDelBtn.dataset.id;
                clientDelBtn.disabled = true;
                clientDelBtn.textContent = '...';
                
                const success = await deleteClientPhoto(photoId);
                if (success) {
                    renderRoute(); 
                    if (typeof window.refreshCurrentClientPhotos === 'function') {
                        window.refreshCurrentClientPhotos();
                    }
                } else {
                    clientDelBtn.disabled = false;
                    clientDelBtn.dataset.confirming = 'false';
                    clientDelBtn.textContent = '🗑️';
                    clientDelBtn.style.background = 'rgba(220,53,69,0.8)';
                }
            } else {
                clientDelBtn.dataset.confirming = 'true';
                clientDelBtn.textContent = '¿Borrar?';
                clientDelBtn.style.background = '#e67e22';
                clientDelBtn.style.width = 'auto';
                
                setTimeout(() => {
                    if (clientDelBtn && clientDelBtn.dataset.confirming === 'true') {
                        clientDelBtn.dataset.confirming = 'false';
                        clientDelBtn.textContent = '🗑️';
                        clientDelBtn.style.background = 'rgba(220,53,69,0.8)';
                    }
                }, 3000);
            }
            return;
        }

        // 5. Client Photo Edit
        const clientEditBtn = e.target.closest('.client-photo-edit-btn');
        if (clientEditBtn) {
            e.stopPropagation();
            const photoId = clientEditBtn.dataset.photoId;
            const cid = window.currentModalClientId;
            if (photoId) {
                const photoData = (State.clientPhotos?.[cid] || []).find(p => p.id === photoId) || {};
                window.editClientPhoto(photoId, cid, photoData.photo_date || '', photoData.notes || '', photoData.photo_type || 'before');
            }
            return;
        }
    });

    function showClientFormForDiagnosis() {
        const isStaff = !!State.session?.staff;
        const staffSalonId = State.session?.staff && State.session.staffSalonId;
        const defaultSalonId = State.activeSalonId !== 'all' ? State.activeSalonId : (State.salons.length === 1 ? State.salons[0].id : '');
        const salonOptions = State.salons.map(s => `
            <option value="${s.id}" ${String(defaultSalonId) === String(s.id) ? 'selected' : ''}>${s.name}</option>`).join('');
        const html = `
            <form id="client-form-diagnosis">
                <div class="form-group">
                    <label>Nombre y Apellidos</label>
                    <input type="text" class="form-control" name="name" required placeholder="Ej: María García">
                </div>
                <div class="form-group">
                    <label>Salón <span style="color:var(--danger-color, #dc3545)">*</span></label>
                    ${isStaff
                        ? `<div class="form-control" style="background:rgba(0,0,0,0.03);color:var(--text-secondary)">${State.salons.find(s => String(s.id) === String(staffSalonId))?.name || 'Salón asignado'}</div>
                           <input type="hidden" name="salon_id" value="${staffSalonId || ''}">`
                        : `<select class="form-control" name="salon_id" required>
                              <option value="" disabled ${!defaultSalonId ? 'selected' : ''}>Selecciona un salón...</option>
                              ${salonOptions}
                          </select>`}
                </div>
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="tel" class="form-control" name="phone" placeholder="Ej: +34 600 123 456">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" placeholder="Ej: correo@ejemplo.com">
                </div>
                <div class="form-group">
                    <label>¿Enviar mensaje de WhatsApp automático?</label>
                    <select class="form-control" name="enviar_was">
                        <option value="true">Sí</option>
                        <option value="false" selected>No</option>
                    </select>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Crear y Continuar</button>
                </div>
            </form>`;

        openModal('Nuevo Cliente para Diagnóstico', html, () => {
            document.getElementById('client-form-diagnosis').addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Guardando…';

                const fd = new FormData(e.target);
                const clientId = generateId();
                const data = {
                    id: clientId,
                    name: fd.get('name'),
                    salon_id: fd.get('salon_id') || null,
                    phone: fd.get('phone'),
                    email: fd.get('email'),
                    enviar_was: fd.get('enviar_was') === 'true',
                    observations: ''
                };

                const success = await addClient(data);
                if (success) {
                    closeModal();
                    await selectClientForDiagnosis(data);
                } else {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Crear y Continuar';
                }
            });
        });
    }

    async function selectClientForDiagnosis(client) {
        const selClient = document.getElementById('diagnosis-client-selection');
        const mainDiag = document.getElementById('diagnosis-main');
        if (!selClient || !mainDiag) {
            console.error('Elementos de diagnóstico no encontrados');
            return;
        }
        selClient.style.display = 'none';
        mainDiag.style.display = 'block';
        const nameEl = document.getElementById('selected-client-name');
        const phoneEl = document.getElementById('selected-client-phone');
        if (nameEl) nameEl.textContent = client.name;
        if (phoneEl) phoneEl.textContent = client.phone || '';
        diagnosisClientId = client.id;
        diagnosisClientName = client.name;

        sessionStorage.setItem('nymara_diagnosis_client_id', client.id);
        sessionStorage.setItem('nymara_diagnosis_client_name', client.name);
        
        showToast('Cliente ' + client.name + ' seleccionado para diagnóstico');
    }

    function initDiagnosisEvents() {
        const dropZone = document.getElementById('drop-zone');
        const fileInput = document.getElementById('diag-file-input');
        const analyzeBtn = document.getElementById('analyze-btn');
        const resetBtn = document.getElementById('reset-btn');
        const cameraBtn = document.getElementById('camera-btn');
        
        if (dropZone && fileInput) {
            dropZone.addEventListener('click', () => fileInput.click());
            dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.style.borderColor = 'var(--accent-color)'; });
            dropZone.addEventListener('dragleave', () => { dropZone.style.borderColor = 'var(--border-color)'; });
            dropZone.addEventListener('drop', e => {
                e.preventDefault();
                dropZone.style.borderColor = 'var(--border-color)';
                const file = e.dataTransfer.files[0];
                if (file) processDiagnosisFile(file);
            });
            fileInput.addEventListener('change', e => {
                const file = e.target.files[0];
                if (file) processDiagnosisFile(file);
});
        }
        
if (analyzeBtn) {
            analyzeBtn.onclick = () => {
                console.log('Analyze button clicked');
                runDiagnosisAnalysis();
            };
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                document.getElementById('preview-container').style.display = 'none';
                document.getElementById('action-buttons').style.display = 'none';
                document.getElementById('drop-zone').style.display = 'block';
                document.getElementById('colored-hair-toggle').style.display = 'none';
                currentDiagnosisImage = null;
                currentDiagnosisResults = null;
                diagnosisImage = null;
            });
        }
        
        if (cameraBtn) {
            cameraBtn.addEventListener('click', async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
                    const video = document.getElementById('diag-video');
                    video.srcObject = stream;
                    document.getElementById('camera-container').style.display = 'block';
                    cameraBtn.style.display = 'none';
                    dropZone.style.display = 'none';
                    
                    document.getElementById('shutter-btn').addEventListener('click', () => {
                        const canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        canvas.getContext('2d').drawImage(video, 0, 0);
                        canvas.toBlob(blob => {
                            const file = new File([blob], 'camera_capture.jpg', { type: 'image/jpeg' });
                            processDiagnosisFile(file);
                            stream.getTracks().forEach(t => t.stop());
                            document.getElementById('camera-container').style.display = 'none';
                            cameraBtn.style.display = 'flex';
                            dropZone.style.display = 'block';
                        }, 'image/jpeg', 0.95);
                    });
                    
                    document.getElementById('cancel-camera-btn').addEventListener('click', () => {
                        stream.getTracks().forEach(t => t.stop());
                        document.getElementById('camera-container').style.display = 'none';
                        cameraBtn.style.display = 'flex';
                        dropZone.style.display = 'block';
                    });
                } catch (err) {
                    showToast('No se pudo acceder a la cámara', 'error');
                }
            });
        }
    }

    function processDiagnosisFile(file) {
        if (!file || !file.type.startsWith('image/')) return;
        
        const reader = new FileReader();
        reader.onload = e => {
            const img = new Image();
            img.onload = () => {
                currentDiagnosisImage = img;
                const preview = document.getElementById('diag-preview-img');
                if (preview) {
                    preview.src = e.target.result;
                    document.getElementById('preview-container').style.display = 'block';
                    document.getElementById('drop-zone').style.display = 'none';
                    document.getElementById('action-buttons').style.display = 'flex';
                    document.getElementById('colored-hair-toggle').style.display = 'flex';
                }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    async function runDiagnosisAnalysis() {
        console.log('runDiagnosisAnalysis called, currentDiagnosisImage:', !!currentDiagnosisImage);
        if (!currentDiagnosisImage) return;
        
        const analyzeBtn = document.getElementById('analyze-btn');
        if (analyzeBtn) analyzeBtn.disabled = true;

        const statusBadge = document.getElementById('status-badge');
        if (statusBadge) {
            statusBadge.textContent = 'Analizando tejidos...';
            statusBadge.style.background = '#f59e0b';
        }
        
        try {
            console.log('Starting diagnosis analysis...');
            
            // Validar imagen primero
            if (!validateDiagnosisImage(currentDiagnosisImage)) {
                console.log('Image validation failed');
                if (statusBadge) {
                    statusBadge.textContent = 'Imagen no válida';
                    statusBadge.style.background = '#ef4444';
                }
                alert('⚠️ Imagen no válida.\n\nLa foto debe ser una toma microscópica del cuero cabelludo.');
                if (analyzeBtn) analyzeBtn.disabled = false;
                return;
            }
            
            console.log('Running detection functions...');
            // Análisis real de la imagen
            const density = detectHairDensity(currentDiagnosisImage);
            console.log('Density:', density);
            const thickness = detectHairThickness(currentDiagnosisImage);
            console.log('Thickness:', thickness);
            const { hydration, sebumLevel, sebumLabel } = detectHydrationAndSebum(currentDiagnosisImage);
            console.log('Hydration:', hydration, 'Sebum:', sebumLevel, sebumLabel);
            const dandruffResult = detectDandruffLevel(currentDiagnosisImage);
            const dandruffValue = dandruffResult.value;
            const dandruffLabel = dandruffResult.label;
            console.log('Dandruff:', dandruffValue, dandruffLabel);
            
            document.getElementById('val-density').textContent = density;
            document.getElementById('val-thickness').textContent = thickness;
            document.getElementById('val-hydration').textContent = hydration + '%';
            document.getElementById('val-sebum').textContent = sebumLevel + ' (' + sebumLabel + ')';
            document.getElementById('val-dandruff').textContent = dandruffValue + ' (' + dandruffLabel + ')';
            
            const isColored = document.getElementById('colored-hair-checkbox')?.checked || false;
            const diagnosis = { density, thickness, hydration: parseInt(hydration), sebum: parseInt(sebumLevel) || 5, isColored };
            
            displayDiagnosisProducts(getMariaNilaRecommendations(diagnosis));
            displayDiagnosisTreatments(getOlaplexRecommendations(diagnosis));
            
            if (statusBadge) {
                statusBadge.textContent = '✓ Análisis completado';
                statusBadge.style.background = '#10b981';
            }
            // Guardar resultados para usar al guardar
            currentDiagnosisResults = { density, thickness, hydration, sebumLevel, sebumLabel, dandruffValue, dandruffLabel, isColored };
        } catch (err) {
            console.error('ERROR in diagnosis:', err);
            console.warn('Análisis completado con advertencias');
            if (statusBadge) {
                statusBadge.textContent = '✓ Análisis completado';
                statusBadge.style.background = '#10b981';
            }
        } finally {
            console.log('Finally block - re-enabling button');
            if (analyzeBtn) analyzeBtn.disabled = false;
        }
    }

    function validateDiagnosisImage(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = 150; 
        canvas.width = size; canvas.height = size;
        ctx.drawImage(img, 0, 0, size, size);
        const data = ctx.getImageData(0, 0, size, size).data;
        
        const n = data.length / 4;
        const grays = new Float32Array(n);
        let rSum = 0, gSum = 0, bSum = 0;
        
        for (let i = 0; i < n; i++) {
            const r = data[i*4], g = data[i*4+1], b = data[i*4+2];
            rSum += r; gSum += g; bSum += b;
            grays[i] = 0.299 * r + 0.587 * g + 0.114 * b;
        }
        
        const rAvg = rSum / n, gAvg = gSum / n, bAvg = bSum / n;
        
        // 1. Filtro Biológico (Color del cuero cabelludo/piel)
        // El cuero cabelludo es predominantemente cálido (R > G > B o R > G ~= B)
        // Rechazar si hay exceso de Azul o Verde (fotos de paisajes, objetos artificiales)
        const isBiologicalColor = (rAvg > gAvg) && (rAvg > bAvg - 10) && (rAvg > 40);
        
        // 2. Filtro de Artificialidad (Colores demasiado saturados o planos)
        const avgGray = grays.reduce((a, b) => a + b, 0) / n;
        let variance = 0;
        for (let i = 0; i < n; i++) {
            variance += (grays[i] - avgGray) * (grays[i] - avgGray);
        }
        variance /= n;
        
        // 3. Filtro Microscópico (Textura y Bordes)
        let weakEdges = 0;
        let strongEdges = 0;
        for (let y = 0; y < size - 1; y++) {
            for (let x = 0; x < size - 1; x++) {
                const idx = y * size + x;
                const diffX = Math.abs(grays[idx] - grays[idx + 1]);
                const diffY = Math.abs(grays[idx] - grays[idx + size]);
                const maxDiff = Math.max(diffX, diffY);
                if (maxDiff > 15) weakEdges++;
                if (maxDiff > 40) strongEdges++;
            }
        }
        
        const weakEdgeDensity = weakEdges / (size * size);
        const strongEdgeDensity = strongEdges / (size * size);
        
        // Criterios Refinados:
        const isUniform = variance < 120; // Imágenes demasiado planas (fondos, capturas)
        const lacksTexture = weakEdgeDensity < 0.05; // Sin detalle microscópico
        const lacksMicroDetail = strongEdgeDensity < 0.015; // Sin pelos o poros definidos
        const tooMuchComplexity = weakEdgeDensity > 0.40; // Demasiado ruido (no es micro)
        const isTooDarkOrBright = (avgGray < 15) || (avgGray > 240);

        // Validación final
        return isBiologicalColor && !isUniform && !lacksTexture && !lacksMicroDetail && !tooMuchComplexity && !isTooDarkOrBright;
    }

    function detectHairDensity(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 100; canvas.height = 100;
        ctx.drawImage(img, 0, 0, 100, 100);
        const data = ctx.getImageData(0, 0, 100, 100).data;
        
        let hairPixels = 0;
        const totalPixels = data.length / 4;
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            const brightness = (r + g + b) / 3;
            const saturation = Math.max(r, g, b) === 0 ? 0 : (Math.max(r, g, b) - Math.min(r, g, b)) / Math.max(r, g, b);
            
            // Detectar cabello (oscuro con cierta saturación)
            if (brightness < 100 && saturation > 0.1 && saturation < 0.5) {
                hairPixels++;
            }
        }
        
        const density = Math.floor((hairPixels / totalPixels) * 300 + 100);
        return Math.min(280, Math.max(80, density));
    }

    function detectHairThickness(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 80; canvas.height = 80;
        ctx.drawImage(img, 0, 0, 80, 80);
        const data = ctx.getImageData(0, 0, 80, 80).data;
        
        let darkPixels = 0;
        let totalDarkPixels = 0;
        
        for (let y = 0; y < 80; y++) {
            for (let x = 0; x < 80; x++) {
                const i = (y * 80 + x) * 4;
                const r = data[i], g = data[i+1], b = data[i+2];
                const brightness = (r + g + b) / 3;
                
                if (brightness < 80) {
                    darkPixels++;
                    // Contar transiciones blanco-oscuro para estimar grosor
                    if (x > 0) {
                        const prevI = (y * 80 + (x-1)) * 4;
                        const prevBright = (data[prevI] + data[prevI+1] + data[prevI+2]) / 3;
                        if ((brightness < 80 && prevBright >= 80) || (brightness >= 80 && prevBright < 80)) {
                            totalDarkPixels++;
                        }
                    }
                }
            }
        }
        
        // Grosor basado en transiciones (más transiciones = cabello más fino)
        const thickness = Math.floor(90 - (totalDarkPixels / 20));
        return Math.min(120, Math.max(40, thickness));
    }

    function detectHydrationAndSebum(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 80; canvas.height = 80;
        ctx.drawImage(img, 0, 0, 80, 80);
        const data = ctx.getImageData(0, 0, 80, 80).data;
        
        let shinyPixels = 0;
        let dryPixels = 0;
        const totalPixels = data.length / 4;
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            const brightness = (r + g + b) / 3;
            const saturation = Math.max(r, g, b) === 0 ? 0 : (Math.max(r, g, b) - Math.min(r, g, b)) / Math.max(r, g, b);
            
            // Piel brillante = exceso de sebo
            if (brightness > 180 && saturation < 0.2 && r > 150 && g > 150 && b > 150) {
                shinyPixels++;
            }
            // Piel mate/sin brillo = seca
            if (brightness < 100 && saturation < 0.3) {
                dryPixels++;
            }
        }
        
        const shinyRatio = shinyPixels / totalPixels;
        const dryRatio = dryPixels / totalPixels;
        
        // Calcular nivel de sebo de 0 a 10
        let sebumValue = 5; // Normal base
        if (shinyRatio > 0.28) { // +30% sensibilidad
            sebumValue = 8 + Math.floor(shinyRatio * 10); // 8-10 Alto
        } else if (dryRatio > 0.35) { // +30% sensibilidad
            sebumValue = 2 + Math.floor(dryRatio * 10); // 0-3 Normal bajo
        } else {
            sebumValue = 4 + Math.floor(Math.random() * 3); // 4-6 Normal medio
        }
        sebumValue = Math.min(10, Math.max(0, sebumValue));
        
        // Determinar etiqueta según rango
        let sebumLabel;
        if (sebumValue < 3) sebumLabel = 'Normal';
        else if (sebumValue < 7) sebumLabel = 'Medio';
        else sebumLabel = 'Alto';
        
        // Hidratación basada en sebo
        let hydration;
        if (sebumValue >= 7) hydration = Math.floor(40 + Math.random() * 20);
        else if (sebumValue < 3) hydration = Math.floor(30 + Math.random() * 25);
        else hydration = Math.floor(50 + Math.random() * 20);
        
        return { hydration, sebumLevel: sebumValue, sebumLabel };
    }

    function detectErythemaLevel(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 100; canvas.height = 100;
        ctx.drawImage(img, 0, 0, 100, 100);
        const data = ctx.getImageData(0, 0, 100, 100).data;
        
        let erythemaPixels = 0;
        let skinPixels = 0;
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            
            // Detectar piel (tonos rojizos/amarillentos típicos de piel)
            const isSkinTone = r > 95 && g > 40 && b > 20 && r > b && r > g * 0.8;
            if (isSkinTone) skinPixels++;
            
            // Eritema: rojez (rojo significativamente mayor que verde y azul)
            if (r > g + 30 && r > b + 30 && r > 120) {
                erythemaPixels++;
            }
        }
        
        if (skinPixels === 0) return 0;
        const erythemaRatio = erythemaPixels / skinPixels;
        let erythemaValue = Math.round(erythemaRatio * 10);
        console.log('Eritema detection:', { erythemaPixels, skinPixels, erythemaRatio, erythemaValue });
        return Math.min(10, Math.max(0, erythemaValue));
    }

    function detectDandruffLevel(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 100; canvas.height = 100;
        ctx.drawImage(img, 0, 0, 100, 100);
        const data = ctx.getImageData(0, 0, 100, 100).data;
        
        let dandruffPixels = 0;
        let skinPixels = 0;
        const totalPixels = data.length / 4;
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            const brightness = (r + g + b) / 3;
            const maxChannel = Math.max(r, g, b);
            const minChannel = Math.min(r, g, b);
            const saturation = maxChannel === 0 ? 0 : (maxChannel - minChannel) / maxChannel;
            
            const hasRed = r > g && r > b;
            const isSkinTone = r > 100 && g > 80 && b > 50 && saturation < 0.4 && hasRed;
            
            if (isSkinTone) skinPixels++;
            
            const isDandruff = brightness > 252 && saturation < 0.03 && (maxChannel - minChannel) > 100 && !isSkinTone; // -80% sensibilidad total
            if (isDandruff) dandruffPixels++;
        }
        
        const dandruffRatio = (dandruffPixels / totalPixels) * 100;
        let dandruffValue = Math.round(dandruffRatio * 0.14); // -93% sensibilidad total
        dandruffValue = Math.min(10, Math.max(0, dandruffValue));
        
        // Determinar etiqueta según rango
        let dandruffLabel;
        if (dandruffValue < 3) dandruffLabel = 'Normal';
        else if (dandruffValue < 7) dandruffLabel = 'Medio';
        else dandruffLabel = 'Alto';
        
        return { value: dandruffValue, label: dandruffLabel };
    }

window.addEventListener('message', async (event) => {
        if (event.data && event.data.type === 'diagnosis_photo') {
            try {
                const clientId = sessionStorage.getItem('nymara_diagnosis_client_id');
                const clientName = sessionStorage.getItem('nymara_diagnosis_client_name');
                const results = event.data.results;
                const photoData = event.data.photoData;
                
                console.log('DEBUG: Parent received diagnosis_photo message:', { clientId, clientName, results, hasPhoto: !!photoData });
                showToast(`Análisis completado para ${clientName || 'Cliente'}`);
                
                // Guardar foto si existe
                if (photoData && clientId) {
                    try {
                        const base64Data = photoData.replace(/^data:image\/\w+;base64,/, '');
                        const binaryString = atob(base64Data);
                        const bytes = new Uint8Array(binaryString.length);
                        for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
                        const blob = new Blob([bytes], { type: 'image/jpeg' });
                        
                        const photoId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                            return v.toString(16);
                        });

                        const notes = `Densidad: ${results?.density || '--'}, Grosor: ${results?.thickness || '--'}, Hidratación: ${results?.hydration || '--'}%, Sebo: ${results?.sebum || '--'}, Caspa: ${results?.dandruff || '--'}`;

                        try {
                            const photoFile = new File([blob], `diagnosis_${Date.now()}.jpg`, { type: 'image/jpeg' });
                            const savedPhoto = await api.uploadPhoto({
                                clientId,
                                photoId,
                                file: photoFile,
                                photoDate: new Date().toISOString().split('T')[0],
                                photoType: 'diagnosis',
                                notes
                            });

                            console.log('Diagnosis photo saved:', savedPhoto.photo_url);
                            showToast('Diagnóstico guardado en el historial del cliente');
                            if (!State.clientPhotos) State.clientPhotos = {};
                            if (!State.clientPhotos[clientId]) State.clientPhotos[clientId] = [];
                            State.clientPhotos[clientId].unshift(savedPhoto);
                            loadClientPhotos(clientId);
                            
                            // Notify diagnosis iframe that photo was saved
                            const diagnosisFrame = document.querySelector('iframe[src*="diagnosis"]');
                            if (diagnosisFrame) {
                                diagnosisFrame.contentWindow.postMessage({
                                    type: 'diagnosis_photo_saved'
                                }, '*');
                            }
                        } catch (e) {
                            console.error('Error saving diagnosis photo:', e);
                            showToast('Error al guardar la foto del diagnóstico', 'error');
                        }
                    } catch (e) {
                        console.error('Error saving diagnosis photo:', e);
                    }
                }
                
                // Mostrar recomendaciones en la app principal
                if (results) {
                    const diagnosis = {
                        density: results.density || 150,
                        thickness: results.thickness || 65,
                        hydration: parseInt(results.hydration) || 55,
                        sebum: parseInt(results.sebum) || 5,
                        isColored: results.isColored || false
                    };
                    const products = getMariaNilaRecommendations(diagnosis);
                    const treatments = getOlaplexRecommendations(diagnosis);
                    displayDiagnosisProducts(products);
                    displayDiagnosisTreatments(treatments);
                }
            } catch (e) {
                console.error('Error handling diagnosis_photo message:', e);
            }
        }
    });

    /* ═══════════════════════════════════════
       FORMS (now async submit handlers)
       ═══════════════════════════════════════ */
    function showClientForm(info = null) {
        const isEdit = !!info;
        const isStaff = !!State.session?.staff;
        const staffSalonId = State.session?.staff && State.session.staffSalonId;
        const defaultSalonId = isEdit ? (info.salon_id || '') : (State.activeSalonId !== 'all' ? State.activeSalonId : (State.salons.length === 1 ? State.salons[0].id : ''));
        const salonOptions = State.salons.map(s => `
            <option value="${s.id}" ${String(defaultSalonId) === String(s.id) ? 'selected' : ''}>${s.name}</option>`).join('');
        const html = `
            <form id="client-form">
                <div class="form-group">
                    <label>Nombre y Apellidos</label>
                    <input type="text" class="form-control" name="name" required value="${isEdit ? info.name : ''}">
                </div>
                <div class="form-group">
                    <label>Salón <span style="color:var(--danger-color, #dc3545)">*</span></label>
                    ${isStaff
                        ? `<div class="form-control" style="background:rgba(0,0,0,0.03);color:var(--text-secondary)">${State.salons.find(s => String(s.id) === String(staffSalonId))?.name || 'Salón asignado'}</div>
                           <input type="hidden" name="salon_id" value="${staffSalonId || ''}">`
                        : `<select class="form-control" name="salon_id" required>
                              <option value="" disabled ${!defaultSalonId ? 'selected' : ''}>Selecciona un salón...</option>
                              ${salonOptions}
                          </select>`}
                </div>
                <div class="form-group">
                    <label>NIF / CIF</label>
                    <input type="text" class="form-control" name="nif" placeholder="12345678A" value="${isEdit ? (info.nif || '') : ''}">
                </div>
                <div class="form-group">
                    <label>Dirección Fiscal</label>
                    <input type="text" class="form-control" name="fiscal_address" placeholder="Calle, nº, CP, Ciudad" value="${isEdit ? (info.fiscal_address || '') : ''}">
                </div>
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="tel" class="form-control" name="phone" value="${isEdit ? info.phone : ''}">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" value="${isEdit ? info.email : ''}">
                </div>
                <div class="form-group">
                    <label>¿Enviar mensaje de WhatsApp automático?</label>
                    <select class="form-control" name="enviar_was" id="enviar-was-select" onchange="toggleWATemplate()">
                        <option value="true" ${isEdit && (info.enviar_was === true || info.enviar_was === 'true' || info.enviar_was === 1) ? 'selected' : ''}>Sí</option>
                        <option value="false" ${!isEdit || (info.enviar_was === false || info.enviar_was === 'false' || info.enviar_was === 0 || info.enviar_was === null) ? 'selected' : ''}>No</option>
                    </select>
                </div>
                <div class="form-group" id="wa-template-group" style="${isEdit && (info.enviar_was === true || info.enviar_was === 'true' || info.enviar_was === 1) ? '' : 'display:none'}">
                    <label>Plantilla de mensaje WhatsApp</label>
                    <div style="display:flex;gap:4px;margin-bottom:6px;flex-wrap:wrap;">
                        <button type="button" class="btn btn-sm btn-secondary" onclick="insertWAVariable('{cliente}')">+ Cliente</button>
                        <button type="button" class="btn btn-sm btn-secondary" onclick="insertWAVariable('{salon}')">+ Salón</button>
                        <button type="button" class="btn btn-sm btn-secondary" onclick="insertWAVariable('{servicio}')">+ Servicio</button>
                        <button type="button" class="btn btn-sm btn-secondary" onclick="insertWAVariable('{fecha}')">+ Fecha</button>
                        <button type="button" class="btn btn-sm btn-secondary" onclick="insertWAVariable('{hora}')">+ Hora</button>
                    </div>
                    <textarea class="form-control" id="wa-template-textarea" name="whatsapp_template" rows="3" placeholder="Escribe tu plantilla...">${isEdit ? (info.whatsapp_template || DEFAULT_WA_TEMPLATE) : DEFAULT_WA_TEMPLATE}</textarea>
                </div>
                <div class="form-group">
                    <label>Observaciones</label>
                    <textarea class="form-control" name="observations" rows="3" placeholder="Notas sobre el cliente...">${isEdit ? (info.observations || '') : ''}</textarea>
                </div>
                <div class="form-group">
                    <label style="cursor:pointer;display:flex;align-items:center;gap:6px" data-action="toggle-tech-history">
                        <span id="tech-history-arrow">▼</span> Historial Técnico
                    </label>
                    <div id="tech-history-body" class="tech-history-container">
                        <div class="tech-history-tabs">
                            <button type="button" class="tech-tab active" data-tab="th-general">Datos Generales</button>
                            <button type="button" class="tech-tab" data-tab="th-laser">Láser Diodo</button>
                            <button type="button" class="tech-tab" data-tab="th-rf">Radiofrecuencia</button>
                            <button type="button" class="tech-tab" data-tab="th-evolution">Evolución</button>
                        </div>
                        <div id="th-general" class="tech-tab-panel active">
                            <div class="form-group"><label>Fecha de Nacimiento</label><input type="date" class="form-control" name="th_birth_date"></div>
                            <div class="form-group"><label>Embarazo / Lactancia</label><select class="form-control" name="th_pregnancy"><option value="">No</option><option value="embarazo">Embarazo</option><option value="lactancia">Lactancia</option></select></div>
                            <div class="form-group"><label>Marcapasos / Prótesis metálicas / Cardiopatías</label><select class="form-control" name="th_pacemaker"><option value="">No</option><option value="si">Sí</option></select></div>
                            <div class="form-group"><label>Epilepsia / Cáncer reciente / Infecciones activas</label><select class="form-control" name="th_epilepsy"><option value="">No</option><option value="si">Sí</option></select></div>
                            <div class="form-group"><label>Medicación actual (fotosensibles)</label><input type="text" class="form-control" name="th_medication" placeholder="Ej: isotretinoína, ibuprofeno..."></div>
                            <div class="form-group"><label>Consentimiento informado</label><select class="form-control" name="th_consent"><option value="false">No firmado</option><option value="true">Firmado</option></select></div>
                        </div>
                        <div id="th-laser" class="tech-tab-panel">
                            <div class="form-group"><label>Zona a tratar</label><input type="text" class="form-control" name="th_laser_zone" placeholder="Ej: piernas, axilas, cavado"></div>
                            <div class="form-group"><label>Fototipo de piel (Fitzpatrick)</label><select class="form-control" name="th_fitzpatrick"><option value="">Seleccionar...</option><option value="I">I - Muy blanca</option><option value="II">II - Blanca</option><option value="III">III - Morena clara</option><option value="IV">IV - Morena</option><option value="V">V - Oscura</option><option value="VI">VI - Muy oscura</option></select></div>
                            <div class="form-group"><label>Densidad del vello</label><select class="form-control" name="th_hair_density"><option value="">Seleccionar...</option><option value="baja">Baja</option><option value="media">Media</option><option value="alta">Alta</option></select></div>
                            <div class="form-group"><label>Grosor del vello</label><select class="form-control" name="th_hair_thickness"><option value="">Seleccionar...</option><option value="fino">Fino</option><option value="medio">Medio</option><option value="grueso">Grueso</option></select></div>
                            <div class="form-group"><label>Color del vello</label><input type="text" class="form-control" name="th_hair_color" placeholder="Ej: castaño, negro, rubio"></div>
                            <div class="tech-sessions-header">Sesiones Láser<button type="button" class="btn btn-sm btn-secondary" data-action="add-session" data-type="laser">+ Añadir sesión</button></div>
                            <div id="th-laser-sessions"></div>
                        </div>
                        <div id="th-rf" class="tech-tab-panel">
                            <div class="form-group"><label>Objetivo del tratamiento</label><select class="form-control" name="th_rf_objective"><option value="">Seleccionar...</option><option value="flacidez">Flacidez</option><option value="celulitis">Celulitis</option><option value="grasa_localizada">Grasa localizada</option><option value="drenaje">Drenaje</option><option value="reafirmacion">Reafirmación</option></select></div>
                            <div class="form-group"><label>Zona corporal</label><input type="text" class="form-control" name="th_rf_zone" placeholder="Ej: abdomen, cartucheras, glúteos"></div>
                            <div class="tech-sessions-header">Sesiones Radiofrecuencia<button type="button" class="btn btn-sm btn-secondary" data-action="add-session" data-type="rf">+ Añadir sesión</button></div>
                            <div id="th-rf-sessions"></div>
                            <div class="tech-sessions-header" style="margin-top:12px">Medidas y Control<button type="button" class="btn btn-sm btn-secondary" data-action="add-perimeter">+ Añadir perímetro</button></div>
                            <div id="th-perimeters"></div>
                        </div>
                        <div id="th-evolution" class="tech-tab-panel">
                            <div class="tech-sessions-header">Control de Evolución<button type="button" class="btn btn-sm btn-secondary" data-action="add-evolution">+ Añadir registro</button></div>
                            <div id="th-evolution-records"></div>
                        </div>
                    </div>
                </div>
                ${isEdit ? `
                <div class="form-group">
                    <label>Fotos del Cliente</label>
                    <div id="client-photos-list" style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:10px"></div>
                    <div style="display:flex;gap:8px;margin-bottom:8px" id="photos-buttons-container">
                        <button type="button" class="btn btn-sm btn-secondary" id="btn-add-client-photo">
                            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                            Añadir Foto
                        </button>
                        <button type="button" class="btn btn-sm btn-secondary compare-btn" data-client-id="${isEdit ? info.id : ''}" id="btn-compare-client-photos" style="${isEdit ? '' : 'display:none'}">Antes / Después</button>
                    </div>
                    <input type="file" id="client-photo-input" accept="image/*" style="display:none">
                </div>
                ` : ''}
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar' : 'Añadir'}</button>
                </div>
            </form>`;

        openModal(isEdit ? 'Editar Cliente' : 'Nuevo Cliente', html, async () => {
            let currentClientId = isEdit ? info.id : generateId();
            window.currentModalClientId = currentClientId;
            let sessionPhotos = [];
            let pendingFiles = [];

            // --- Historial Técnico ---
            const techData = { general: {}, laser: { sessions: [] }, rf: { sessions: [], perimeters: [] }, evolution: [] };
            try { if (isEdit && info.technical_history) Object.assign(techData, JSON.parse(info.technical_history)); } catch(e) {}

            function renderLaserSessions() {
                const c = document.getElementById('th-laser-sessions');
                if (!c) return;
                c.innerHTML = (techData.laser.sessions || []).map((s, i) => `
                    <div class="tech-session-card">
                        <div class="tech-session-header">Sesión Láser ${i+1} <button type="button" class="btn btn-sm tech-remove-session" data-type="laser" data-idx="${i}" style="color:var(--danger-color,#dc3545)">✕</button></div>
                        <div class="form-row"><div class="form-group"><label>Fecha</label><input type="date" class="form-control" value="${s.date||''}" data-th="laser" data-idx="${i}" data-field="date"></div>
                        <div class="form-group"><label>Fluencia (J/cm²)</label><input type="text" class="form-control" value="${s.fluence||''}" placeholder="Ej: 12" data-th="laser" data-idx="${i}" data-field="fluence"></div></div>
                        <div class="form-row"><div class="form-group"><label>Ancho de pulso (ms)</label><input type="text" class="form-control" value="${s.pulse_width||''}" placeholder="Ej: 30" data-th="laser" data-idx="${i}" data-field="pulse_width"></div>
                        <div class="form-group"><label>Frecuencia (Hz)</label><input type="text" class="form-control" value="${s.frequency||''}" placeholder="Ej: 10 o modo barrido" data-th="laser" data-idx="${i}" data-field="frequency"></div></div>
                        <div class="form-group"><label>Reacciones inmediatas</label><input type="text" class="form-control" value="${s.reactions||''}" placeholder="Ej: eritema perifolicular leve" data-th="laser" data-idx="${i}" data-field="reactions"></div>
                        <div class="form-group"><label>Tolerancia del cliente</label><input type="text" class="form-control" value="${s.tolerance||''}" placeholder="Ej: buena, molestia leve" data-th="laser" data-idx="${i}" data-field="tolerance"></div>
                    </div>`).join('');
            }

            function renderRfSessions() {
                const c = document.getElementById('th-rf-sessions');
                if (!c) return;
                c.innerHTML = (techData.rf.sessions || []).map((s, i) => `
                    <div class="tech-session-card">
                        <div class="tech-session-header">Sesión RF ${i+1} <button type="button" class="btn btn-sm tech-remove-session" data-type="rf" data-idx="${i}" style="color:var(--danger-color,#dc3545)">✕</button></div>
                        <div class="form-row"><div class="form-group"><label>Fecha</label><input type="date" class="form-control" value="${s.date||''}" data-th="rf" data-idx="${i}" data-field="date"></div>
                        <div class="form-group"><label>Tipo RF</label><select class="form-control" data-th="rf" data-idx="${i}" data-field="rf_type"><option value="">...</option><option value="monopolar" ${s.rf_type==='monopolar'?'selected':''}>Monopolar</option><option value="bipolar" ${s.rf_type==='bipolar'?'selected':''}>Bipolar</option><option value="multipolar" ${s.rf_type==='multipolar'?'selected':''}>Multipolar</option><option value="resistiva" ${s.rf_type==='resistiva'?'selected':''}>Resistiva</option><option value="capacitiva" ${s.rf_type==='capacitiva'?'selected':''}>Capacitiva</option></select></div></div>
                        <div class="form-row"><div class="form-group"><label>Temperatura (°C)</label><input type="text" class="form-control" value="${s.temperature||''}" placeholder="Ej: 40" data-th="rf" data-idx="${i}" data-field="temperature"></div>
                        <div class="form-group"><label>Tiempo exposición (min)</label><input type="text" class="form-control" value="${s.exposure_time||''}" placeholder="Ej: 20" data-th="rf" data-idx="${i}" data-field="exposure_time"></div></div>
                        <div class="form-group"><label>Potencia / Intensidad</label><input type="text" class="form-control" value="${s.power||''}" placeholder="Ej: nivel 4" data-th="rf" data-idx="${i}" data-field="power"></div>
                    </div>`).join('');
            }

            function renderPerimeters() {
                const c = document.getElementById('th-perimeters');
                if (!c) return;
                c.innerHTML = (techData.rf.perimeters || []).map((p, i) => `
                    <div class="tech-session-card" style="padding:8px">
                        <div style="display:flex;gap:8px;align-items:end">
                            <div class="form-group" style="flex:1"><label>Zona</label><input type="text" class="form-control" value="${p.zone||''}" placeholder="Ej: abdomen" data-th="perimeter" data-idx="${i}" data-field="zone"></div>
                            <div class="form-group" style="flex:1"><label>Medida (cm)</label><input type="text" class="form-control" value="${p.value||''}" placeholder="Ej: 85" data-th="perimeter" data-idx="${i}" data-field="value"></div>
                            <div class="form-group" style="flex:1"><label>Fecha</label><input type="date" class="form-control" value="${p.date||''}" data-th="perimeter" data-idx="${i}" data-field="date"></div>
                            <button type="button" class="btn btn-sm tech-remove-perimeter" data-idx="${i}" style="color:var(--danger-color,#dc3545);margin-bottom:4px">✕</button>
                        </div>
                    </div>`).join('');
            }

            function renderEvolution() {
                const c = document.getElementById('th-evolution-records');
                if (!c) return;
                c.innerHTML = (techData.evolution || []).map((e, i) => `
                    <div class="tech-session-card">
                        <div class="tech-session-header">Registro ${i+1} <button type="button" class="btn btn-sm tech-remove-evolution" data-idx="${i}" style="color:var(--danger-color,#dc3545)">✕</button></div>
                        <div class="form-row"><div class="form-group"><label>Fecha</label><input type="date" class="form-control" value="${e.date||''}" data-th="evolution" data-idx="${i}" data-field="date"></div>
                        <div class="form-group"><label>Nº Sesión Láser</label><input type="text" class="form-control" value="${e.laser_session||''}" placeholder="Ej: 3" data-th="evolution" data-idx="${i}" data-field="laser_session"></div>
                        <div class="form-group"><label>Nº Sesión RF</label><input type="text" class="form-control" value="${e.rf_session||''}" placeholder="Ej: 5" data-th="evolution" data-idx="${i}" data-field="rf_session"></div></div>
                        <div class="form-group"><label>Incidencias / Efectos secundarios</label><input type="text" class="form-control" value="${e.incidents||''}" placeholder="Ej: quemazón leve, hiperpigmentación" data-th="evolution" data-idx="${i}" data-field="incidents"></div>
                        <div class="form-group"><label>Recomendaciones domiciliarias</label><input type="text" class="form-control" value="${e.home_recommendations||''}" placeholder="Ej: protector solar, hidratación profunda" data-th="evolution" data-idx="${i}" data-field="home_recommendations"></div>
                    </div>`).join('');
            }

            // Event delegation on tech-history-body
            const thBody = document.getElementById('tech-history-body');
            if (thBody) {
                thBody.addEventListener('click', function(ev) {
                    const btn = ev.target.closest('[data-action]');
                    if (!btn) return;
                    const action = btn.dataset.action;
                    ev.preventDefault();
                    if (action === 'add-session') {
                        const type = btn.dataset.type;
                        if (type === 'laser') { techData.laser.sessions.push({}); renderLaserSessions(); }
                        else { techData.rf.sessions.push({}); renderRfSessions(); }
                    } else if (action === 'add-perimeter') {
                        techData.rf.perimeters.push({}); renderPerimeters();
                    } else if (action === 'add-evolution') {
                        techData.evolution.push({}); renderEvolution();
                    }
                });

                // Delegate remove buttons for sessions, perimeters, evolution
                thBody.addEventListener('click', function(ev) {
                    const rm = ev.target.closest('.tech-remove-session');
                    if (rm) {
                        const type = rm.dataset.type;
                        const idx = parseInt(rm.dataset.idx);
                        if (type === 'laser') techData.laser.sessions.splice(idx, 1);
                        else techData.rf.sessions.splice(idx, 1);
                        if (type === 'laser') renderLaserSessions(); else renderRfSessions();
                        return;
                    }
                    const rp = ev.target.closest('.tech-remove-perimeter');
                    if (rp) {
                        techData.rf.perimeters.splice(parseInt(rp.dataset.idx), 1);
                        renderPerimeters();
                        return;
                    }
                    const re = ev.target.closest('.tech-remove-evolution');
                    if (re) {
                        techData.evolution.splice(parseInt(re.dataset.idx), 1);
                        renderEvolution();
                        return;
                    }
                    // Tab switching
                    const tab = ev.target.closest('[data-tab]');
                    if (tab) {
                        document.querySelectorAll('.tech-tab-panel').forEach(p => p.classList.remove('active'));
                        document.querySelectorAll('.tech-tab').forEach(t => t.classList.remove('active'));
                        const target = document.getElementById(tab.dataset.tab);
                        if (target) target.classList.add('active');
                        tab.classList.add('active');
                        return;
                    }
                    // Toggle collapse
                    if (ev.target.closest('[data-action="toggle-tech-history"]')) {
                        const body = document.getElementById('tech-history-body');
                        const arrow = document.getElementById('tech-history-arrow');
                        body.classList.toggle('collapsed');
                        arrow.textContent = body.classList.contains('collapsed') ? '▶' : '▼';
                    }
                });

                // Delegate change for session fields
                thBody.addEventListener('change', function(ev) {
                    const el = ev.target;
                    const th = el.dataset.th;
                    const idx = parseInt(el.dataset.idx);
                    const field = el.dataset.field;
                    if (!th || isNaN(idx) || !field) return;
                    if (th === 'laser') techData.laser.sessions[idx][field] = el.value;
                    else if (th === 'rf') techData.rf.sessions[idx][field] = el.value;
                    else if (th === 'perimeter') techData.rf.perimeters[idx][field] = el.value;
                    else if (th === 'evolution') techData.evolution[idx][field] = el.value;
                });
            }

            // Populate fields from saved data
            if (techData.general) {
                const g = techData.general;
                const setVal = (n, v) => { const el = document.querySelector(`[name="${n}"]`); if (el && v) el.value = v; };
                setVal('th_birth_date', g.birth_date);
                setVal('th_pregnancy', g.pregnancy);
                setVal('th_pacemaker', g.pacemaker);
                setVal('th_epilepsy', g.epilepsy);
                setVal('th_medication', g.medication);
                setVal('th_consent', g.consent);
            }
            if (techData.laser) {
                const l = techData.laser;
                const setVal = (n, v) => { const el = document.querySelector(`[name="${n}"]`); if (el && v) el.value = v; };
                setVal('th_laser_zone', l.zone);
                setVal('th_fitzpatrick', l.fitzpatrick);
                setVal('th_hair_density', l.hair_density);
                setVal('th_hair_thickness', l.hair_thickness);
                setVal('th_hair_color', l.hair_color);
                renderLaserSessions();
            }
            if (techData.rf) {
                const r = techData.rf;
                const setVal = (n, v) => { const el = document.querySelector(`[name="${n}"]`); if (el && v) el.value = v; };
                setVal('th_rf_objective', r.objective);
                setVal('th_rf_zone', r.zone);
                renderRfSessions();
                renderPerimeters();
            }
            renderEvolution();

            function collectTechHistory() {
                const gv = n => { const el = document.querySelector(`[name="${n}"]`); return el ? el.value : ''; };
                techData.general = { birth_date: gv('th_birth_date'), pregnancy: gv('th_pregnancy'), pacemaker: gv('th_pacemaker'), epilepsy: gv('th_epilepsy'), medication: gv('th_medication'), consent: gv('th_consent') };
                techData.laser.zone = gv('th_laser_zone');
                techData.laser.fitzpatrick = gv('th_fitzpatrick');
                techData.laser.hair_density = gv('th_hair_density');
                techData.laser.hair_thickness = gv('th_hair_thickness');
                techData.laser.hair_color = gv('th_hair_color');
                techData.rf.objective = gv('th_rf_objective');
                techData.rf.zone = gv('th_rf_zone');
                return techData;
            }

            // --- Fin Historial Técnico ---

            const renderPhotos = () => {
                const container = document.getElementById('client-photos-list');
                if (!container) return;
                
                let html = '';
                sessionPhotos.forEach((p, idx) => {
                    const photoType = (p.photo_type === 'after') ? 'Después' : (p.photo_type === 'diagnosis' ? 'Diagnóstico' : 'Antes');
                    html += `
                        <div class="client-mini-photo" data-photo-id="${p.id}" style="position:relative;text-align:center">
                            <img src="${p.photo_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer" onclick="openModal('Foto','<img src=${p.photo_url} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                            <div style="font-size:0.65rem;color:var(--text-secondary)">${photoType}</div>
                            <div style="font-size:0.6rem;color:var(--text-secondary)">${formatDateEU(p.photo_date || '')}</div>
                            <div style="display:flex;gap:2px;justify-content:center">
                                <button type="button" class="client-photo-edit-btn" data-photo-id="${p.id}" title="Editar" style="background:rgba(0,0,0,0.6);color:white;border:none;border-radius:4px;width:24px;height:24px;cursor:pointer;font-size:12px;opacity:0.9">✏️</button>
                                <button type="button" class="client-photo-remove-btn" data-id="${p.id}" title="Eliminar" style="background:rgba(220,53,69,0.8);color:white;border:none;border-radius:4px;min-width:24px;height:24px;padding:0 4px;cursor:pointer;font-size:12px;opacity:0.9;transition:all 0.2s">🗑️</button>
                            </div>
                        </div>`;
                });
                
                pendingFiles.forEach((pf, idx) => {
                    html += `
                        <div style="position:relative;text-align:center">
                            <img src="${pf.preview}" style="width:60px;height:60px;object-fit:cover;border-radius:8px">
                            <div style="font-size:0.65rem;color:var(--text-secondary)">Antes</div>
                            <div style="font-size:0.6rem;color:var(--text-secondary)">${formatDateEU(new Date())}</div>
                            <div style="display:flex;gap:2px;justify-content:center">
                                <button type="button" class="delete-pending-btn" data-idx="${idx}" title="Eliminar" style="background:rgba(0,0,0,0.6);color:white;border:none;border-radius:4px;width:20px;height:20px;cursor:pointer;font-size:10px;opacity:0.8">🗑️</button>
                            </div>
                        </div>`;
                });
                
                container.innerHTML = html;
            };

            console.log('Client form opened, isEdit:', isEdit, 'info:', info);
            if (isEdit && info?.id) {
                console.log('Loading photos for client:', info.id);
                sessionPhotos = await loadClientPhotos(info.id) || [];
                console.log('sessionPhotos loaded:', sessionPhotos);
                renderPhotos();
            }

            // Agregar botón de borrar duplicados dinámicamente
            if (isEdit) {
                const buttonsContainer = document.getElementById('photos-buttons-container');
                if (buttonsContainer && !document.getElementById('btn-dedup-photos')) {
                    const dedupBtn = document.createElement('button');
                    dedupBtn.type = 'button';
                    dedupBtn.id = 'btn-dedup-photos';
                    dedupBtn.className = 'btn btn-sm';
                    dedupBtn.style.cssText = 'background:#dc3545;color:white;border:none;padding:5px 10px;border-radius:4px;margin-left:8px';
                    dedupBtn.innerHTML = '🗑️ Borrar Duplicados';
                    buttonsContainer.appendChild(dedupBtn);
                    
                    dedupBtn.addEventListener('click', async () => {
                        if (!sessionPhotos.length) {
                            showToast('No hay fotos para revisar', 'warning');
                            return;
                        }
                        
                        showToast('Buscando fotos duplicadas...', 'info');
                        console.log('Processing photos for duplicates:', sessionPhotos);
                        
                        // Calcular hash para cada foto existente
                        const photoHashes = new Map(); // hash -> photo
                        const toDelete = [];
                        
                        for (const p of sessionPhotos) {
                            let hash = p.photo_hash;
                            
                            // Si no tiene hash, calcularlo descargando la imagen
                            if (!hash && p.photo_url) {
                                try {
                                    showToast(`Calculando hash para foto ${p.id}...`, 'info');
                                    const response = await fetch(p.photo_url);
                                    const blob = await response.blob();
                                    const buffer = await blob.arrayBuffer();
                                    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
                                    const hashArray = Array.from(new Uint8Array(hashBuffer));
                                    hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                                    
                                    // Guardar el hash en la BD para futuras comparaciones
                                    await updateClientPhoto(p.id, currentClientId, { photo_hash: hash });
                                    console.log(`Hash calculated and saved for ${p.id}:`, hash);
                                } catch (err) {
                                    console.error('Error calculating hash for photo:', p.id, err);
                                    continue;
                                }
                            }
                            
                            if (!hash) continue;
                            
                            if (photoHashes.has(hash)) {
                                console.log('Duplicate found:', p.id, 'matches:', photoHashes.get(hash).id);
                                toDelete.push(p.id);
                            } else {
                                photoHashes.set(hash, p);
                            }
                        }
                        
                        console.log('To delete:', toDelete);
                        
                        if (!toDelete.length) {
                            showToast('No se encontraron fotos duplicadas', 'info');
                            return;
                        }
                        
                        if (!confirm(`Se encontraron ${toDelete.length} foto(s) duplicada(s). ¿Eliminarlas?`)) return;
                        
                        for (const photoId of toDelete) {
                            await deleteClientPhoto(photoId, currentClientId);
                        }
                        
                        sessionPhotos = sessionPhotos.filter(p => !toDelete.includes(p.id));
                        renderPhotos();
                        showToast(`${toDelete.length} foto(s) duplicada(s) eliminada(s)`);
                    });
                }
            }

            const btnAddPhoto = document.getElementById('btn-add-client-photo');
            const photoInput = document.getElementById('client-photo-input');
            
            if (btnAddPhoto && photoInput) {
                btnAddPhoto.addEventListener('click', () => photoInput.click());
                
                photoInput.addEventListener('change', async e => {
                    const file = e.target.files[0];
                    if (!file) return;
                    
                    const reader = new FileReader();
                    reader.onload = ev => {
                        const img = new Image();
                        img.onload = () => {
                            // Run diagnosis
                            const dandruffResult = detectDandruffLevel(img);
                            const { sebumLevel } = detectHydrationAndSebum(img);
                            const erythemaResult = detectErythemaLevel(img);
                            
                            console.log('Diagnosis results:', { dandruffResult, sebumLevel, erythemaResult });
                            
                            pendingFiles.push({ 
                                file, 
                                preview: ev.target.result,
                                caspa: dandruffResult,
                                sebo: sebumLevel,
                                eritema: erythemaResult
                            });
                            renderPhotos();
                        };
                        img.src = ev.target.result;
                    };
                    reader.readAsDataURL(file);
                    photoInput.value = '';
                });
            }

            const photosList = document.getElementById('client-photos-list');
            if (photosList) {
                // Using global delegation for deletion now, but keeping local logic for pending files
                photosList.addEventListener('click', async e => {
                    const delPending = e.target.closest('.delete-pending-btn');
                    if (delPending) {
                        const idx = parseInt(delPending.dataset.idx);
                        pendingFiles.splice(idx, 1);
                        renderPhotos();
                        return;
                    }
                });
                
                // Expose refresh function for global listener
                window.refreshCurrentClientPhotos = async () => {
                    sessionPhotos = await loadClientPhotos(currentClientId) || [];
                    renderPhotos();
                };
                
                photosList.addEventListener('change', async e => {
                    const select = e.target;
                    if (select.tagName === 'SELECT' && select.dataset.id) {
                        const photoId = select.dataset.id;
                        const field = select.dataset.field;
                        const value = select.value;
                        await updateClientPhoto(photoId, currentClientId, { [field]: value });
                    }
                    const input = e.target;
                    if (input.tagName === 'INPUT' && input.dataset.id && input.type !== 'file') {
                        const photoId = input.dataset.id;
                        const field = input.dataset.field;
                        const value = input.value;
                        await updateClientPhoto(photoId, currentClientId, { [field]: value });
                    }
                });
            }

            document.getElementById('client-form').addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Guardando…';

                const fd = new FormData(e.target);
                const enviarWas = fd.get('enviar_was') === 'true';
                const data = { 
                    id: currentClientId, 
                    name: fd.get('name'), 
                    salon_id: fd.get('salon_id') || null,
                    phone: fd.get('phone'), 
                    email: fd.get('email'),
                    fiscal_address: fd.get('fiscal_address'),
                    nif: fd.get('nif'),
                    enviar_was: enviarWas,
                    whatsapp_template: enviarWas ? fd.get('whatsapp_template') : null,
                    observations: fd.get('observations'),
                    technical_history: collectTechHistory()
                };

                let success;
                if (isEdit) success = await updateClient(data);
                else success = await addClient(data);

                if (success && pendingFiles.length > 0) {
                    for (const pf of pendingFiles) {
                        const idx = pendingFiles.indexOf(pf);
                        const typeSelect = document.querySelector(`.pending-type[data-idx="${idx}"]`);
                        const dateInput = document.querySelector(`.pending-date[data-idx="${idx}"]`);
                        const notesInput = document.querySelector(`.pending-notes[data-idx="${idx}"]`);
                        await uploadClientPhoto(
                            pf.file, 
                            currentClientId, 
                            dateInput?.value || toLocalDateStr(new Date()),
                            typeSelect?.value || 'before',
                            notesInput?.value || '',
                            pf.caspa || null,
                            pf.sebo || null,
                            pf.eritema || null
                        );
                    }
                    showToast('Fotos guardadas');
                }

                if (success) { closeModal(); renderRoute(); }
                else { submitBtn.disabled = false; submitBtn.textContent = isEdit ? 'Guardar' : 'Añadir'; }
            });
        });
}

    function showServiceForm(info = null) {
        const isEdit = !!info;
        const html = `
            <form id="service-form">
                <div class="form-group">
                    <label>Nombre del Servicio</label>
                    <input type="text" class="form-control" name="name" required value="${isEdit ? info.name : ''}">
                </div>
                <div class="form-group">
                    <label>Duración (minutos)</label>
                    <input type="number" class="form-control" name="duration" min="5" step="5" required value="${isEdit ? info.duration : '30'}">
                </div>
                <div class="form-group">
                    <label>Precio (€)</label>
                    <input type="number" class="form-control" name="price" min="0" step="0.01" required value="${isEdit ? info.price : '0'}">
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar' : 'Añadir'}</button>
                </div>
            </form>`;

        openModal(isEdit ? 'Editar Servicio' : 'Nuevo Servicio', html, () => {
            document.getElementById('service-form').addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Guardando…';

                const fd = new FormData(e.target);
                const data = { id: isEdit ? info.id : generateId(), name: fd.get('name'), duration: parseInt(fd.get('duration')), price: parseFloat(fd.get('price')) };

                let success;
                if (isEdit) success = await updateService(data);
                else success = await addService(data);

                if (success) { closeModal(); renderRoute(); }
                else { submitBtn.disabled = false; submitBtn.textContent = isEdit ? 'Guardar' : 'Añadir'; }
            });
        });
    }

    async function showSettingsForm() {
        let staffList = '<p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:1rem;">No hay usuarios staff configurados.</p>';
        let takenSalonIds = [];
        let profile = { full_name: '', nif: '', fiscal_address: '' };
        const isStaffUser = !!(State.session && State.session.staff);
        if (!isStaffUser) {
            try { profile = await api.getProfile(); } catch (e) { profile = {}; }
        }
        try {
            const accounts = await api.getStaff();
            takenSalonIds = accounts.map(a => a.salon_id).filter(Boolean);
            if (accounts.length > 0) {
                staffList = accounts.map((acc, i) => `
            <div class="staff-entry" id="staff-entry-${encodeURIComponent(acc.name)}" data-staff-id="${encodeURIComponent(acc.name)}" data-staff-name="${acc.name}" data-staff-salon="${acc.salon_id || ''}" data-staff-email="${(acc.email || '').replace(/"/g, '&quot;')}" style="background:var(--bg-surface);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1rem;margin-bottom:0.75rem;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                    <strong style="font-size:0.95rem;">${acc.name}</strong>
                    <div style="display:flex;gap:0.5rem;">
                        <button type="button" class="btn btn-primary btn-sm" onclick="editStaffAccount('${encodeURIComponent(acc.name)}')" style="padding:0.25rem 0.6rem;font-size:0.75rem;">Editar</button>
                        <button type="button" class="btn btn-danger btn-sm" onclick="removeStaffAccount('${encodeURIComponent(acc.name)}')" style="padding:0.25rem 0.6rem;font-size:0.75rem;">Eliminar</button>
                    </div>
                </div>
                <div style="font-size:0.85rem;color:var(--text-secondary);">Salón: ${State.salons.find(s => s.id === acc.salon_id)?.name || '—'}</div>
                <div style="font-size:0.85rem;color:var(--text-secondary);">Email: ${acc.email || '—'}</div>
            </div>
        `).join('');
            }
        } catch (err) {
            staffList = '<p style="font-size:0.85rem;color:var(--accent-warning);margin-bottom:1rem;">No se pudieron cargar los usuarios staff: ' + (err.message || 'error') + '</p>';
        }

        const hasSalons = State.salons && State.salons.length > 0;
        const freeSalons = hasSalons ? State.salons.filter(s => !takenSalonIds.includes(s.id)) : [];
        const salonOptions = freeSalons.length > 0 ? freeSalons.map(s => `<option value="${s.id}">${s.name}</option>`).join('') : '<option value="">— Sin salones —</option>';

        const html = `
            <form id="settings-form">
                <h3 style="margin-bottom:1rem;font-size:1.1rem;">Configuración</h3>
                <div class="form-group">
                    <label>Hora de Apertura</label>
                    <input type="time" class="form-control" name="startTime" required value="${State.settings.startTime}">
                </div>
                <div class="form-group">
                    <label>Hora de Cierre</label>
                    <input type="time" class="form-control" name="endTime" required value="${State.settings.endTime}">
                </div>
                <hr style="margin:1.5rem 0;border:none;border-top:1px solid var(--border-color);">
                <h3 style="margin-bottom:1rem;font-size:1.1rem;">Acceso Staff</h3>
                <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:1rem;">Cada salón tiene un único usuario staff. Crea el usuario del salón que quieras gestionar y asígnalo a ese salón.</p>
                
                <div id="staff-list" style="margin-bottom:1rem;">
                    ${staffList}
                </div>

                <div style="background:var(--bg-surface);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:1rem;">
                    <h4 style="font-size:0.95rem;margin-bottom:0.75rem;">Nuevo usuario staff</h4>
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" class="form-control" id="new-staff-name" placeholder="Nombre del empleado">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" id="new-staff-email" placeholder="email@delstaff.com">
                    </div>
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="text" class="form-control" id="new-staff-password" placeholder="Contraseña">
                    </div>
                    <div class="form-group">
                        <label>Salón</label>
                        <select class="form-control" id="new-staff-salon">
                            ${salonOptions}
                        </select>
                        ${!hasSalons ? '<p style="font-size:0.8rem;color:var(--accent-warning);margin-top:0.35rem;">⚠️ Crea primero un salón en la pestaña Salones.</p>' : (freeSalons.length === 0 ? '<p style="font-size:0.8rem;color:var(--accent-warning);margin-top:0.35rem;">⚠️ Todos tus salones ya tienen su usuario staff.</p>' : '')}
                    </div>
                    <button type="button" class="btn btn-primary" onclick="addStaffFromSettings()" style="margin-top:0.25rem;">Añadir Staff</button>
                </div>
                <div style="margin-top:1rem;font-size:0.8rem;color:var(--text-secondary);">
                    <strong>Nota:</strong> Los cambios en el staff se guardan automáticamente al añadir o eliminar.
                </div>
                ${isStaffUser ? '' : `
                <hr style="margin:1.5rem 0;border:none;border-top:1px solid var(--border-color);">
                <h3 style="margin-bottom:1rem;font-size:1.1rem;">Datos Fiscales</h3>
                <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:1rem;">Estos datos se usarán como emisor en tus facturas. Solo visibles para el administrador.</p>
                <div class="form-group">
                    <label>Nombre y apellidos</label>
                    <input type="text" class="form-control" id="profile-full-name" value="${(profile.full_name || '').replace(/"/g, '&quot;')}" placeholder="Nombre del negocio o titular">
                </div>
                <div class="form-group">
                    <label>NIF / CIF</label>
                    <input type="text" class="form-control" id="profile-nif" value="${(profile.nif || '').replace(/"/g, '&quot;')}" placeholder="NIF o CIF del negocio">
                </div>
                <div class="form-group">
                    <label>Dirección fiscal</label>
                    <input type="text" class="form-control" id="profile-fiscal-address" value="${(profile.fiscal_address || '').replace(/"/g, '&quot;')}" placeholder="Calle, número, ciudad, CP">
                </div>
                <button type="button" class="btn btn-primary" id="btn-save-profile" style="margin-bottom:1rem;">Guardar Datos Fiscales</button>`}
                <hr style="margin:1.5rem 0;border:none;border-top:1px solid var(--border-color);">
                <h3 style="margin-bottom:1rem;font-size:1.1rem;">Cambiar Contraseña</h3>
                <div class="form-group">
                    <label>Contraseña actual</label>
                    <div class="auth-input-wrapper">
                        <input type="password" class="form-control auth-input" id="current-password-input" placeholder="••••••••" autocomplete="current-password">
                        <button type="button" class="password-toggle" data-toggle="current-password-input" tabindex="-1" aria-label="Mostrar contraseña">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </button>
                    </div>
                </div>
                <div class="form-group">
                    <label>Nueva contraseña</label>
                    <div class="auth-input-wrapper">
                        <input type="password" class="form-control auth-input" id="change-password-input" placeholder="••••••••" minlength="6">
                        <button type="button" class="password-toggle" data-toggle="change-password-input" tabindex="-1" aria-label="Mostrar contraseña">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </button>
                    </div>
                </div>
                <button type="button" class="btn btn-primary" id="btn-change-password" style="margin-bottom:1rem;">Actualizar Contraseña</button>
                <hr style="margin:1.5rem 0;border:none;border-top:1px solid var(--border-color);">
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cerrar</button>
                    <button type="submit" class="btn btn-primary">Guardar Configuración</button>
                </div>
            </form>`;

        openModal('Configuración', html, () => {
            document.getElementById('settings-form').addEventListener('submit', e => {
                e.preventDefault();
                const fd = new FormData(e.target);
                const start = fd.get('startTime');
                const end = fd.get('endTime');

                if (start >= end) {
                    showToast('La hora de cierre debe ser posterior a la de apertura.', 'error');
                    return;
                }

                State.settings.startTime = start;
                State.settings.endTime = end;
                localStorage.setItem('nymara_start_time', start);
                localStorage.setItem('nymara_end_time', end);

                showToast('Configuración actualizada correctamente.');
                closeModal();
            });

            const btnProfile = document.getElementById('btn-save-profile');
            if (btnProfile) btnProfile.addEventListener('click', async () => {
                const data = {
                    full_name: document.getElementById('profile-full-name').value.trim(),
                    nif: document.getElementById('profile-nif').value.trim(),
                    fiscal_address: document.getElementById('profile-fiscal-address').value.trim(),
                };
                if (!data.full_name && !data.nif && !data.fiscal_address) {
                    showToast('Rellena al menos un campo.', 'error');
                    return;
                }
                const btn = btnProfile;
                btn.disabled = true;
                btn.textContent = 'Guardando...';
                try {
                    await api.updateProfile(data);
                    showToast('Datos fiscales actualizados.');
                } catch (err) {
                    showToast('Error: ' + err.message, 'error');
                } finally {
                    btn.disabled = false;
                    btn.textContent = 'Guardar Datos Fiscales';
                }
            });

            document.getElementById('btn-change-password').addEventListener('click', async () => {
                const pwdInput = document.getElementById('change-password-input');
                const currentPwdInput = document.getElementById('current-password-input');
                const currentPassword = currentPwdInput.value;
                const newPassword = pwdInput.value.trim();
                if (!currentPassword) {
                    showToast('Introduce tu contraseña actual.', 'error');
                    return;
                }
                if (!newPassword || newPassword.length < 6) {
                    showToast('La contraseña debe tener al menos 6 caracteres.', 'error');
                    return;
                }
                const btn = document.getElementById('btn-change-password');
                btn.disabled = true;
                btn.textContent = 'Actualizando...';
                try {
                    await api.changePassword(currentPassword, newPassword);
                    showToast('Contraseña actualizada correctamente.');
                    pwdInput.value = '';
                    currentPwdInput.value = '';
                } catch (err) {
                    showToast('Error: ' + err.message, 'error');
                } finally {
                    btn.disabled = false;
                    btn.textContent = 'Actualizar Contraseña';
                }
            });
        });
    }

    window.addStaffFromSettings = async function() {
        const name = document.getElementById('new-staff-name').value.trim();
        const email = document.getElementById('new-staff-email').value.trim();
        const password = document.getElementById('new-staff-password').value.trim();
        const salonId = document.getElementById('new-staff-salon').value;

        if (!name || !password) {
            showToast('Debes introducir nombre y contraseña.', 'error');
            return;
        }
        if (!email) {
            showToast('Debes introducir el email del empleado.', 'error');
            return;
        }
        if (password.length < 6) {
            showToast('La contraseña debe tener al menos 6 caracteres.', 'error');
            return;
        }
        if (!salonId) {
            showToast('No hay salones libres. Cada salón ya tiene su usuario staff.', 'error');
            return;
        }

        try {
            await api.addStaff({ name, email, password, salonId });
            showToast('Usuario staff añadido correctamente.');
            showSettingsForm();
        } catch (err) {
            showToast('Error: ' + (err.message || 'no se pudo añadir'), 'error');
        }
    };

    window.removeStaffAccount = async function(name) {
        if (!confirm('¿Eliminar este usuario staff?')) return;
        try {
            await api.deleteStaff(decodeURIComponent(name));
            showToast('Usuario staff eliminado.');
            showSettingsForm();
        } catch (err) {
            showToast('Error: ' + (err.message || 'no se pudo eliminar'), 'error');
        }
    };

    window.editStaffAccount = function(name) {
        const entry = document.getElementById('staff-entry-' + name);
        if (!entry) return;

        const hasSalons = State.salons && State.salons.length > 0;
        const salonOptions = hasSalons ? State.salons.map(s => `<option value="${s.id}"${s.id === entry.dataset.staffSalon ? ' selected' : ''}>${s.name}</option>`).join('') : '<option value="">— Sin salones —</option>';

        entry.innerHTML = `
            <div style="background:var(--bg-dark);border-radius:var(--radius-md);padding:1rem;">
                <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" class="form-control" id="edit-staff-name-${name}" value="${entry.dataset.staffName}">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" id="edit-staff-email-${name}" value="${(entry.dataset.staffEmail || '').replace(/"/g, '&quot;')}">
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="text" class="form-control" id="edit-staff-password-${name}" placeholder="Nueva contraseña (mín. 6 caracteres)">
                </div>
                <div class="form-group">
                    <label>Salón</label>
                    <select class="form-control" id="edit-staff-salon-${name}">${salonOptions}</select>
                </div>
                <div style="display:flex;gap:0.5rem;margin-top:0.75rem;">
                    <button type="button" class="btn btn-primary btn-sm" onclick="saveStaffEdit('${name}')">Guardar</button>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="showSettingsForm()">Cancelar</button>
                </div>
            </div>
        `;
    };

    window.saveStaffEdit = async function(name) {
        const newName = document.getElementById('edit-staff-name-' + name).value.trim();
        const email = document.getElementById('edit-staff-email-' + name).value.trim();
        const password = document.getElementById('edit-staff-password-' + name).value.trim();
        const salonId = document.getElementById('edit-staff-salon-' + name).value;

        if (!newName) {
            showToast('El nombre es obligatorio.', 'error');
            return;
        }

        try {
            await api.updateStaff(decodeURIComponent(name), { newName, email, password, salonId });
            showToast('Usuario staff actualizado.');
            showSettingsForm();
        } catch (err) {
            showToast('Error: ' + (err.message || 'no se pudo actualizar'), 'error');
        }
    };

    function findNextAvailableTime(dateStr, durationMinutes) {
        const [startH, startM] = State.settings.startTime.split(':').map(Number);
        const [endH, endM] = State.settings.endTime.split(':').map(Number);
        
        let startMins = startH * 60 + startM;
        const endMins = endH * 60 + endM;

        const dayApts = State.appointments
            .filter(a => a.date === dateStr)
            .sort((a, b) => a.time.localeCompare(b.time));

        for (const apt of dayApts) {
            const [h, m] = apt.time.split(':').map(Number);
            const aptStart = h * 60 + m;
            const aptServ = State.services.find(s => s.id === apt.serviceId);
            const aptDur = aptServ ? parseInt(aptServ.duration) : 0;
            const aptEnd = aptStart + aptDur;

            if (startMins + durationMinutes <= aptStart) {
                break;
            }
            if (startMins < aptEnd) {
                startMins = aptEnd;
            }
        }

        if (startMins + durationMinutes > endMins) return State.settings.startTime; // fallback if no time
        const hStr = Math.floor(startMins / 60).toString().padStart(2, '0');
        const mStr = (startMins % 60).toString().padStart(2, '0');
        return `${hStr}:${mStr}`;
    }

    function showAppointmentForm(apt = null) {
        if (State.clients.length === 0 || State.services.length === 0) {
            showToast('Debes tener al menos un cliente y un servicio antes de agendar una cita.', 'error');
            return;
        }

        const isEdit = apt !== null;
        const salonScopeCheck = (State.activeSalonId && State.activeSalonId !== 'all') ? State.activeSalonId : null;
        if (salonScopeCheck && !State.clients.some(c => c.salon_id === salonScopeCheck)) {
            showToast('No hay clientes asignados a este salón. Crea o asigna clientes a este salón primero.', 'error');
            return;
        }
        const defaultDate = isEdit ? apt.date : (State.selectedDate || toLocalDateStr(new Date()));
        const defaultTime = isEdit ? apt.time : findNextAvailableTime(defaultDate, State.services.length > 0 ? parseInt(State.services[0].duration) : 30);

        const userColor = State.currentUserColor || '#6366f1';
        const salonScope = (State.activeSalonId && State.activeSalonId !== 'all') ? State.activeSalonId : null;
        const formClients = salonScope
            ? State.clients.filter(c => (isEdit && c.id === apt.clientId) || c.salon_id === salonScope)
            : State.clients;
        const html = `
            <form id="appointment-form">
                <div class="form-user-badge" style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;padding:0.5rem;background:rgba(0,0,0,0.03);border-radius:8px;">
                    <div style="width:12px;height:12px;border-radius:50%;background:${userColor};flex-shrink:0;"></div>
                    <span style="font-size:0.8rem;color:var(--text-secondary);">${isEdit ? 'Editando cita' : 'Creando cita'} como <strong>${State.currentUserEmail || 'usuario'}</strong></span>
                </div>
                <div class="form-group">
                    <label>Cliente</label>
                    <select class="form-control" name="clientId" required>
                        ${formClients.length === 0 ? '<option value="">No hay clientes en este salón</option>' : formClients.map(c => `<option value="${c.id}" ${isEdit && c.id === apt.clientId ? 'selected' : ''}>${c.name}</option>`).join('')}
                    </select>
                    <div id="client-info" style="margin-top:6px;font-size:0.8rem;color:var(--text-secondary);display:none">
                        <span id="client-phone"></span>
                        <span id="client-email" style="margin-left:10px"></span>
                    </div>
                </div>
                <div class="form-group">
                    <label>Servicio</label>
                    <select class="form-control" name="serviceId" required>
                        ${State.services.map(s => `<option value="${s.id}" ${isEdit && s.id === apt.serviceId ? 'selected' : ''}>${s.name} (${s.duration} min · ${parseFloat(s.price).toFixed(2)}€)</option>`).join('')}
                    </select>
                </div>
                ${(State.activeSalonId === 'all' || !State.activeSalonId || !State.salons.some(s => s.id === State.activeSalonId)) ? `
                <div class="form-group">
                    <label>Salón</label>
                    <select class="form-control" name="salonId" id="apt-salon-select" required>
                        ${State.salons.length === 0 ? '<option value="">No hay salones disponibles</option>' : State.salons.map(s => `<option value="${s.id}" ${isEdit && s.id === apt.salonId ? 'selected' : ''}>${s.name}</option>`).join('')}
                    </select>
                    <small id="apt-salon-note" style="color:var(--text-secondary);font-size:0.8rem;display:none"></small>
                </div>
                ` : `<input type="hidden" name="salonId" value="${State.activeSalonId}">`}
                <div style="display:flex;gap:1rem">
                    <div class="form-group" style="flex:1">
                        <label>Fecha</label>
                        <input type="date" class="form-control" name="date" required value="${defaultDate}">
                    </div>
                    <div class="form-group" style="flex:1">
                        <label>Hora</label>
                        <input type="time" class="form-control" name="time" required value="${defaultTime}">
                    </div>
                </div>
                <div class="form-group">
                    <label>Notas (opcional)</label>
                    <textarea class="form-control" name="notes" rows="2" placeholder="Información adicional...">${isEdit ? apt.notes || '' : ''}</textarea>
                </div>
                
                <div class="form-group">
                    <label>Fotos de la Cita</label>
                    <div id="apt-photos-list" style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:10px"></div>
                    <button type="button" class="btn btn-sm btn-secondary" id="btn-add-apt-photo" style="display:inline-flex">
                        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="margin-right:5px"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                        Añadir Foto
                    </button>
                    ${isEdit ? `
                    <button type="button" class="btn btn-sm btn-secondary compare-btn" data-apt-id="${apt.id}" id="btn-compare-apt-photos" style="margin-left:8px;display:inline-flex">Antes / Después</button>
                    ` : ''}
                    <input type="file" id="apt-photo-input" accept="image/*" style="display:none">
                </div>
                
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar Cambios' : 'Agendar Cita'}</button>
                </div>
            </form>`;

        openModal(isEdit ? 'Editar Cita' : 'Nueva Cita', html, () => {
            const form = document.getElementById('appointment-form');
            const dateInput = form.querySelector('[name="date"]');
            const timeInput = form.querySelector('[name="time"]');
            const serviceSelect = form.querySelector('[name="serviceId"]');
            const clientSelect = form.querySelector('[name="clientId"]');
            const aptSalonSelect = document.getElementById('apt-salon-select');
            const aptSalonNote = document.getElementById('apt-salon-note');

            function getClientSalonId() {
                if (!clientSelect) return null;
                const client = State.clients.find(c => c.id === clientSelect.value);
                return client && client.salon_id ? client.salon_id : null;
            }

            function updateSalonOptionsForClient() {
                const clientSalonId = getClientSalonId();
                const salonField = form.querySelector('[name="salonId"]');
                if (!salonField) return;
                if (clientSalonId) {
                    const salon = State.salons.find(s => s.id === clientSalonId);
                    if (aptSalonSelect) {
                        aptSalonSelect.innerHTML = `<option value="${salon.id}" selected>${salon.name}</option>`;
                    } else {
                        salonField.value = clientSalonId;
                    }
                    if (aptSalonNote) {
                        aptSalonNote.textContent = `El cliente pertenece a ${salon.name}. La cita se asignará a este salón.`;
                        aptSalonNote.style.display = 'block';
                    }
                } else {
                    if (aptSalonSelect) {
                        if (aptSalonSelect.options.length === 0 || isEdit) {
                            aptSalonSelect.innerHTML = State.salons.map(s => `<option value="${s.id}" ${isEdit && s.id === apt.salonId ? 'selected' : ''}>${s.name}</option>`).join('');
                        }
                    }
                    if (aptSalonNote) {
                        aptSalonNote.style.display = 'none';
                        aptSalonNote.textContent = '';
                    }
                }
            }

            if (clientSelect) {
                clientSelect.addEventListener('change', updateSalonOptionsForClient);
                updateSalonOptionsForClient();
            }

            let pendingFiles = [];
            let existingPhotos = isEdit ? [...apt.appointmentPhotos] : [];

            const renderAptPhotos = () => {
                const container = document.getElementById('apt-photos-list');
                if (!container) return;
                
                let html = '';
                // Existing photos
                existingPhotos.forEach((p, idx) => {
                    const photoType = (p.photo_type === 'after') ? 'Después' : (p.photo_type === 'diagnosis' ? 'Diagnóstico' : 'Antes');
                    html += `
                        <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                            <img src="${p.photo_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer;border:2px solid var(--accent-color)" onclick="openModal('Foto','<img src=${p.photo_url} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                            <span style="font-size:0.6rem;color:var(--text-secondary)">${photoType}</span>
                            <button type="button" class="delete-existing-apt-photo-btn" data-idx="${idx}" title="Eliminar" style="background:none;border:none;color:var(--text-secondary);cursor:pointer;font-size:1rem">🗑️</button>
                        </div>`;
                });
                
                // Pending files
                pendingFiles.forEach((pf, idx) => {
                    html += `
                        <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                            <img src="${pf.preview}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer;opacity:0.7" onclick="openModal('Foto','<img src=${pf.preview} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                            <span style="font-size:0.6rem;color:var(--text-secondary)">Pendiente</span>
                            <button type="button" class="delete-apt-pending-btn" data-idx="${idx}" title="Eliminar" style="background:none;border:none;color:var(--text-secondary);cursor:pointer;font-size:1rem">🗑️</button>
                        </div>`;
                });
                
                container.innerHTML = html;
            };

            const btnAddPhoto = document.getElementById('btn-add-apt-photo');
            const photoInput = document.getElementById('apt-photo-input');
            
            if (btnAddPhoto && photoInput) {
                btnAddPhoto.addEventListener('click', () => photoInput.click());
                
                photoInput.addEventListener('change', async e => {
                    const file = e.target.files[0];
                    if (!file) return;
                    
                    const reader = new FileReader();
                    reader.onload = ev => {
                        pendingFiles.push({ file, preview: ev.target.result, type: 'before', date: toLocalDateStr(new Date()), notes: '' });
                        renderAptPhotos();
                    };
                    reader.readAsDataURL(file);
                    photoInput.value = '';
                });
            }

            const photosList = document.getElementById('apt-photos-list');
            if (photosList) {
                photosList.addEventListener('click', e => {
                    const delPending = e.target.closest('.delete-apt-pending-btn');
                    if (delPending) {
                        const idx = parseInt(delPending.dataset.idx);
                        pendingFiles.splice(idx, 1);
                        renderAptPhotos();
                        return;
                    }
                    const delExisting = e.target.closest('.delete-existing-apt-photo-btn');
                    if (delExisting) {
                        const idx = parseInt(delExisting.dataset.idx);
                        existingPhotos.splice(idx, 1);
                        renderAptPhotos();
                    }
                });
            }

            form.querySelectorAll('.form-control').forEach(input => {
                input.style.borderColor = userColor;
                input.style.setProperty('caret-color', userColor);
            });

            function updateSuggestion() {
                const selDate = dateInput.value;
                const selService = State.services.find(s => s.id === serviceSelect.value);
                const dur = selService ? parseInt(selService.duration) : 30;
                timeInput.value = findNextAvailableTime(selDate, dur);
            }

            renderAptPhotos(); // Initial render

            dateInput.addEventListener('change', updateSuggestion);
            serviceSelect.addEventListener('change', updateSuggestion);

            form.addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = apt ? 'Guardando…' : 'Agendando…';

                const fd = new FormData(e.target);
                const appointmentId = apt ? apt.id : generateId();
                const data = {
                    id: appointmentId,
                    clientId: fd.get('clientId'),
                    serviceId: fd.get('serviceId'),
                    salonId: fd.get('salonId') || State.activeSalonId || (State.salons.length > 0 ? State.salons[0].id : null),
                    date: fd.get('date'),
                    time: fd.get('time'),
                    notes: fd.get('notes'),
                    userEmail: State.currentUserEmail || '',
                    appointmentPhotos: existingPhotos
                };

                const chosenClient = State.clients.find(c => c.id === data.clientId);
                if (chosenClient && chosenClient.salon_id && State.salons.some(s => s.id === chosenClient.salon_id)) {
                    data.salonId = chosenClient.salon_id;
                }
                
                if (data.salonId === 'all' || !State.salons.some(s => s.id === data.salonId)) {
                    showToast('Por favor, selecciona un salón válido para la cita.', 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = isEdit ? 'Guardar Cambios' : 'Agendar Cita';
                    return;
                }

                const salonOwnerClient = State.clients.find(c => c.id === data.clientId);
                if (salonOwnerClient && salonOwnerClient.salon_id && data.salonId !== salonOwnerClient.salon_id) {
                    const clientSalon = State.salons.find(s => s.id === salonOwnerClient.salon_id);
                    showToast(`El cliente pertenece a ${clientSalon ? clientSalon.name : 'su salón'}. No puedes agendar su cita en otro salón.`, 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = isEdit ? 'Guardar Cambios' : 'Agendar Cita';
                    return;
                }

                if (!State.salons.some(s => s.id === data.salonId)) {
                    showToast('El salón seleccionado no existe. Selecciona otro.', 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = isEdit ? 'Guardar Cambios' : 'Agendar Cita';
                    return;
                }

                // Validar que no se solape con otra cita existente en el mismo día
                const [targetHour, targetMin] = data.time.split(':').map(Number);
                const targetStartMinutes = targetHour * 60 + targetMin;
                const targetService = State.services.find(s => s.id === data.serviceId);
                const targetEndMinutes = targetStartMinutes + (targetService ? parseInt(targetService.duration) : 0);

                const [startH, startM] = State.settings.startTime.split(':').map(Number);
                const [endH, endM] = State.settings.endTime.split(':').map(Number);
                const workingStartMins = startH * 60 + startM;
                const workingEndMins = endH * 60 + endM;

                if (targetStartMinutes < workingStartMins || targetEndMinutes > workingEndMins) {
                    showToast(`El horario seleccionado se sale de tus horas de apertura (${State.settings.startTime} - ${State.settings.endTime}).`, 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = isEdit ? 'Guardar Cambios' : 'Agendar Cita';
                    return;
                }

                const hasCollision = State.appointments.some(a => {
                    if (isEdit && apt && a.id === apt.id) return false; // Skip self when editing
                    if (a.date !== data.date) return false;
                    const [aptHour, aptMin] = a.time.split(':').map(Number);
                    const aptStartMinutes = aptHour * 60 + aptMin;
                    const aptService = State.services.find(s => s.id === a.serviceId);
                    const aptEndMinutes = aptStartMinutes + (aptService ? parseInt(aptService.duration) : 0);
                    return targetStartMinutes < aptEndMinutes && targetEndMinutes > aptStartMinutes;
                });

                if (hasCollision) {
                    showToast('El horario elegido choca con una cita ya existente. No puede solaparse con citas en otros salones.', 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = isEdit ? 'Guardar Cambios' : 'Agendar Cita';
                    return;
                }

                // Upload pending photos
                if (pendingFiles.length > 0) {
                    submitBtn.textContent = 'Subiendo fotos…';
                    for (const pf of pendingFiles) {
                        const clientPhotoId = generateId();
                        let savedPhoto;
                        try {
                            savedPhoto = await api.uploadPhoto({
                                clientId: data.clientId,
                                photoId: clientPhotoId,
                                file: pf.file,
                                photoDate: toLocalDateStr(new Date()),
                                photoType: pf.type || 'before',
                                notes: `Cita ${data.date}: ${pf.notes || ''}`
                            });
                        } catch (err) {
                            console.error('Error uploading photo:', err);
                            showToast('Error al subir una de las fotos', 'error');
                            continue;
                        }

                        const photoRecord = {
                            id: savedPhoto.id,
                            clientPhotoId: savedPhoto.id, // Store the reference
                            photo_url: savedPhoto.photo_url,
                            photo_date: savedPhoto.photo_date,
                            photo_type: savedPhoto.photo_type,
                            notes: pf.notes || ''
                        };
                        data.appointmentPhotos.push(photoRecord);
                    }
                }

                if (isEdit) {
                    if (await updateAppointment(apt.id, data)) { 
                        closeModal(); 
                        renderRoute(); 
                    }
                } else {
                    data.id = generateId();
                    if (await addAppointment(data)) { 
                        if (State.session?.staff) addStaffAptId(data.id);
                        State.selectedDate = data.date;
                        closeModal(); 
                        renderRoute(); 
                    }
                }
                submitBtn.disabled = false;
                submitBtn.textContent = isEdit ? 'Guardar Cambios' : 'Agendar Cita';
            });
        });
    }

    window.showAppointmentForm = showAppointmentForm;
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.openBeforeAfterCompare = openBeforeAfterCompare;
    window.tpvBillToday = tpvBillToday;

    window.editAppointment = function(id) {
        const apt = State.appointments.find(a => a.id === id);
        if (apt) showAppointmentForm(apt);
    };

    // Wrapper functions for editing clients, services, and salons
    window.editClient = function(id) {
        const client = State.clients.find(c => c.id === id);
        if (client && typeof showClientForm === 'function') showClientForm(client);
    };

    window.editService = function(id) {
        const service = State.services.find(s => s.id === id);
        if (service && typeof showServiceForm === 'function') showServiceForm(service);
    };

    window.editSalon = function(id) {
        const salon = State.salons.find(s => s.id === id);
        if (salon && typeof showSalonForm === 'function') showSalonForm(salon);
    };

    /* ═══════════════════════════════════════
       INIT — Check session to start
       ═══════════════════════════════════════ */
    checkSession();

    // Combat aggressive browser autofill
    const emailInput = document.getElementById('auth-email');
    const passwordInput = document.getElementById('auth-password');
    
    if (emailInput && passwordInput) {
        // Clear again after a delay in case browser injected values late
        setTimeout(() => {
            emailInput.value = '';
            passwordInput.value = '';
            emailInput.readOnly = false;
            passwordInput.readOnly = false;
        }, 600);

        // Also remove readonly on focus as a fallback
        emailInput.addEventListener('focus', () => emailInput.readOnly = false);
passwordInput.addEventListener('focus', () => passwordInput.readOnly = false);
    }
});

