const kanjiData = [
    { kanji: "魚", hiragana: "さかな", romaji: "sakana", meaning: "Ikan" },
    { kanji: "肉", hiragana: "にく", romaji: "niku", meaning: "Daging" },
    { kanji: "卵", hiragana: "たまご", romaji: "tamago", meaning: "Telur" },
    { kanji: "水", hiragana: "みず", romaji: "mizu", meaning: "Air" },
    { kanji: "食べます", hiragana: "たべます", romaji: "tabemasu", meaning: "Makan" },
    { kanji: "飲みます", hiragana: "のみます", romaji: "nomimasu", meaning: "Minum" },
    { kanji: "大きい", hiragana: "おおきい", romaji: "ookii", meaning: "Besar" },
    { kanji: "小さい", hiragana: "ちいさい", romaji: "chiisai", meaning: "Kecil" },
    { kanji: "新しい", hiragana: "あたらしい", romaji: "atarashii", meaning: "Baru" },
    { kanji: "古い", hiragana: "ふるい", romaji: "furui", meaning: "Lama, tua" },
    { kanji: "~時", hiragana: "~じ", romaji: "~ji", meaning: "~jam" },
    { kanji: "~分", hiragana: "~ふん、ぷん", romaji: "~fun, pun", meaning: "~menit" },
    { kanji: "~半", hiragana: "~はん", romaji: "~han", meaning: "~setengah" },
    { kanji: "月曜日", hiragana: "げつようび", romaji: "getsuyoubi", meaning: "Hari Senin" },
    { kanji: "火曜日", hiragana: "かようび", romaji: "kayoubi", meaning: "Hari Selasa" },
    { kanji: "水曜日", hiragana: "すいようび", romaji: "suiyoubi", meaning: "Hari Rabu" },
    { kanji: "木曜日", hiragana: "もくようび", romaji: "mokuyoubi", meaning: "Kamis" },
    { kanji: "金曜日", hiragana: "きんようび", romaji: "kinyoubi", meaning: "Hari Jumat" },
    { kanji: "土曜日", hiragana: "どようび", romaji: "doyoubi", meaning: "Hari Sabtu" },
    { kanji: "日曜日", hiragana: "にちようび", romaji: "nichiyoubi", meaning: "Hari Minggu" },
    { kanji: "言います", hiragana: "いいます", romaji: "iimasu", meaning: "Berkata" },
    { kanji: "話します", hiragana: "はなします", romaji: "hanashimasu", meaning: "Berbicara" },
    { kanji: "読みます", hiragana: "よみます", romaji: "yomimasu", meaning: "Membaca" },
    { kanji: "見ます", hiragana: "みます", romaji: "mimasu", meaning: "Melihat" },
    { kanji: "聞きます", hiragana: "ききます", romaji: "kikimasu", meaning: "Mendengarkan" },
    { kanji: "書きます", hiragana: "かきます", romaji: "kakimasu", meaning: "Menulis" },
    { kanji: "一", hiragana: "いち", romaji: "ichi", meaning: "Satu" },
    { kanji: "二", hiragana: "に", romaji: "ni", meaning: "Dua" },
    { kanji: "三", hiragana: "さん", romaji: "san", meaning: "Tiga" },
    { kanji: "四", hiragana: "よん、し", romaji: "yon, shi", meaning: "Empat" },
    { kanji: "五", hiragana: "ご", romaji: "go", meaning: "Lima" },
    { kanji: "六", hiragana: "ろく", romaji: "roku", meaning: "Enam" },
    { kanji: "七", hiragana: "なな、しち", romaji: "nana, shichi", meaning: "Tujuh" },
    { kanji: "八", hiragana: "はち", romaji: "hachi", meaning: "Delapan" },
    { kanji: "九", hiragana: "きゅう", romaji: "kyuu", meaning: "Sembilan" },
    { kanji: "十", hiragana: "じゅう", romaji: "juu", meaning: "Sepuluh" },
    { kanji: "~年", hiragana: "~ねん", romaji: "~nen", meaning: "~tahun" },
    { kanji: "~月", hiragana: "~がつ", romaji: "~gatsu", meaning: "~bulan" },
    { kanji: "~日", hiragana: "~にち", romaji: "~nichi", meaning: "~tanggal" },
    { kanji: "東", hiragana: "ひがし", romaji: "higashi", meaning: "Timur" },
    { kanji: "西", hiragana: "にし", romaji: "nishi", meaning: "Barat" },
    { kanji: "南", hiragana: "みなみ", romaji: "minami", meaning: "Selatan" },
    { kanji: "北", hiragana: "きた", romaji: "kita", meaning: "Utara" },
    { kanji: "～口", hiragana: "～ぐち", romaji: "~guchi", meaning: "~pintu" },
    { kanji: "東口", hiragana: "ひがしぐち", romaji: "higashiguchi", meaning: "Pintu timur" },
    { kanji: "西口", hiragana: "にしぐち", romaji: "nishiguchi", meaning: "Pintu barat" },
    { kanji: "南口", hiragana: "みなみぐち", romaji: "minamiguchi", meaning: "Pintu selatan" },
    { kanji: "北口", hiragana: "きたぐち", romaji: "kitaguchi", meaning: "Pintu utara" },
    { kanji: "買います", hiragana: "かいます", romaji: "kaimasu", meaning: "Membeli" },
    { kanji: "買い物", hiragana: "かいもの", romaji: "kaimono", meaning: "Belanja" },
    { kanji: "お金", hiragana: "おかね", romaji: "okane", meaning: "Uang" },
    { kanji: "~円", hiragana: "~えん", romaji: "~en", meaning: "~yen" },
    { kanji: "百", hiragana: "ひゃく", romaji: "hyaku", meaning: "100" },
    { kanji: "千", hiragana: "せん", romaji: "sen", meaning: "1000" },
    { kanji: "万", hiragana: "まん", romaji: "man", meaning: "10000" },
    { kanji: "百円", hiragana: "ひゃくえん", romaji: "hyakuen", meaning: "100 yen" },
    { kanji: "千円", hiragana: "せんえん", romaji: "sen'en", meaning: "1000 yen" },
    { kanji: "一万円", hiragana: "いちまんえん", romaji: "ichiman'en", meaning: "10000 yen" },
    { kanji: "行きます", hiragana: "いきます", romaji: "ikimasu", meaning: "Pergi" },
    { kanji: "来ます", hiragana: "きます", romaji: "kimasu", meaning: "Datang" },
    { kanji: "会います", hiragana: "あいます", romaji: "aimasu", meaning: "Bertemu" },
    { kanji: "休みます", hiragana: "やすみます", romaji: "yasumimasu", meaning: "Libur, istirahat" },
    { kanji: "日本", hiragana: "にほん", romaji: "nihon", meaning: "Jepang" },
    { kanji: "東京", hiragana: "とうきょう", romaji: "toukyou", meaning: "Tokyo" },
    { kanji: "私", hiragana: "わたし", romaji: "watashi", meaning: "Saya" },
    { kanji: "父", hiragana: "ちち", romaji: "chichi", meaning: "Ayah" },
    { kanji: "母", hiragana: "はは", romaji: "haha", meaning: "Ibu" },
    { kanji: "子供", hiragana: "こども", romaji: "kodomo", meaning: "Anak" },
    { kanji: "男", hiragana: "おとこ", romaji: "otoko", meaning: "Laki-laki" },
    { kanji: "女", hiragana: "おんな", romaji: "onna", meaning: "Perempuan" },
    { kanji: "人", hiragana: "ひと", romaji: "hito", meaning: "Orang" },
    { kanji: "お父さん", hiragana: "おとうさん", romaji: "otousan", meaning: "Ayah (orang lain)" },
    { kanji: "お母さん", hiragana: "おかあさん", romaji: "okaasan", meaning: "Ibu (orang lain)" },
    { kanji: "何人", hiragana: "なんにん", romaji: "nannin", meaning: "Berapa orang?" },
    { kanji: "国", hiragana: "くに", romaji: "kuni", meaning: "Negara" },
    { kanji: "外国", hiragana: "がいこく", romaji: "gaikoku", meaning: "Luar negeri" },
    { kanji: "～語", hiragana: "～ご", romaji: "~go", meaning: "~Bahasa" },
    { kanji: "日本語", hiragana: "にほんご", romaji: "nihongo", meaning: "Bahasa Jepang" },
    { kanji: "英語", hiragana: "えいご", romaji: "eigo", meaning: "Bahasa Inggris" },
    { kanji: "中国語", hiragana: "ちゅうごくご", romaji: "chuugokugo", meaning: "Bahasa China" },
    { kanji: "～人", hiragana: "～じん/～にん", romaji: "~jin/~nin", meaning: "~orang" },
    { kanji: "日本人", hiragana: "にほんじん", romaji: "nihonjin", meaning: "Orang Jepang" },
    { kanji: "好き", hiragana: "すき", romaji: "suki", meaning: "Suka" },
    { kanji: "本", hiragana: "ほん", romaji: "hon", meaning: "Buku" },
    { kanji: "読書", hiragana: "どくしょ", romaji: "dokusho", meaning: "Bacaan" },
    { kanji: "何", hiragana: "なに", romaji: "nani", meaning: "Apa?" },
    { kanji: "春", hiragana: "はる", romaji: "haru", meaning: "Musim semi" },
    { kanji: "夏", hiragana: "なつ", romaji: "natsu", meaning: "Musim panas" },
    { kanji: "秋", hiragana: "あき", romaji: "aki", meaning: "Musim gugur" },
    { kanji: "冬", hiragana: "ふゆ", romaji: "fuyu", meaning: "Musim dingin" },
    { kanji: "今", hiragana: "いま", romaji: "ima", meaning: "Sekarang" },
    { kanji: "花", hiragana: "はな", romaji: "hana", meaning: "Bunga" },
    { kanji: "海", hiragana: "うみ", romaji: "umi", meaning: "Laut" },
    { kanji: "山", hiragana: "やま", romaji: "yama", meaning: "Gunung" },
    { kanji: "川", hiragana: "かわ", romaji: "kawa", meaning: "Sungai" },
    { kanji: "今日", hiragana: "きょう", romaji: "kyou", meaning: "Hari ini" },
    { kanji: "天気", hiragana: "てんき", romaji: "tenki", meaning: "Cuaca" },
    { kanji: "晴れ", hiragana: "はれ", romaji: "hare", meaning: "Cerah" },
    { kanji: "雨", hiragana: "あめ", romaji: "ame", meaning: "Hujan" },
    { kanji: "雪", hiragana: "ゆき", romaji: "yuki", meaning: "Salju" },
    { kanji: "雲", hiragana: "くも", romaji: "kumo", meaning: "Mendung" },
    { kanji: "風", hiragana: "かぜ", romaji: "kaze", meaning: "Angin" },
    { kanji: "空", hiragana: "そら", romaji: "sora", meaning: "Langit" },
    { kanji: "町", hiragana: "まち", romaji: "machi", meaning: "Kota" },
    { kanji: "店", hiragana: "みせ", romaji: "mise", meaning: "Toko" },
    { kanji: "人気", hiragana: "にんき", romaji: "ninki", meaning: "Popularitas, ketenaran" },
    { kanji: "多い", hiragana: "おおい", romaji: "ooi", meaning: "Banyak(orang)" },
    { kanji: "少ない", hiragana: "すくない", romaji: "sukunai", meaning: "Sedikit" },
    { kanji: "高い", hiragana: "たかい", romaji: "takai", meaning: "Tinggi/Mahal" },
    { kanji: "安い", hiragana: "やすい", romaji: "yasui", meaning: "Murah" },
    { kanji: "広い", hiragana: "ひろい", romaji: "hiroi", meaning: "Luas" },
    { kanji: "道", hiragana: "みち", romaji: "michi", meaning: "Jalan" },
    { kanji: "通り", hiragana: "とおり", romaji: "toori", meaning: "Jalan" },
    { kanji: "右", hiragana: "みぎ", romaji: "migi", meaning: "Kanan" },
    { kanji: "左", hiragana: "ひだり", romaji: "hidari", meaning: "Kiri" },
    { kanji: "一つ", hiragana: "ひとつ", romaji: "hitotsu", meaning: "Satu buah" },
    { kanji: "二つ", hiragana: "ふたつ", romaji: "futatsu", meaning: "Dua buah" },
    { kanji: "赤い", hiragana: "あかい", romaji: "akai", meaning: "Merah" },
    { kanji: "青い", hiragana: "あおい", romaji: "aoi", meaning: "Biru" },
    { kanji: "黒い", hiragana: "くろい", romaji: "kuroi", meaning: "Hitam" },
    { kanji: "白い", hiragana: "しろい", romaji: "shiroi", meaning: "Putih" },
    { kanji: "時間", hiragana: "じかん", romaji: "jikan", meaning: "Waktu" },
    { kanji: "場所", hiragana: "ばしょ", romaji: "basho", meaning: "Tempat" },
    { kanji: "駅", hiragana: "えき", romaji: "eki", meaning: "Stasiun" },
    { kanji: "太陽", hiragana: "たいよう", romaji: "taiyou", meaning: "Matahari" },
    { kanji: "月", hiragana: "つき", romaji: "tsuki", meaning: "Bulan" },
    { kanji: "機会", hiragana: "きかい", romaji: "kikai", meaning: "Kesempatan, peluang" },
    { kanji: "出かけます", hiragana: "でかけます", romaji: "dekakemasu", meaning: "Meninggalkan rumah" },
    { kanji: "待ちます", hiragana: "まちます", romaji: "machimasu", meaning: "Menunggu" },
    { kanji: "止まります", hiragana: "とまります", romaji: "tomarimasu", meaning: "Berhenti" },
    { kanji: "食事", hiragana: "しょくじ", romaji: "shokuji", meaning: "Makan bersama" },
    { kanji: "仕事", hiragana: "しごと", romaji: "shigoto", meaning: "Pekerjaan" },
    { kanji: "前", hiragana: "まえ", romaji: "mae", meaning: "Sebelum" },
    { kanji: "後", hiragana: "あと", romaji: "ato", meaning: "Setelah" },
    { kanji: "朝", hiragana: "あさ", romaji: "asa", meaning: "Pagi" },
    { kanji: "昼", hiragana: "ひる", romaji: "hiru", meaning: "Siang" },
    { kanji: "夜", hiragana: "よる", romaji: "yoru", meaning: "Malam" },
    { kanji: "乗ります", hiragana: "のります", romaji: "norimasu", meaning: "Naik" },
    { kanji: "学校", hiragana: "がっこう", romaji: "gakkou", meaning: "Sekolah" },
    { kanji: "小学校", hiragana: "しょうがっこう", romaji: "shougakkou", meaning: "SD" },
    { kanji: "中学校", hiragana: "ちゅうがっこう", romaji: "chuugakkou", meaning: "SMP" },
    { kanji: "高校", hiragana: "こうこう", romaji: "koukou", meaning: "SMA" },
    { kanji: "大学", hiragana: "だいがく", romaji: "daigaku", meaning: "Universitas" },
    { kanji: "先生", hiragana: "せんせい", romaji: "sensei", meaning: "Guru" },
    { kanji: "学生", hiragana: "がくせい", romaji: "gakusei", meaning: "Murid, siswa" },
    { kanji: "～年生", hiragana: "～ねんせい", romaji: "~nensei", meaning: "Kelas ~" },
    { kanji: "勉強", hiragana: "べんきょう", romaji: "benkyou", meaning: "Pelajaran" },
    { kanji: "文化", hiragana: "ぶんか", romaji: "bunka", meaning: "Kebudayaan" },
    { kanji: "音楽", hiragana: "おんがく", romaji: "ongaku", meaning: "Musik" },
    { kanji: "旅行", hiragana: "りょこう", romaji: "ryokou", meaning: "Wisata" },
    { kanji: "留学", hiragana: "りゅうがく", romaji: "ryuugaku", meaning: "Belajar di luar negeri" },
    { kanji: "友達", hiragana: "ともだち", romaji: "tomodachi", meaning: "Teman" },
    { kanji: "楽しい", hiragana: "たのしい", romaji: "tanoshii", meaning: "Gembira/senang" },
    { kanji: "週", hiragana: "しゅう", romaji: "shuu", meaning: "Minggu" },
    { kanji: "～回", hiragana: "～かい", romaji: "~kai", meaning: "~kali" },
    { kanji: "食べ物", hiragana: "たべもの", romaji: "tabemono", meaning: "Makanan" },
    { kanji: "飲物", hiragana: "のみもの", romaji: "nomimono", meaning: "Minuman" },
    { kanji: "お茶", hiragana: "おちゃ", romaji: "ocha", meaning: "Teh hijau" },
    { kanji: "お酒", hiragana: "おさけ", romaji: "osake", meaning: "Sake" },
    { kanji: "作ります", hiragana: "つくります", romaji: "tsukurimasu", meaning: "Membuat" },
    { kanji: "持っていきます", hiragana: "もっていきます", romaji: "motteikimasu", meaning: "Membawa pergi" },
    { kanji: "お願いします", hiragana: "おねがいします", romaji: "onegaishimasu", meaning: "Tolong" },
    { kanji: "料理", hiragana: "りょうり", romaji: "ryouri", meaning: "Masakan" },
    { kanji: "味", hiragana: "あじ", romaji: "aji", meaning: "Rasa" },
    { kanji: "色", hiragana: "いろ", romaji: "iro", meaning: "Warna" },
    { kanji: "野菜", hiragana: "やさい", romaji: "yasai", meaning: "Sayuran" },
    { kanji: "少し", hiragana: "すこし", romaji: "sukoshi", meaning: "Sedikit" },
    { kanji: "中", hiragana: "なか", romaji: "naka", meaning: "Dalam" },
    { kanji: "入っています", hiragana: "はいっています", romaji: "haitteimasu", meaning: "Masuk" },
    { kanji: "会社", hiragana: "かいしゃ", romaji: "kaisha", meaning: "Perusahaan" },
    { kanji: "本社", hiragana: "ほんしゃ", romaji: "honsha", meaning: "Kantor pusat" },
    { kanji: "支社", hiragana: "ししゃ", romaji: "shisha", meaning: "Kantor cabang" },
    { kanji: "出張", hiragana: "しゅっちょう", romaji: "shucchou", meaning: "Dinas luar kota" },
    { kanji: "空港", hiragana: "くうこう", romaji: "kuukou", meaning: "Bandara" },
    { kanji: "出発", hiragana: "しゅっぱつ", romaji: "shuppatsu", meaning: "Keberangkatan" },
    { kanji: "到着", hiragana: "とうちゃく", romaji: "touchaku", meaning: "Kedatangan" },
    { kanji: "午前", hiragana: "ごぜん", romaji: "gozen", meaning: "AM" },
    { kanji: "午後", hiragana: "ごご", romaji: "gogo", meaning: "PM" },
    { kanji: "自分", hiragana: "じぶん", romaji: "jibun", meaning: "Sendiri" },
    { kanji: "電話", hiragana: "でんわ", romaji: "denwa", meaning: "Telepon" },
    { kanji: "電気", hiragana: "でんき", romaji: "denki", meaning: "Listrik" },
    { kanji: "書類", hiragana: "しょるい", romaji: "shorui", meaning: "dokumen" },
    { kanji: "資料", hiragana: "しりょう", romaji: "shiryou", meaning: "Data, bahan" },
    { kanji: "電車", hiragana: "でんしゃ", romaji: "densha", meaning: "Kereta" },
    { kanji: "車", hiragana: "くるま", romaji: "kuruma", meaning: "Mobil" },
    { kanji: "送ります", hiragana: "おくります", romaji: "okurimasu", meaning: "Mengirim" },
    { kanji: "使います", hiragana: "つかいます", romaji: "tsukaimasu", meaning: "Menggunakan" },
    { kanji: "借ります", hiragana: "かります", romaji: "karimasu", meaning: "Meminjam" },
    { kanji: "体", hiragana: "からだ", romaji: "karada", meaning: "Badan" },
    { kanji: "頭", hiragana: "あたま", romaji: "atama", meaning: "Kepala" },
    { kanji: "目", hiragana: "め", romaji: "me", meaning: "Mata" },
    { kanji: "口", hiragana: "くち", romaji: "kuchi", meaning: "Mulut" },
    { kanji: "耳", hiragana: "みみ", romaji: "mimi", meaning: "Telinga" },
    { kanji: "手", hiragana: "て", romaji: "te", meaning: "Tangan" },
    { kanji: "足", hiragana: "あし", romaji: "ashi", meaning: "Kaki" },
    { kanji: "上", hiragana: "うえ", romaji: "ue", meaning: "Atas" },
    { kanji: "下", hiragana: "した", romaji: "shita", meaning: "Bawah" },
    { kanji: "毎～", hiragana: "まい～", romaji: "mai~", meaning: "~setiap" },
    { kanji: "毎朝", hiragana: "まいあさ", romaji: "maiasa", meaning: "Setiap pagi" },
    { kanji: "毎日", hiragana: "まいにち", romaji: "mainichi", meaning: "Setiap hari" },
    { kanji: "週末", hiragana: "しゅうまつ", romaji: "shuumatsu", meaning: "Akhir pekan" },
    { kanji: "元気", hiragana: "げんき", romaji: "genki", meaning: "Sehat" },
    { kanji: "外", hiragana: "そと", romaji: "soto", meaning: "Luar" },
    { kanji: "起きます", hiragana: "おきます", romaji: "okimasu", meaning: "Bangun tidur" },
    { kanji: "歩きます", hiragana: "あるきます", romaji: "arukimasu", meaning: "Berjalan" },
    { kanji: "走ります", hiragana: "はしります", romaji: "hashirimasu", meaning: "Berlari" },
    { kanji: "泳ぎます", hiragana: "およぎます", romaji: "oyogimasu", meaning: "Berenang" },
    { kanji: "お祝い", hiragana: "おいわい", romaji: "oiwai", meaning: "Perayaan" },
    { kanji: "誕生日", hiragana: "たんじょうび", romaji: "tanjoubi", meaning: "Ulang tahun" },
    { kanji: "結婚", hiragana: "けっこん", romaji: "kekkon", meaning: "Pernikahan" },
    { kanji: "絵", hiragana: "え", romaji: "e", meaning: "Gambar, lukisan" },
    { kanji: "写真", hiragana: "しゃしん", romaji: "shashin", meaning: "Foto" },
    { kanji: "時計", hiragana: "とけい", romaji: "tokei", meaning: "Jam" },
    { kanji: "着ます", hiragana: "きます", romaji: "kimasu", meaning: "Memakai pakaian" },
    { kanji: "先～", hiragana: "せん～", romaji: "sen~", meaning: "~lalu" },
    { kanji: "先週", hiragana: "せんしゅう", romaji: "senshuu", meaning: "Minggu lalu" },
    { kanji: "今月", hiragana: "こんげつ", romaji: "kongetsu", meaning: "Bulan ini" },
    { kanji: "来年", hiragana: "らいねん", romaji: "rainen", meaning: "Tahun depan" },
    { kanji: "今年", hiragana: "ことし", romaji: "kotoshi", meaning: "Tahun ini" },
    { kanji: "去年", hiragana: "きょねん", romaji: "kyonen", meaning: "Tahun lalu" },
    { kanji: "家", hiragana: "いえ", romaji: "ie", meaning: "Rumah" },
    { kanji: "思います", hiragana: "おもいます", romaji: "omoimasu", meaning: "Mengira/berpikir" },
    { kanji: "自己紹介", hiragana: "じこしょうかい", romaji: "jikoshoukai", meaning: "Perkenalan" },
    { kanji: "名前", hiragana: "なまえ", romaji: "namae", meaning: "Nama" },
    { kanji: "意味", hiragana: "いみ", romaji: "imi", meaning: "Arti" },
    { kanji: "本屋", hiragana: "ほんや", romaji: "honya", meaning: "Toko buku" },
    { kanji: "近く", hiragana: "ちかく", romaji: "chikaku", meaning: "Dekat" },
    { kanji: "住みます", hiragana: "すみます", romaji: "sumimasu", meaning: "Tinggal" },
    { kanji: "働きます", hiragana: "はたらきます", romaji: "hatarakimasu", meaning: "Bekerja" },
    { kanji: "～番目", hiragana: "～ばんめ", romaji: "~banme", meaning: "Urutan yang ~" },
    { kanji: "兄", hiragana: "あに", romaji: "ani", meaning: "Kakak laki-laki (sendiri)" },
    { kanji: "お兄さん", hiragana: "おにいさん", romaji: "oniisan", meaning: "Kakak laki-laki (orang lain)" },
    { kanji: "姉", hiragana: "あね", romaji: "ane", meaning: "Kakak perempuan (sendiri)" },
    { kanji: "お姉さん", hiragana: "おねえさん", romaji: "oneesan", meaning: "Kakak perempuan (orang lain)" },
    { kanji: "弟", hiragana: "おとうと", romaji: "otouto", meaning: "Adik laki-laki (sendiri)" },
    { kanji: "妹", hiragana: "いもうと", romaji: "imouto", meaning: "Adik perempuan (sendiri)" },
    { kanji: "家族", hiragana: "かぞく", romaji: "kazoku", meaning: "Keluarga" },
    { kanji: "兄弟", hiragana: "きょうだい", romaji: "kyoudai", meaning: "Saudara kandung" },
    { kanji: "姉妹", hiragana: "しまい", romaji: "shimai", meaning: "Saudara perempuan" },
    { kanji: "長い", hiragana: "ながい", romaji: "nagai", meaning: "Panjang" },
    { kanji: "短い", hiragana: "みじかい", romaji: "mijikai", meaning: "Pendek" },
    { kanji: "低い", hiragana: "ひくい", romaji: "hikui", meaning: "Rendah" },
    { kanji: "上手", hiragana: "じょうず", romaji: "jouzu", meaning: "Pandai" },
    { kanji: "歌", hiragana: "うた", romaji: "uta", meaning: "Lagu" },
    { kanji: "歌います", hiragana: "うたいます", romaji: "utaimasu", meaning: "Menyanyi" },
    { kanji: "客", hiragana: "きゃく", romaji: "kyaku", meaning: "Tamu" },
    { kanji: "注文", hiragana: "ちゅうもん", romaji: "chuumon", meaning: "Pesanan" },
    { kanji: "洋食", hiragana: "ようしょく", romaji: "youshoku", meaning: "Makanan barat" },
    { kanji: "和食", hiragana: "わしょく", romaji: "washoku", meaning: "Makanan Jepang" },
    { kanji: "地方", hiragana: "ちほう", romaji: "chihou", meaning: "Daerah, wilayah" },
    { kanji: "有名", hiragana: "ゆうめい", romaji: "yuumei", meaning: "Terkenal" },
    { kanji: "生", hiragana: "なま", romaji: "nama", meaning: "Mentah" },
    { kanji: "冷たい", hiragana: "つめたい", romaji: "tsumetai", meaning: "Dingin (benda)" },
    { kanji: "ご飯", hiragana: "ごはん", romaji: "gohan", meaning: "Nasi" },
    { kanji: "塩", hiragana: "しお", romaji: "shio", meaning: "Garam" },
    { kanji: "全部", hiragana: "ぜんぶ", romaji: "zenbu", meaning: "Semua" },
    { kanji: "～方", hiragana: "～かた", romaji: "~kata", meaning: "Cara~" },
    { kanji: "食べ方", hiragana: "たべかた", romaji: "tabekata", meaning: "Cara makan" },
    { kanji: "熱い", hiragana: "あつい", romaji: "atsui", meaning: "Panas" },
    { kanji: "苦手", hiragana: "にがて", romaji: "nigate", meaning: "Susah, berat, tidak begitu suka" },
    { kanji: "入れます", hiragana: "いれます", romaji: "iremasu", meaning: "Memasukkan" },
    { kanji: "木", hiragana: "き", romaji: "ki", meaning: "Pohon" },
    { kanji: "森", hiragana: "もり", romaji: "mori", meaning: "Hutan" },
    { kanji: "島", hiragana: "しま", romaji: "shima", meaning: "Pulau" },
    { kanji: "自然", hiragana: "しぜん", romaji: "shizen", meaning: "Alam" },
    { kanji: "船", hiragana: "ふね", romaji: "fune", meaning: "Kapal" },
    { kanji: "暑い", hiragana: "あつい", romaji: "atsui", meaning: "Panas" },
    { kanji: "帰ります", hiragana: "かえります", romaji: "kaerimasu", meaning: "Pulang" },
    { kanji: "予約します", hiragana: "よやくします", romaji: "yoyakushimasu", meaning: "Memesan" },
    { kanji: "運転します", hiragana: "うんてんします", romaji: "unten shimasu", meaning: "Menyetir" },
    { kanji: "～中", hiragana: "～ちゅう / ～じゅう", romaji: "~chuu / ~juu", meaning: "Sedang/dalam ~" },
    { kanji: "旅行中", hiragana: "りょこうちゅう", romaji: "ryokouchuu", meaning: "Sedang wisata" },
    { kanji: "観光地", hiragana: "かんこうち", romaji: "kankouchi", meaning: "Tempat wisata" },
    { kanji: "女性", hiragana: "じょせい", romaji: "josei", meaning: "Wanita" },
    { kanji: "男性", hiragana: "だんせい", romaji: "dansei", meaning: "Pria" },
    { kanji: "動物", hiragana: "どうぶつ", romaji: "doubutsu", meaning: "Hewan" },
    { kanji: "空気", hiragana: "くうき", romaji: "kuuki", meaning: "Udara" },
    { kanji: "料金", hiragana: "りょうきん", romaji: "ryoukin", meaning: "Biaya / tarif" },
    { kanji: "無料", hiragana: "むりょう", romaji: "muryou", meaning: "Gratis" },
    { kanji: "明るい", hiragana: "あかるい", romaji: "akarui", meaning: "Terang" },
    { kanji: "便利", hiragana: "べんり", romaji: "benri", meaning: "Praktis" },
    { kanji: "一年中", hiragana: "いちねんじゅう", romaji: "ichinenjuu", meaning: "Sepanjang tahun" },
    { kanji: "広場", hiragana: "ひろば", romaji: "hiroba", meaning: "Lapangan" },
    { kanji: "問題", hiragana: "もんだい", romaji: "mondai", meaning: "Soal, masalah" },
    { kanji: "同じ", hiragana: "おなじ", romaji: "onaji", meaning: "Sama" },
    { kanji: "集まります", hiragana: "あつまります", romaji: "atsumarimasu", meaning: "Berkumpul" },
    { kanji: "始まります", hiragana: "はじまります", romaji: "hajimarimasu", meaning: "Mulai" },
    { kanji: "終わります", hiragana: "おわります", romaji: "owarimasu", meaning: "Selesai" },
    { kanji: "中止します", hiragana: "ちゅうしします", romaji: "chuushi shimasu", meaning: "Mengurungkan, membatalkan" },
    { kanji: "教えます", hiragana: "おしえます", romaji: "oshiemasu", meaning: "Memberitahu,mengajari" },
    { kanji: "祭り", hiragana: "まつり", romaji: "matsuri", meaning: "Perayaan" },
    { kanji: "日本祭り", hiragana: "にほんまつり", romaji: "nihon matsuri", meaning: "Perayaan Jepang" },
    { kanji: "会場", hiragana: "かいじょう", romaji: "kaijou", meaning: "Ruang pertemuan" },
    { kanji: "入場料", hiragana: "にゅうじょうりょう", romaji: "nyuujouryou", meaning: "Tarif masuk" },
    { kanji: "参加者", hiragana: "さんかしゃ", romaji: "sankasha", meaning: "Peserta" },
    { kanji: "急ぎます", hiragana: "いそぎます", romaji: "isogimasu", meaning: "Buru-buru" },
    { kanji: "決めます", hiragana: "きめます", romaji: "kimemasu", meaning: "Menentukan" },
    { kanji: "知ります", hiragana: "しります", romaji: "shirimasu", meaning: "Kenal, tahu" },
    { kanji: "正月", hiragana: "しょうがつ", romaji: "shougatsu", meaning: "Tahun baru" },
    { kanji: "年末", hiragana: "ねんまつ", romaji: "nenmatsu", meaning: "Akhir tahun" },
    { kanji: "年始", hiragana: "ねんし", romaji: "nenshi", meaning: "Awal tahun" },
    { kanji: "親", hiragana: "おや", romaji: "oya", meaning: "Orang tua" },
    { kanji: "忙しい", hiragana: "いそがしい", romaji: "isogashii", meaning: "Sibuk" },
    { kanji: "特別", hiragana: "とくべつ", romaji: "tokubetsu", meaning: "Istimewa, special, khusus" },
    { kanji: "帰国", hiragana: "きこく", romaji: "kikoku", meaning: "Pulang ke negara" },
    { kanji: "喜びます", hiragana: "よろこびます", romaji: "yorokobimasu", meaning: "Merasa senang/gembira" },
    { kanji: "幸せ", hiragana: "しあわせ", romaji: "shiawase", meaning: "Bahagia" },
    { kanji: "成長", hiragana: "せいちょう", romaji: "seichou", meaning: "Pertumbuhan, perkembangan" },
    { kanji: "長生き", hiragana: "ながいき", romaji: "nagaiki", meaning: "Umur panjang, hidup lama" },
    { kanji: "願います", hiragana: "ねがいます", romaji: "negaimasu", meaning: "Keinginan, kemauan, harapan" },
    { kanji: "合格", hiragana: "ごうかく", romaji: "goukaku", meaning: "Lulus" },
    { kanji: "試験", hiragana: "しけん", romaji: "shiken", meaning: "Ujian" },
    { kanji: "大人", hiragana: "おとな", romaji: "otona", meaning: "Orang dewasa" },
    { kanji: "～式", hiragana: "～しき", romaji: "~shiki", meaning: "Upacara" },
    { kanji: "成人式", hiragana: "せいじんしき", romaji: "seijinshiki", meaning: "Upacara kedewasaan" },
    { kanji: "～市", hiragana: "～し", romaji: "~shi", meaning: "Kota" },
    { kanji: "さいたま市", hiragana: "さいたまし", romaji: "saitamashi", meaning: "Kota Saitama" },
    { kanji: "商品", hiragana: "しょうひん", romaji: "shouhin", meaning: "Barang dagangan" },
    { kanji: "電気製品", hiragana: "でんきせいひん", romaji: "denki seihin", meaning: "Peralatan listrik" },
    { kanji: "電子レンジ", hiragana: "でんしレンジ", romaji: "denshi renji", meaning: "Oven" },
    { kanji: "～機", hiragana: "～き", romaji: "~ki", meaning: "Mesin" },
    { kanji: "掃除機", hiragana: "そうじき", romaji: "soujiki", meaning: "Mesin penghisap debu (vakum)" },
    { kanji: "店員", hiragana: "てんいん", romaji: "ten'in", meaning: "Penjaga toko" },
    { kanji: "調子", hiragana: "ちょうし", romaji: "choushi", meaning: "Keadaan, kondisi" },
    { kanji: "悪い", hiragana: "わるい", romaji: "warui", meaning: "Jelek" },
    { kanji: "動きます", hiragana: "うごきます", romaji: "ugokimasu", meaning: "Bergerak" },
    { kanji: "考えます", hiragana: "かんがえます", romaji: "kangaemasu", meaning: "Berpikir" },
    { kanji: "音", hiragana: "おと", romaji: "oto", meaning: "Suara" },
    { kanji: "出ます", hiragana: "でます", romaji: "demasu", meaning: "Keluar" },
    { kanji: "機能", hiragana: "きのう", romaji: "kinou", meaning: "Fungsi" },
    { kanji: "省エネ", hiragana: "しょうエネ", romaji: "shou ene", meaning: "Penghematan energi" },
    { kanji: "日本製", hiragana: "にほんせい", romaji: "nihonsei", meaning: "Produk/buatan Jepang" },
    { kanji: "重い", hiragana: "おもい", romaji: "omoi", meaning: "Berat" },
    { kanji: "軽い", hiragana: "かるい", romaji: "karui", meaning: "Ringan" },
    { kanji: "静か", hiragana: "しずか", romaji: "shizuka", meaning: "Tenang" },
    { kanji: "早く", hiragana: "はやく", romaji: "hayaku", meaning: "Cepat" },
    { kanji: "方", hiragana: "ほう", romaji: "hou", meaning: "Arah" },
    { kanji: "こっちの方", hiragana: "こっちのほう", romaji: "kotchi no hou", meaning: "Arah sini" },
    { kanji: "洗います", hiragana: "あらいます", romaji: "araimasu", meaning: "Mencuci" },
    { kanji: "満足します", hiragana: "まんぞくします", romaji: "manzoku shimasu", meaning: "Puas, merasa puas" },
    { kanji: "京都", hiragana: "きょうと", romaji: "kyouto", meaning: "Kyoto" },
    { kanji: "神社", hiragana: "じんじゃ", romaji: "jinja", meaning: "Kuil Shinto" },
    { kanji: "お寺", hiragana: "おてら", romaji: "otera", meaning: "Kuil" },
    { kanji: "仏教", hiragana: "ぶっきょう", romaji: "bukkyou", meaning: "Agama Buddha" },
    { kanji: "歴史", hiragana: "れきし", romaji: "rekishi", meaning: "Sejarah" },
    { kanji: "世界", hiragana: "せかい", romaji: "sekai", meaning: "Dunia" },
    { kanji: "中心", hiragana: "ちゅうしん", romaji: "chuushin", meaning: "Pusat" },
    { kanji: "～世紀", hiragana: "～せいき", romaji: "~seiki", meaning: "Abad~" },
    { kanji: "８世紀", hiragana: "はっせいき", romaji: "hasseiki", meaning: "Abad ke-8" },
    { kanji: "～的", hiragana: "～てき", romaji: "~teki", meaning: "Berbau~ / ke~an" },
    { kanji: "日本的", hiragana: "にほんてき", romaji: "nihonteki", meaning: "Berbau Jepang" },
    { kanji: "歴史的", hiragana: "れきしてき", romaji: "rekishiteki", meaning: "Bersejarah" },
    { kanji: "飲食", hiragana: "いんしょく", romaji: "inshoku", meaning: "Makan minum" },
    { kanji: "禁止", hiragana: "きんし", romaji: "kinshi", meaning: "Larangan" },
    { kanji: "説明", hiragana: "せつめい", romaji: "setsumei", meaning: "Penjelasan" },
    { kanji: "道具", hiragana: "どうぐ", romaji: "dougu", meaning: "Peralatan" },
    { kanji: "博物館", hiragana: "はくぶつかん", romaji: "hakubutsukan", meaning: "Museum" },
    { kanji: "必要", hiragana: "ひつよう", romaji: "hitsuyou", meaning: "Keperluan, kebutuhan" },
    { kanji: "～階", hiragana: "～かい", romaji: "~kai", meaning: "Lantai~" },
    { kanji: "２階", hiragana: "にかい", romaji: "nikai", meaning: "Lantai 2" },
    { kanji: "油", hiragana: "あぶら", romaji: "abura", meaning: "Minyak, oli" },
    { kanji: "紙", hiragana: "かみ", romaji: "kami", meaning: "Kertas" },
    { kanji: "温度", hiragana: "おんど", romaji: "ondo", meaning: "Suhu, derajat" },
    { kanji: "活動", hiragana: "かつどう", romaji: "katsudou", meaning: "Kegiatan, aktivitas" },
    { kanji: "会議室", hiragana: "かいぎしつ", romaji: "kaigishitsu", meaning: "Ruang rapat" },
    { kanji: "寒い", hiragana: "さむい", romaji: "samui", meaning: "Dingin (suhu)" },
    { kanji: "出します", hiragana: "だします", romaji: "dashimasu", meaning: "Mengeluarkan, mengirim (surat)" },
    { kanji: "～度", hiragana: "～ど", romaji: "~do", meaning: "Derajat" },
    { kanji: "２８度", hiragana: "にじゅうはちど", romaji: "nijuuhachido", meaning: "28 derajat" },
    { kanji: "～点", hiragana: "～てん", romaji: "~ten", meaning: "Nilai~" },
    { kanji: "１００点", hiragana: "ひゃくてん", romaji: "hyakuten", meaning: "Nilai 100" },
    { kanji: "服", hiragana: "ふく", romaji: "fuku", meaning: "Baju, pakaian" },
    { kanji: "自転車", hiragana: "じてんしゃ", romaji: "jitensha", meaning: "Sepeda" },
    { kanji: "自動車", hiragana: "じどうしゃ", romaji: "jidousha", meaning: "Mobil" },
    { kanji: "売ります", hiragana: "うります", romaji: "urimasu", meaning: "Menjual" },
    { kanji: "貸します", hiragana: "かします", romaji: "kashimasu", meaning: "Menginjamkan" },
    { kanji: "返します", hiragana: "かえします", romaji: "kaeshimasu", meaning: "Mengembalikan" },
    { kanji: "変わります", hiragana: "かわります", romaji: "kawarimasu", meaning: "Berubah" },
    { kanji: "～用", hiragana: "～よう", romaji: "~you", meaning: "Urusan, keperluan~" },
    { kanji: "子供用", hiragana: "こどもよう", romaji: "kodomoyou", meaning: "Urusan anak" },
    { kanji: "人生", hiragana: "じんせい", romaji: "jinsei", meaning: "Kehidupan" },
    { kanji: "歌手", hiragana: "かしゅ", romaji: "kashu", meaning: "Penyanyi" },
    { kanji: "選手", hiragana: "せんしゅ", romaji: "senshu", meaning: "Atlet, pemain" },
    { kanji: "画家", hiragana: "がか", romaji: "gaka", meaning: "Pelukis" },
    { kanji: "作家", hiragana: "さっか", romaji: "sakka", meaning: "Pengarang" },
    { kanji: "入学", hiragana: "にゅうがく", romaji: "nyuugaku", meaning: "Masuk sekolah" },
    { kanji: "卒業", hiragana: "そつぎょう", romaji: "sotsugyou", meaning: "Lulus" },
    { kanji: "病気", hiragana: "びょうき", romaji: "byouki", meaning: "Sakit" },
    { kanji: "若い", hiragana: "わかい", romaji: "wakai", meaning: "Muda" },
    { kanji: "生まれます", hiragana: "うまれます", romaji: "umaremasu", meaning: "Lahir" },
    { kanji: "思い出", hiragana: "おもいで", romaji: "omoide", meaning: "Kenang-kenangan, kenangan" },
    { kanji: "生活", hiragana: "せいかつ", romaji: "seikatsu", meaning: "Kehidupan" },
    { kanji: "映画", hiragana: "えいが", romaji: "eiga", meaning: "Film" },
    { kanji: "夫", hiragana: "おっと", romaji: "otto", meaning: "Suami (sendiri)" },
    { kanji: "妻", hiragana: "つま", romaji: "tsuma", meaning: "Istri (sendiri)" },
    { kanji: "両親", hiragana: "りょうしん", romaji: "ryoushin", meaning: "Orang tua" },
    { kanji: "不便", hiragana: "ふべん", romaji: "fuben", meaning: "Tidak praktis" },
    { kanji: "選びます", hiragana: "えらびます", romaji: "erabimasu", meaning: "Memilih" },
    { kanji: "寝ます", hiragana: "ねます", romaji: "nemasu", meaning: "Tidur" },
    { kanji: "サッカー場", hiragana: "サッカーじょう", romaji: "sakkaajou", meaning: "Lapangan sepak bola" },
    { kanji: "試合", hiragana: "しあい", romaji: "shiai", meaning: "Pertandingan" },
    { kanji: "強い", hiragana: "つよい", romaji: "tsuyoi", meaning: "Kuat" },
    { kanji: "弱い", hiragana: "よわい", romaji: "yowai", meaning: "Lemah" },
    { kanji: "勝ちます", hiragana: "かちます", romaji: "kachimasu", meaning: "Menang" },
    { kanji: "負けます", hiragana: "まけます", romaji: "makemasu", meaning: "Kalah" },
    { kanji: "～対～", hiragana: "～たい～", romaji: "~tai~", meaning: "Lawan~" },
    { kanji: "２対１", hiragana: "にたいいち", romaji: "ni tai ichi", meaning: "2 lawan 1" },
    { kanji: "庭", hiragana: "にわ", romaji: "niwa", meaning: "Halaman" },
    { kanji: "公園", hiragana: "こうえん", romaji: "kouen", meaning: "Taman" },
    { kanji: "病院", hiragana: "びょういん", romaji: "byouin", meaning: "Rumah sakit" },
    { kanji: "交通", hiragana: "こうつう", romaji: "koutsuu", meaning: "Lalu lintas" },
    { kanji: "通勤", hiragana: "つうきん", romaji: "tsuukin", meaning: "Perjalanan ke kantor" },
    { kanji: "安全", hiragana: "あんぜん", romaji: "anzen", meaning: "Keselamatan" },
    { kanji: "危ない", hiragana: "あぶない", romaji: "abunai", meaning: "Bahaya" },
    { kanji: "遠い", hiragana: "とおい", romaji: "tooi", meaning: "Jauh" },
    { kanji: "努めます", hiragana: "つとめます", romaji: "tsutomemasu", meaning: "Bekerja" },
    { kanji: "～以上", hiragana: "～いじょう", romaji: "~ijou", meaning: "~lebih" },
    { kanji: "２時間以上", hiragana: "にじかんいじょう", romaji: "nijikan ijou", meaning: "2 jam lebih" },
    { kanji: "～以下", hiragana: "～いか", romaji: "~ika", meaning: "~kurang" },
    { kanji: "６万円以下", hiragana: "ろくまんえんいか", romaji: "rokuman'en ika", meaning: "Kurang dari 6 man yen" },
    { kanji: "海外", hiragana: "かいがい", romaji: "kaigai", meaning: "Luar negeri" },
    { kanji: "食生活", hiragana: "しょくせいかつ", romaji: "shokuseikatsu", meaning: "Susunan makanan" },
    { kanji: "健康", hiragana: "けんこう", romaji: "kenkou", meaning: "Kesehatan" },
    { kanji: "家庭料理", hiragana: "かていりょうり", romaji: "katei ryouri", meaning: "Masakan rumah tangga" },
    { kanji: "材料", hiragana: "ざいりょう", romaji: "zairyou", meaning: "Bahan" },
    { kanji: "量", hiragana: "りょう", romaji: "ryou", meaning: "Jumlah, kuantitas, banyaknya" },
    { kanji: "米", hiragana: "こめ", romaji: "kome", meaning: "Beras" },
    { kanji: "～食", hiragana: "～しょく", romaji: "~shoku", meaning: "Makan~" },
    { kanji: "朝食", hiragana: "ちょうしょく", romaji: "choushoku", meaning: "Makan pagi" },
    { kanji: "昼食", hiragana: "ちゅうしょく", romaji: "chuushoku", meaning: "Makan siang" },
    { kanji: "夕食", hiragana: "ゆうしょく", romaji: "yuushoku", meaning: "Makan malam" },
    { kanji: "外食", hiragana: "がいしょく", romaji: "gaishoku", meaning: "Makan di luar" },
    { kanji: "定食", hiragana: "ていしょく", romaji: "teishoku", meaning: "Makan dengan menu tetap" },
    { kanji: "住所", hiragana: "じゅうしょ", romaji: "juusho", meaning: "Alamat" },
    { kanji: "訪問", hiragana: "ほうもん", romaji: "houmon", meaning: "Kunjungan" },
    { kanji: "経験", hiragana: "けいけん", romaji: "keiken", meaning: "Pengalaman" },
    { kanji: "親切", hiragana: "しんせつ", romaji: "shinsetsu", meaning: "Ramah" },
    { kanji: "座ります", hiragana: "すわります", romaji: "suwarimasu", meaning: "Duduk" },
    { kanji: "立ちます", hiragana: "たちます", romaji: "tachimasu", meaning: "Berdiri" },
    { kanji: "～観", hiragana: "～かん", romaji: "~kan", meaning: "Pandangan~" },
    { kanji: "人生観", hiragana: "じんせいかん", romaji: "jinseikan", meaning: "Pandangan hidup" },
    { kanji: "約～", hiragana: "やく～", romaji: "yaku~", meaning: "Kira-kira, sekitar~" },
    { kanji: "約６年間", hiragana: "やくろくねんかん", romaji: "yakurokunenkan", meaning: "Sekitar 6 tahun" },
    { kanji: "計画", hiragana: "けいかく", romaji: "keikaku", meaning: "Rencana, program" },
    { kanji: "自信", hiragana: "じしん", romaji: "jishin", meaning: "Percaya diri" },
    { kanji: "方法", hiragana: "ほうほう", romaji: "houhou", meaning: "Cara" },
    { kanji: "目的", hiragana: "もくてき", romaji: "mokuteki", meaning: "Tujuan" },
    { kanji: "難しい", hiragana: "むずかしい", romaji: "muzukashii", meaning: "Sulit" },
    { kanji: "通じます", hiragana: "つうじます", romaji: "tsuujimasu", meaning: "Mengalirkan, menguasai, berhubungan" },
    { kanji: "習います", hiragana: "ならいます", romaji: "naraimasu", meaning: "Belajar kepada" },
    { kanji: "学びます", hiragana: "まなびます", romaji: "manabimasu", meaning: "Belajar" },
    { kanji: "～級", hiragana: "～きゅう", romaji: "~kyuu", meaning: "Kelas, tingkat~" },
    { kanji: "初級", hiragana: "しょきゅう", romaji: "shokyu", meaning: "Kelas dasar" },
    { kanji: "中級", hiragana: "ちゅうきゅう", romaji: "chuukyuu", meaning: "Kelas menengah" },
    { kanji: "上級", hiragana: "じょうきゅう", romaji: "joukyuu", meaning: "Kelas atas" },
    { kanji: "相手", hiragana: "あいて", romaji: "aite", meaning: "Pasangan, lawan" },
    { kanji: "気持ち", hiragana: "きもち", romaji: "kimochi", meaning: "Perasaan" },
    { kanji: "恋人", hiragana: "こいびと", romaji: "koibito", meaning: "Pacar" },
    { kanji: "出会い", hiragana: "であい", romaji: "deai", meaning: "Pertemuan" },
    { kanji: "最近", hiragana: "さいきん", romaji: "saikin", meaning: "Akhir-akhir ini" },
    { kanji: "最高", hiragana: "さいこう", romaji: "saikou", meaning: "Teratas, tertinggi" },
    { kanji: "出席", hiragana: "しゅっせき", romaji: "shusseki", meaning: "Kehadiran" },
    { kanji: "招待", hiragana: "しょうたい", romaji: "shoutai", meaning: "Undangan" },
    { kanji: "～合う", hiragana: "～あう", romaji: "~au", meaning: "Saling~" },
    { kanji: "知り合う", hiragana: "しりあう", romaji: "shiriau", meaning: "Kenal mengenal" },
    { kanji: "社会人", hiragana: "しゃかいじん", romaji: "shakaijin", meaning: "Anggota masyarakat" },
    { kanji: "職場", hiragana: "しょくば", romaji: "shokuba", meaning: "Tempat kerja" },
    { kanji: "給料", hiragana: "きゅうりょう", romaji: "kyuuryou", meaning: "Gaji" },
    { kanji: "人間関係", hiragana: "にんげんかんけい", romaji: "ningenkankei", meaning: "Hubungan antar manusia" },
    { kanji: "親友", hiragana: "しんゆう", romaji: "shinyuu", meaning: "Teman karib" },
    { kanji: "恋愛", hiragana: "れんあい", romaji: "ren'ai", meaning: "Percintaan, asmara" },
    { kanji: "相談", hiragana: "そうだん", romaji: "soudan", meaning: "Musyawarah, konsultasi" },
    { kanji: "心", hiragana: "こころ", romaji: "kokoro", meaning: "Hati" },
    { kanji: "心配", hiragana: "しんぱい", romaji: "shinpai", meaning: "Khawatir" },
    { kanji: "不安", hiragana: "ふあん", romaji: "fuan", meaning: "Kegelisahan, kekhawatiran" },
    { kanji: "お客様", hiragana: "おきゃくさま", romaji: "okyaku sama", meaning: "Tamu" },
    { kanji: "手続き", hiragana: "てつづき", romaji: "tetsuzuki", meaning: "Prosedur" },
    { kanji: "飛行機", hiragana: "ひこうき", romaji: "hikouki", meaning: "Pesawat terbang" },
    { kanji: "変更", hiragana: "へんこう", romaji: "henkou", meaning: "Perubahan" },
    { kanji: "予定", hiragana: "よてい", romaji: "yotei", meaning: "Rencana" },
    { kanji: "利用", hiragana: "りよう", romaji: "riyou", meaning: "Penggunaan, pemakaian" },
    { kanji: "忘れ物", hiragana: "わすれもの", romaji: "wasuremono", meaning: "Benda yang tertinggal" },
    { kanji: "助けます", hiragana: "たすけます", romaji: "tasukemasu", meaning: "Menolong" },
    { kanji: "～航空", hiragana: "～こうくう", romaji: "~koukuu", meaning: "Penerbangan~" },
    { kanji: "ＪＦ航空", hiragana: "ＪＦこうくう", romaji: "JF koukuu", meaning: "Penerbangan JF" },
    { kanji: "～便", hiragana: "～びん", romaji: "~bin", meaning: "Penerbangan, pos" },
    { kanji: "１１５便", hiragana: "ひゃくじゅうごびん", romaji: "hyakujuugobin", meaning: "Penerbangan 115" },
    { kanji: "体力", hiragana: "たいりょく", romaji: "tairyoku", meaning: "Kekuatan" },
    { kanji: "協力", hiragana: "きょうりょく", romaji: "kyouryoku", meaning: "Kerjasama" },
    { kanji: "担当", hiragana: "たんとう", romaji: "tantou", meaning: "Petugas" },
    { kanji: "報告", hiragana: "ほうこく", romaji: "houkoku", meaning: "Melapor" },
    { kanji: "連絡", hiragana: "れんらく", romaji: "renraku", meaning: "Menghubungi" },
    { kanji: "募集", hiragana: "ぼしゅう", romaji: "boshū", meaning: "Penerimaan, perekrutan" },
    { kanji: "輸出", hiragana: "ゆしゅつ", romaji: "yushutsu", meaning: "Ekspor" },
    { kanji: "輸入", hiragana: "ゆにゅう", romaji: "yunyū", meaning: "Impor" },
    { kanji: "会話", hiragana: "かいわ", romaji: "kaiwa", meaning: "Percakapan" },
    { kanji: "形", hiragana: "かたち", romaji: "katachi", meaning: "Bentuk" },
    { kanji: "漢字", hiragana: "かんじ", romaji: "kanji", meaning: "Kanji" },
    { kanji: "答え", hiragana: "こたえ", romaji: "kotae", meaning: "Jawaban" },
    { kanji: "質問", hiragana: "しつもん", romaji: "shitsumon", meaning: "Pertanyaan" },
    { kanji: "正しい", hiragana: "ただしい", romaji: "tadashii", meaning: "Benar" },
    { kanji: "読解", hiragana: "どっかい", romaji: "dokkai", meaning: "Bacaan" },
    { kanji: "表現", hiragana: "ひょうげん", romaji: "hyougen", meaning: "Pengucapan" },
    { kanji: "文", hiragana: "ぶん", romaji: "bun", meaning: "Kalimat" },
    { kanji: "文型", hiragana: "ぶんけい", romaji: "bunkei", meaning: "Pola kalimat" },
    { kanji: "文法", hiragana: "ぶんぽう", romaji: "bunpou", meaning: "Tata Bahasa" },
    { kanji: "もう一度", hiragana: "もういちど", romaji: "mou ichido", meaning: "Sekali lagi" },
    { kanji: "例", hiragana: "れい", romaji: "rei", meaning: "Contoh" },
    { kanji: "練習", hiragana: "れんしゅう", romaji: "renshuu", meaning: "Latihan" },
    { kanji: "～枚", hiragana: "～まい", romaji: "~mai", meaning: "~lembar" },
    { kanji: "今週", hiragana: "こんしゅう", romaji: "konshuu", meaning: "Minggu ini" },
    { kanji: "今度", hiragana: "こんど", romaji: "kondo", meaning: "Lain kali, yang akan datang" },
    { kanji: "横", hiragana: "よこ", romaji: "yoko", meaning: "Sebelah" },
    { kanji: "押します", hiragana: "おします", romaji: "oshimasu", meaning: "Menekan, mendorong" },
    { kanji: "引きます", hiragana: "ひきます", romaji: "hikimasu", meaning: "Menarik" },
    { kanji: "温泉", hiragana: "おんせん", romaji: "onsen", meaning: "Pemandian air panas" },
    { kanji: "来週", hiragana: "らいしゅう", romaji: "raishuu", meaning: "Minggu depan" },
    { kanji: "犬", hiragana: "いぬ", romaji: "inu", meaning: "Anjing" },
    { kanji: "夕方", hiragana: "ゆうがた", romaji: "yuugata", meaning: "Sore" },
    { kanji: "季節", hiragana: "きせつ", romaji: "kisetsu", meaning: "Musim" },
    { kanji: "昨日", hiragana: "きのう", romaji: "kinou", meaning: "Kemarin" },
    { kanji: "明日", hiragana: "あした", romaji: "ashita", meaning: "Besok" },
    { kanji: "食堂", hiragana: "しょくどう", romaji: "shokudou", meaning: "Kantin" },
    { kanji: "銀行", hiragana: "ぎんこう", romaji: "ginkou", meaning: "Bank" },
    { kanji: "受け", hiragana: "うけつけ", romaji: "uketsuke", meaning: "Resepsionis" },
    { kanji: "門", hiragana: "もん", romaji: "mon", meaning: "Pintu gerbang" },
    { kanji: "登ります", hiragana: "のぼります", romaji: "noborimasu", meaning: "Mendaki" },
    { kanji: "教科書", hiragana: "きょうかしょ", romaji: "kyoukasho", meaning: "Buku panduan" },
    { kanji: "教室", hiragana: "きょうしつ", romaji: "kyoushitsu", meaning: "Ruang kelas" },
    { kanji: "参加します", hiragana: "さんかします", romaji: "sanka shimasu", meaning: "Berpartisipasi" },
    { kanji: "用意します", hiragana: "よういします", romaji: "youi shimasu", meaning: "Menyiapkan" },
    { kanji: "豚肉", hiragana: "ぶたにく", romaji: "butaniku", meaning: "Daging babi" },
    { kanji: "牛肉", hiragana: "ぎゅうにく", romaji: "gyuuniku", meaning: "Daging sapi" },
    { kanji: "皿", hiragana: "さら", romaji: "sara", meaning: "Piring" },
    { kanji: "お湯", hiragana: "おゆ", romaji: "oyu", meaning: "Air panas" },
    { kanji: "調理方法", hiragana: "ちょうりほうほう", romaji: "chouri houhou", meaning: "Cara memasak" },
    { kanji: "甘い", hiragana: "あまい", romaji: "amai", meaning: "Manis" },
    { kanji: "辛い", hiragana: "からい", romaji: "karai", meaning: "Pedas" },
    { kanji: "数字", hiragana: "すうじ", romaji: "suuji", meaning: "Angka, bilangan" },
    { kanji: "机", hiragana: "つくえ", romaji: "tsukue", meaning: "Meja" },
    { kanji: "都合", hiragana: "つごう", romaji: "tsugou", meaning: "Keadaan" },
    { kanji: "用事", hiragana: "ようじ", romaji: "youji", meaning: "Keperluan" },
    { kanji: "氏名", hiragana: "しめい", romaji: "shimei", meaning: "Nama lengkap" },
    { kanji: "理由", hiragana: "りゆう", romaji: "riyuu", meaning: "Alasan" },
    { kanji: "別に", hiragana: "べつに", romaji: "betsuni", meaning: "Beda-beda" },
    { kanji: "連絡先", hiragana: "れんらくさき", romaji: "renraku saki", meaning: "Alamat yang dapat dihubungi" },
    { kanji: "吸います", hiragana: "すいます", romaji: "suimasu", meaning: "Menghisap" },
    { kanji: "取ります", hiragana: "とります", romaji: "torimasu", meaning: "Mengambil" },
    { kanji: "伝えます", hiragana: "つたえます", romaji: "tsutaemasu", meaning: "Menyampaikan" },
    { kanji: "熱", hiragana: "ねつ", romaji: "netsu", meaning: "Demam" },
    { kanji: "薬", hiragana: "くすり", romaji: "kusuri", meaning: "Obat" },
    { kanji: "医者", hiragana: "いしゃ", romaji: "isha", meaning: "Dokter" },
    { kanji: "～歳", hiragana: "～さい", romaji: "~sai", meaning: "~umur" },
    { kanji: "眠い", hiragana: "ねむい", romaji: "nemui", meaning: "Ngantuk" },
    { kanji: "記入します", hiragana: "きにゅうします", romaji: "kinyuu shimasu", meaning: "Mengisi di kertas" },
    { kanji: "顔", hiragana: "かお", romaji: "kao", meaning: "Wajah" },
    { kanji: "泣きます", hiragana: "なきます", romaji: "nakimasu", meaning: "Menangis" },
    { kanji: "会計", hiragana: "かいけい", romaji: "kaikei", meaning: "Pembayaran" },
    { kanji: "電話番号", hiragana: "でんわばんごう", romaji: "denwa bangou", meaning: "Nomor telepon" },
    { kanji: "牛乳", hiragana: "ぎゅうにゅう", romaji: "gyuunyuu", meaning: "Susu sapi" },
    { kanji: "禁煙", hiragana: "きんえん", romaji: "kin'en", meaning: "Larangan merokok" },
    { kanji: "自由", hiragana: "じゆう", romaji: "jiyuu", meaning: "Bebas" },
    { kanji: "切ります", hiragana: "きります", romaji: "kirimasu", meaning: "Memotong" },
    { kanji: "焼きます", hiragana: "やきます", romaji: "yakimasu", meaning: "Memanggang" },
    { kanji: "旅館", hiragana: "りょかん", romaji: "ryokan", meaning: "Penginapan" },
    { kanji: "遊びます", hiragana: "あそびます", romaji: "asobimasu", meaning: "Bermain" },
    { kanji: "調べます", hiragana: "しらべます", romaji: "shirabemasu", meaning: "Memeriksa" },
    { kanji: "事故", hiragana: "じこ", romaji: "jiko", meaning: "Kecelakaan" },
    { kanji: "故障", hiragana: "こしょう", romaji: "koshou", meaning: "Kerusakan" },
    { kanji: "指定席", hiragana: "していせき", romaji: "shiteiseki", meaning: "Tempat duduk yang ditetapkan" },
    { kanji: "光ります", hiragana: "ひかります", romaji: "hikarimasu", meaning: "Bercahaya, bersinar" },
    { kanji: "お知らせ", hiragana: "おしらせ", romaji: "oshirase", meaning: "Pengumuman" },
    { kanji: "水道", hiragana: "すいどう", romaji: "suidou", meaning: "Ledeng" },
    { kanji: "工事", hiragana: "こうじ", romaji: "kouji", meaning: "Konstruksi" },
    { kanji: "場合", hiragana: "ばあい", romaji: "baai", meaning: "Apabila" },
    { kanji: "条件", hiragana: "じょうけん", romaji: "jouken", meaning: "Syarat-syarat, kondisi" },
    { kanji: "開きます", hiragana: "ひらきます", romaji: "hirakimasu", meaning: "Membuka" },
    { kanji: "生産します", hiragana: "せいさんします", romaji: "seisan shimasu", meaning: "Memproduksi" },
    { kanji: "体験", hiragana: "たいけん", romaji: "taiken", meaning: "Percobaan" },
    { kanji: "国際交流", hiragana: "こくさいこうりゅう", romaji: "kokusai kouryuu", meaning: "Pertukaran budaya internasional" },
    { kanji: "申し込みます", hiragana: "もうしこみます", romaji: "moushikomimasu", meaning: "Mendaftar, Melamar" },
    { kanji: "昨年", hiragana: "さくねん", romaji: "sakunen", meaning: "Tahun lalu" },
    { kanji: "毎年", hiragana: "まいとし", romaji: "maitoshi", meaning: "Setiap tahun" },
    { kanji: "袋", hiragana: "ふくろ", romaji: "fukuro", meaning: "Kantong plastik" },
    { kanji: "店長", hiragana: "てんちょう", romaji: "tenchou", meaning: "Manajer toko" },
    { kanji: "全員", hiragana: "ぜんいん", romaji: "zen'in", meaning: "Semuanya" },
    { kanji: "習慣", hiragana: "しゅうかん", romaji: "shuukan", meaning: "Kebiasaan" },
    { kanji: "普通", hiragana: "ふつう", romaji: "futsuu", meaning: "Biasa" },
    { kanji: "暗い", hiragana: "くらい", romaji: "kurai", meaning: "Gelap" },
    { kanji: "怒ります", hiragana: "おこります", romaji: "okorimasu", meaning: "Marah" },
    { kanji: "入院します", hiragana: "にゅういんします", romaji: "nyuuin shimasu", meaning: "Masuk rumah sakit" },
    { kanji: "退院します", hiragana: "たいいんします", romaji: "taiin shimasu", meaning: "Keluar rumah sakit" },
    { kanji: "急に", hiragana: "きゅうに", romaji: "kyuuni", meaning: "Tiba-tiba" },
    { kanji: "営業します", hiragana: "えいぎょうします", romaji: "eigyou shimasu", meaning: "Buka" },
    { kanji: "案内します", hiragana: "あんないします", romaji: "annai shimasu", meaning: "Memandu" },
    { kanji: "値段", hiragana: "ねだん", romaji: "nedan", meaning: "Harga" },
    { kanji: "価格", hiragana: "かかく", romaji: "kakaku", meaning: "Harga" },
    { kanji: "消費税", hiragana: "しょうひぜい", romaji: "shouhizei", meaning: "Pajak konsumen" },
    { kanji: "税別", hiragana: "ぜいべつ", romaji: "zeibetsu", meaning: "Harga belum termasuk pajak" },
    { kanji: "図書館", hiragana: "としょかん", romaji: "toshokan", meaning: "Perpustakaan" },
    { kanji: "開きます", hiragana: "あきます", romaji: "akimasu", meaning: "Terbuka" },
    { kanji: "閉まります", hiragana: "しまります", romaji: "shimarimasu", meaning: "Tertutup" },
    { kanji: "利用します", hiragana: "りようします", romaji: "riyou shimasu", meaning: "Menggunakan" },
    { kanji: "窓口", hiragana: "まどぐち", romaji: "madoguchi", meaning: "Konter, loket" },
    { kanji: "郵便局", hiragana: "ゆうびんきょく", romaji: "yuubinkyoku", meaning: "Kantor pos" },
    { kanji: "近所", hiragana: "きんじょ", romaji: "kinjo", meaning: "Tetangga" },
    { kanji: "自動", hiragana: "じどう", romaji: "jidou", meaning: "Otomatis" },
    { kanji: "危険", hiragana: "きけん", romaji: "kiken", meaning: "Bahaya" },
    { kanji: "～種類", hiragana: "～しゅるい", romaji: "~shurui", meaning: "~macam, jenis" },
    { kanji: "消します", hiragana: "けします", romaji: "keshimasu", meaning: "Memadamkan" },
    { kanji: "捨てます", hiragana: "すてます", romaji: "sutemasu", meaning: "Membuang" },
    { kanji: "分けます", hiragana: "わけます", romaji: "wakemasu", meaning: "Membagi" },
    { kanji: "燃えます", hiragana: "もえます", romaji: "moemasu", meaning: "Terbakar" },
    { kanji: "設定します", hiragana: "せっていします", romaji: "settei shimasu", meaning: "Mengeset, menyeting" },
    { kanji: "地震", hiragana: "じしん", romaji: "jishin", meaning: "Gempa" },
    { kanji: "台風", hiragana: "たいふう", romaji: "taifuu", meaning: "Angin topan" },
    { kanji: "声", hiragana: "こえ", romaji: "koe", meaning: "Suara (benda hidup)" },
    { kanji: "大切な", hiragana: "たいせつな", romaji: "taisetsu na", meaning: "Penting" },
    { kanji: "進みます", hiragana: "すすみます", romaji: "susumimasu", meaning: "Maju" },
    { kanji: "授業", hiragana: "じゅぎょう", romaji: "jugyou", meaning: "Pelajaran" },
    { kanji: "大変な", hiragana: "たいへんな", romaji: "taihen na", meaning: "Berat (perasaan)" },
    { kanji: "困ります", hiragana: "こまります", romaji: "komarimasu", meaning: "Susah" },
    { kanji: "違います", hiragana: "ちがいます", romaji: "chigaimasu", meaning: "Salah, berbeda" },
    { kanji: "慣れます", hiragana: "なれます", romaji: "naremasu", meaning: "Terbiasa" },
    { kanji: "増えます", hiragana: "ふえます", romaji: "fuemasu", meaning: "Bertambah" },
    { kanji: "笑います", hiragana: "わらいます", romaji: "waraimasu", meaning: "Tertawa" },
    { kanji: "苦労します", hiragana: "くろうします", romaji: "kurou shimasu", meaning: "Bersusah-payah (dalam usaha)" },
    { kanji: "希望", hiragana: "きぼう", romaji: "kibou", meaning: "Harapan, keinginan" },
    { kanji: "特に", hiragana: "とくに", romaji: "tokuni", meaning: "Terutama" },
    { kanji: "建てます", hiragana: "たてます", romaji: "tatemasu", meaning: "Mendirikan" },
    { kanji: "続けます", hiragana: "つづけます", romaji: "tsuzukemasu", meaning: "Melanjutkan" },
    { kanji: "役に立ちます", hiragana: "やくにたちます", romaji: "yaku ni tachimasu", meaning: "Bermanfaat" }
];

// DOM Elements
const searchInput = document.getElementById("searchInput");
const shuffleBtn = document.getElementById("shuffleBtn");
const kanjiGrid = document.getElementById("kanjiGrid");
const totalKanji = document.getElementById("totalKanji");
const tampilKanji = document.getElementById("tampilKanji");
const levelDisplay = document.getElementById("levelDisplay");

// Tampilkan data awal
displayKanji(kanjiData);

// Event listeners
searchInput.addEventListener("input", filterKanji);
shuffleBtn.addEventListener("click", shuffleKanji);

// Fungsi untuk menampilkan kanji dalam grid
function displayKanji(data) {
    kanjiGrid.innerHTML = "";
    
    data.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "kanji-card";
        card.innerHTML = `
            <span class="kanji-number">#${index + 1}</span>
            <span class="kanji-char">${item.kanji}</span>
            <span class="kanji-hiragana">${item.hiragana}</span>
            <span class="kanji-romaji">${item.romaji}</span>
            <span class="kanji-meaning">${item.meaning}</span>
        `;
        kanjiGrid.appendChild(card);
    });
    
    // Update statistik
    totalKanji.textContent = kanjiData.length;
    tampilKanji.textContent = data.length;
    if (levelDisplay) {
        levelDisplay.textContent = "JFT";
    }
}

// Fungsi untuk memfilter kanji
function filterKanji() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayKanji(kanjiData);
        return;
    }
    
    const filteredData = kanjiData.filter(item => 
        item.kanji.includes(searchTerm) || 
        item.hiragana.includes(searchTerm) ||
        item.romaji.toLowerCase().includes(searchTerm) ||
        item.meaning.toLowerCase().includes(searchTerm)
    );
    
    displayKanji(filteredData);
}

// Fungsi untuk mengacak urutan kanji
function shuffleKanji() {
    const shuffledData = [...kanjiData];
    for (let i = shuffledData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    displayKanji(shuffledData);
}

// ============================================
// MUSIK PLAYER - FIX BUG (VOLUME & CLOSE)
// ============================================
const audio = document.getElementById('audioPlayer');
const speakerBtn = document.getElementById('speakerBtn');

// Ganti dengan file musik Anda
const songFile = "365akb48.mp3";

let isPlaying = false;
let audioStarted = false;

// Set lagu dan volume MAX
audio.src = songFile;
audio.loop = true;
audio.volume = 1.0; // <-- VOLUME MAKSIMAL

// Fungsi mulai audio (pertama kali)
function startAudio() {
    if (audioStarted) return;
    
    audio.play().then(() => {
        isPlaying = true;
        audioStarted = true;
        speakerBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        speakerBtn.classList.remove('muted');
        speakerBtn.classList.add('playing');
        console.log('🎵 Musik mulai diputar!');
    }).catch(e => {
        console.log('⏳ Auto play di-block, menunggu interaksi user...');
    });
}

// Fungsi toggle play/pause (ON/OFF)
function togglePlayPause() {
    if (!audioStarted) {
        startAudio();
        return;
    }

    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        speakerBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        speakerBtn.classList.remove('playing');
        speakerBtn.classList.add('muted');
    } else {
        audio.play().catch(e => console.log('Error play:', e));
        isPlaying = true;
        speakerBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        speakerBtn.classList.add('playing');
        speakerBtn.classList.remove('muted');
    }
}

// ============================================
// HENTIKAN MUSIK SAAT PAGE DITUTUP / DI-REFRESH
// ============================================
window.addEventListener('beforeunload', function() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.src = ''; // <-- HAPUS SOURCE AGAR MUSIK BERHENTI TOTAL
        isPlaying = false;
        console.log('🔇 Musik dihentikan total!');
    }
});

// Hentikan musik saat tab tidak aktif
document.addEventListener('visibilitychange', function() {
    if (document.hidden && isPlaying) {
        audio.pause();
        isPlaying = false;
        speakerBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        speakerBtn.classList.remove('playing');
        speakerBtn.classList.add('muted');
        console.log('🔇 Musik pause karena tab tidak aktif');
    }
});

// ============================================
// EVENT LISTENERS
// ============================================

// Saat halaman dimuat
window.addEventListener('load', () => {
    speakerBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    speakerBtn.classList.remove('playing');
    speakerBtn.classList.add('muted');
    // Set volume ke MAX
    audio.volume = 1.0;
    startAudio();
});

// Klik pertama di mana saja akan memulai musik
document.addEventListener('click', function firstClick() {
    if (!audioStarted) {
        startAudio();
        document.removeEventListener('click', firstClick);
    }
});

// Klik tombol speaker
speakerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    togglePlayPause();
});

console.log('🎌 613 Kanji JFT siap dipelajari!');
console.log(`📚 Total kanji: ${kanjiData.length}`);
console.log('🔊 Klik tombol speaker untuk ON/OFF musik (VOLUME MAX)');
console.log('🔇 Musik akan otomatis berhenti total saat halaman ditutup');