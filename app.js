
          const PFX = document.body.dataset.pfx || "";
          const IMG = {
            hero: PFX + "img/hero.jpg",
            shred: PFX + "img/shred.jpg",
            tungsten: PFX + "img/tungsten.jpg",
            bucket: PFX + "img/bucket.jpg",
            las: PFX + "img/las.jpg",
            tambang: PFX + "img/tambang.jpg",
            beton: PFX + "img/beton.jpg",
            daur: PFX + "img/daur.jpg",
            chipper: PFX + "img/chipper.jpg",
            SRF: PFX + "img/SRF.jpg",
            dtop: PFX + "img/dtop.jpg",
            atop: PFX + "img/atop.jpg",
            cutter: PFX + "img/cutter.jpg",
            hall: PFX + "img/hall.jpg",
            fasil: PFX + "img/fasil.jpg",
            line: PFX + "img/line.jpg",
            pipa: PFX + "img/pipa.jpg",
          };
          const POS = { dtop: "50% 50%", atop: "60% 50%", pipa: "50% 60%" };
          const BLOB = {};
          const toBlobUrl = (u) => {
            try {
              const c = u.indexOf(","),
                m = u.slice(5, u.indexOf(";")),
                bin = atob(u.slice(c + 1)),
                a = new Uint8Array(bin.length);
              for (let n = 0; n < bin.length; n++) a[n] = bin.charCodeAt(n);
              return URL.createObjectURL(new Blob([a], { type: m }));
            } catch (e) {
              return u;
            }
          };
          const bu = (k) => IMG[k];
          const ph = (k, alt, ar) =>
            `<img class="ph" src="${bu(k)}" alt="${alt}" loading="lazy" style="${ar ? `aspect-ratio:${ar};` : ""}object-position:${POS[k] || "center"}">`;
          document.querySelectorAll("img[data-i]").forEach((i) => {
            i.src = bu(i.dataset.i);
          });
          /* kalau ada gambar yang gagal dimuat, coba sekali lagi dari data aslinya */
          addEventListener(
            "error",
            (e) => {
              const i = e.target;
              if (!i || i.tagName !== "IMG" || i._r) return;
              const k =
                i.dataset.i || Object.keys(IMG).find((x) => BLOB[x] === i.src);
              if (!k) return;
              i._r = 1;
              setTimeout(() => {
                i.src = IMG[k];
              }, 150);
            },
            true,
          );
          const NUL = new Proxy(function () {}, { get: (t, p) => p === Symbol.toPrimitive ? () => "" : p === "length" ? 0 : NUL, set: () => true, apply: () => NUL });
          const $ = (s) => document.querySelector(s) || NUL,
            $$ = (s) => [...document.querySelectorAll(s)];
          const ic = (p) =>
            `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
          const art = (sym, vb, cls) =>
            `<div class="frame"><svg class="art ${cls || ""}" viewBox="${vb || "0 0 400 300"}" aria-hidden="true"><use href="#${sym}"/></svg></div>`;
          const I = {
            bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
            leaf: '<path d="M5 19c0-8 5-14 14-14 0 9-6 14-14 14zM5 19l7-7"/>',
            drop: '<path d="M12 3c4 5 6 8 6 11a6 6 0 01-12 0c0-3 2-6 6-11z"/>',
            box: '<rect x="3" y="9" width="18" height="11" rx="2"/><path d="M7 9V5h10v4"/>',
            gear: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
            sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
            scale: '<path d="M4 20h16M6 20l2-9h8l2 9M12 11V4M8 4h8"/>',
            ok: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
            flame:
              '<path d="M12 21c-4 0-7-3-7-7 0-5 7-11 7-11s7 6 7 11c0 4-3 7-7 7z"/><path d="M12 21v-8"/>',
            pile: '<path d="M3 20l6-10 4 6 3-4 5 8z"/>',
            build: '<path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6"/>',
            rec: '<path d="M7 7h8l-2-2M17 17H9l2 2M5 12a7 7 0 017-7M19 12a7 7 0 01-7 7"/>',
            globe:
              '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
            hand: '<path d="M12 21c-4 0-7-3-7-7 0-5 7-11 7-11s7 6 7 11c0 4-3 7-7 7z"/>',
            heart:
              '<path d="M12 20s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 9c0 6-8 11-8 11z"/>',
            link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
          };

          /* nav */
          $("#burger").onclick = (e) => {
            const o = $("#nav").classList.toggle("open");
            e.currentTarget.setAttribute("aria-expanded", o);
          };
          $("#nav").onclick = (e) => {
            if (e.target.tagName === "A") {
              $("#nav").classList.remove("open");
              $("#burger").setAttribute("aria-expanded", false);
            }
          };

          /* marquee */

          /* data */
          const HHART = {
            o1: '<svg class="hh-s" viewBox="0 0 160 110" aria-hidden="true" focusable="false"><path class="s" d="M8 96H152"/>\n<rect class="a f3" x="10" y="52" width="88" height="28" rx="5"/>\n<path class="s" d="M26 52v28M42 52v28M58 52v28M74 52v28M90 52v28"/>\n<ellipse class="a f1" cx="98" cy="66" rx="7" ry="14"/>\n<ellipse class="a f1" cx="124" cy="44" rx="24" ry="9"/><path class="a f3" d="M100 44V90Q124 100 148 90V44"/><ellipse class="a f2" cx="124" cy="44" rx="16" ry="5.5"/></svg>',
            o3: '<svg class="hh-s" viewBox="0 0 160 110" aria-hidden="true" focusable="false">\n<path class="a f1" d="M26 56H134Q132 92 80 92Q28 92 26 56z"/><g transform="translate(46 46) rotate(-6)"><rect class="a f2" width="22" height="9" rx="4.5"/><path class="s" d="M7 1V8M12 1V8M17 1V8"/></g><g transform="translate(74 42) rotate(4)"><rect class="a f2" width="22" height="9" rx="4.5"/><path class="s" d="M7 1V8M12 1V8M17 1V8"/></g><g transform="translate(96 47) rotate(-8)"><rect class="a f2" width="22" height="9" rx="4.5"/><path class="s" d="M7 1V8M12 1V8M17 1V8"/></g><g transform="translate(60 34) rotate(8)"><rect class="a f2" width="22" height="9" rx="4.5"/><path class="s" d="M7 1V8M12 1V8M17 1V8"/></g>\n<ellipse class="a f4" cx="124" cy="24" rx="14" ry="8"/><path class="a f4" d="M138 24l10-7v14z"/><circle class="a f1" cx="115" cy="22" r="2"/></svg>',
            o4: '<svg class="hh-s" viewBox="0 0 160 110" aria-hidden="true" focusable="false"><path class="s" d="M8 96H152"/>\n<rect class="a f3" x="8" y="76" width="144" height="20" rx="3"/><path class="s" d="M8 86H152"/>\n<path class="a f2" d="M36 76V54M36 62c-10 0-14-6-14-12 10 0 14 6 14 12zM36 58c8 0 12-6 12-12-9 0-12 6-12 12z"/>\n<path class="a f2" d="M80 76V44M80 56c-12 0-17-7-17-14 12 0 17 7 17 14zM80 50c10 0 15-8 15-16-11 0-15 8-15 16z"/>\n<path class="a f2" d="M124 76V56M124 64c-10 0-13-6-13-12 9 0 13 6 13 12zM124 60c8 0 11-6 11-11-8 0-11 5-11 11z"/></svg>',
          };
          const PROD = [
            {
              t: "SRF",
              n: "SRF",
              d: "SRF (Solid Recovered Fuel), di Indonesia disebut BBJP. Bahan bakar alternatif untuk pabrik semen dan co-firing di PLTU Suralaya.",
              k: "k1",
              tag: "Bahan bakar alternatif",
              pk: "SRF",
            },
            {
              t: "Pipa dan Manhole Komposit Plastik",
              n: "Pipa Komposit",
              d: "Pipa saluran air limbah dan manhole dari plastik bekas.",
              k: "k2",
              tag: "Daur ulang plastik",
              pk: "pipa",
            },
            {
              t: "Larva BSF",
              n: "Larva BSF",
              d: "Bahan baku pakan ikan dan unggas.",
              k: "k3",
              tag: "Budidaya BSF",
              art: "o3",
            },
            {
              t: "Pupuk Organik",
              n: "Pupuk Organik",
              d: "Dari frass, dipasok ke petani.",
              k: "k4",
              tag: "Dari frass BSF",
              art: "o4",
            },
          ];
          $("#track").innerHTML = PROD.map(
            (p) =>
              `<a class="pcard ${p.k}" href="${PFX}produk/"><h3>${p.n}</h3><p>${p.d}</p><u>Selengkapnya →</u></a>`,
          ).join("");
          $("#prodZ").innerHTML = PROD.map(
            (p) =>
              `<div class="zz rv">${p.art ? `<div class="frame hh-fr">${HHART[p.art]}</div>` : `<div class="frame">${ph(p.pk, "Foto " + p.t)}</div>`}<div><span class="tag">${p.tag}</span><h3>${p.t}</h3><p>${p.d}</p></div></div>`,
          ).join("");
          $("#prev").onclick = () =>
            $("#track").scrollBy({ left: -332, behavior: "smooth" });
          $("#next").onclick = () =>
            $("#track").scrollBy({ left: 332, behavior: "smooth" });

          const TOOLS = [
            {
              t: "Shredder dan Crusher",
              d: "Memecah material sampah agar ukurannya lebih homogen sebelum masuk tahap fermentasi dan pengeringan.",
              s: "s-shred",
              c: "t1",
              k: "shred",
            },
            {
              t: "Jembatan Timbang",
              d: "Mengukur berat sampah yang masuk ke TPSA Bagendung.",
              s: "s-scale",
              c: "t4",
            },
            {
              t: "Fermentasi",
              d: "Menguraikan sampah secara biologis dan menurunkan kadar air awal sebelum pengeringan lanjutan.",
              s: "s-pile",
              c: "t2",
            },
            {
              t: "Rotary Dryer",
              d: "Pengeringan lanjutan setelah fermentasi untuk mengurangi kelembapan material dan meningkatkan nilai kalor produk SRF.",
              s: "s-dryer",
              c: "t3",
            },
            {
              t: "IPAS",
              d: "Instalasi Pengolahan Air Sampah: mengelola air lindi dari sampah untuk mengurangi pencemaran lingkungan.",
              s: "s-tank",
              c: "t3",
            },
            {
              t: "IPLT",
              d: "Instalasi Pengolahan Lumpur Tinja: mengolah lumpur tinja dari tangki septik di sekitar TPSA.",
              s: "s-tank",
              c: "t2",
            },
          ];
          $("#toolsZ").innerHTML = TOOLS.slice(0, 1)
            .map(
              (x) =>
                `<div class="zz rv">${x.k ? `<div class="frame">${ph(x.k, "Foto " + x.t)}</div>` : art(x.s, "0 0 400 300", x.c)}<div><span class="tag">Pengolahan</span><h3>${x.t}</h3><p>${x.d}</p></div></div>`,
            )
            .join("");
          const STG = [
            "Tahap 1",
            "Tahap 3",
            "Tahap 4",
            "Pendukung",
            "Pendukung",
          ];
          $("#toolsC").innerHTML = TOOLS.slice(1)
            .map(
              (x, i) =>
                `<div class="cc rv d${i % 3}"><div class="tx" style="padding:26px 26px 30px"><span class="stg">${STG[i]}</span><h3>${x.t}</h3><p>${x.d}</p></div></div>`,
            )
            .join("");
          $("#toolsG").innerHTML = [
            "Jembatan timbang",
            "Shredder dan crusher",
            "Fermentasi",
            "Rotary dryer",
            "SRF / BBJP",
          ]
            .map((t, j) => `<li><i>${j + 1}</i>${t}</li>`)
            .join("");

          const IND = [
            [
              "Pertambangan dan Penggalian",
              "Pemrosesan material keras untuk produksi bahan tambang.",
              I.pile,
            ],
            [
              "Konstruksi dan Beton",
              "Pengolahan semen, aspal, dan bahan bangunan berkualitas tinggi.",
              I.build,
            ],
            [
              "Manufaktur dan Industri Berat",
              "Pembuatan peralatan tahan aus untuk sektor baja dan besi.",
              I.gear,
            ],
            [
              "Daur Ulang",
              "Pengolahan plastik, vinil, kayu, dan material lainnya dengan efisiensi tinggi.",
              I.rec,
            ],
          ];
          const IK = ["tambang", "beton", "las", "daur"];
          const tiles = IND.map(
            (x, i) =>
              `<div class="itile rv">${ph(IK[i], "Foto " + x[0], "4/3")}<div class="tx"><h3>${x[0]}</h3><p>${x[1]}</p></div></div>`,
          ).join("");

          $("#tilesInd").innerHTML = tiles;

          $("#why").innerHTML = [
            [
              I.drop,
              "Mengurangi Pencemaran",
              "Air lindi dan gas metana ikut dikelola lewat IPAS dan sistem pengelolaan lingkungan.",
            ],
            [
              I.bolt,
              "Menghasilkan Energi Alternatif",
              "SRF dan BBJP dipakai industri semen dan pembangkit listrik sebagai bahan bakar.",
            ],
            [
              I.ok,
              "Bernilai bagi Masyarakat dan Industri",
              "Dengan konsep ekonomi sirkular, setiap bahan yang diolah kembali bermanfaat.",
            ],
          ]
            .map(
              (x) =>
                `<li><i>${ic(x[0])}</i><div><h3>${x[1]}</h3><p>${x[2]}</p></div></li>`,
            )
            .join("");

          $("#mis").innerHTML = [
            [
              I.leaf,
              "Teknologi Hijau untuk Masa Depan",
              "Mengembangkan teknologi pengolahan limbah yang efisien dan ramah lingkungan, agar sampah dikelola lebih efektif dan pencemaran berkurang.",
            ],
            [
              I.link,
              "Kolaborasi untuk Transisi Energi Hijau",
              "Bekerja sama dengan mitra lokal dan global untuk mempercepat penggunaan energi terbarukan.",
            ],
            [
              I.heart,
              "Meningkatkan Kualitas Hidup",
              "Solusi pengelolaan sampah untuk lingkungan bersih dan sehat, serta kesejahteraan sosial dan ekonomi masyarakat.",
            ],
            [
              I.bolt,
              "Sistem Pengelolaan Limbah yang Efektif dan Berkelanjutan",
              "Membangun operasional berbasis SRF dan BBJP sebagai langkah menuju ekonomi hijau dan energi bersih.",
            ],
          ]
            .map((x) => `<div class="rv"><h3>${x[1]}</h3><p>${x[2]}</p></div>`)
            .join("");

          $("#mand").innerHTML = [
            [
              "Inovasi Teknologi",
              "Mengembangkan dan menerapkan teknologi unggulan dalam industri penghancuran.",
              "grid-column:span 3",
              "g",
            ],
            [
              "Desain dan Produksi Sendiri",
              "Peralatan penghancur dengan standar tinggi untuk kualitas dan ketahanan maksimal.",
              "grid-column:span 3",
              "d",
            ],
            [
              "Kontrol Penuh Produksi",
              "Setiap produk memenuhi standar industri internasional.",
              "grid-column:span 2",
              "",
            ],
            [
              "Ketahanan dan Efisiensi",
              "Peralatan lebih tahan lama untuk berbagai sektor industri.",
              "grid-column:span 2",
              "",
            ],
            [
              "Standar Internasional",
              "Mengikuti regulasi dan standar global dalam manufaktur dan inovasi teknologi.",
              "grid-column:span 2",
              "g",
            ],
          ]
            .map(
              (x) =>
                `<div class="tile ${x[3]} rv" style="${x[2]}"><h3>${x[0]}</h3><p>${x[1]}</p></div>`,
            )
            .join("");

          /* process: diagram alir pabrik */
          const PR = [
            [
              "Timbang",
              "Setiap truk sampah ditimbang di jembatan timbang agar volume yang masuk tercatat.",
              "Truk pengangkut sampah",
              "Volume sampah tercatat",
            ],
            [
              "Cacah",
              "Shredder dan crusher memecah sampah agar ukurannya seragam sebelum fermentasi dan pengeringan.",
              "Sampah dari jembatan timbang",
              "Ukuran seragam",
            ],
            [
              "Fermentasi",
              "Fermentasi membantu meningkatkan kualitas BBJP/SRF sebelum dikeringkan.",
              "Sampah tercacah",
              "Kualitas BBJP/SRF meningkat",
            ],
            [
              "Pengeringan",
              "Dryer menurunkan kadar air dan menaikkan nilai kalor SRF untuk industri.",
              "Hasil fermentasi",
              "Kadar air turun, nilai kalor naik",
            ],
            [
              "BBJP / SRF",
              "Produk akhir dipakai sebagai bahan bakar alternatif, misalnya co-firing di PLTU Suralaya.",
              "Hasil pengeringan",
              "Bahan bakar alternatif",
            ],
            [
              "Air Lindi",
              "IPAS mengolah air lindi dari sampah untuk mengurangi pencemaran lingkungan.",
              "Air lindi dari sampah",
              "Pencemaran lingkungan berkurang",
            ],
          ];
          /* gambar teknik per stasiun (garis saja, digambar bertahap) */
          let _k = 0;
          const dr = (c) =>
            `class="dr${c ? " " + c : ""}" pathLength="1" style="--k:${_k++}"`;
          const P = (d, c) => `<path ${dr(c)} d="${d}"/>`;
          const Cc = (x, y, r, c) =>
            `<circle ${dr(c)} cx="${x}" cy="${y}" r="${r}"/>`;
          const El = (x, y, rx, ry, c) =>
            `<ellipse ${dr(c)} cx="${x}" cy="${y}" rx="${rx}" ry="${ry}"/>`;
          const Rr = (x, y, w, h, r, c) =>
            `<rect ${dr(c)} x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`;
          const GR = '<path class="gr" d="M10 170H310"/>';
          const teeth = (cx, cy, r, n) => {
            let d = "";
            for (let i = 0; i < n; i++) {
              const a = (i / n) * Math.PI * 2,
                c = Math.cos(a),
                s = Math.sin(a);
              d += `M${(cx + c * r).toFixed(1)} ${(cy + s * r).toFixed(1)}L${(cx + c * (r + 7)).toFixed(1)} ${(cy + s * (r + 7)).toFixed(1)}`;
            }
            return d;
          };
          const G = [
            () =>
              GR +
              P("M60 140H260V156H60Z") +
              P("M80 156V170M240 156V170") +
              P("M82 140V86H196V140M196 140V102H224L240 118V140") +
              P("M204 108H221L231 118H204Z") +
              Cc(112, 134, 10) +
              Cc(214, 134, 10) +
              P("M82 86q13-18 27-5t28-3 28 3 31 5", "wt") +
              P("M262 96H306V128H262ZM270 108H298M270 118H288M284 128V170") +
              P("M60 186H260M60 180V192M260 180V192", "am"),
            () =>
              GR +
              P("M96 44H224L198 94H122Z") +
              P("M110 94H210V152H110Z") +
              Cc(140, 123, 16) +
              Cc(180, 123, 16) +
              P(teeth(140, 123, 16, 8), "wt") +
              P(teeth(180, 123, 16, 8), "wt") +
              P("M104 152V170M216 152V170") +
              P("M210 138L252 160") +
              P("M240 164h6v6h-6zM256 163h5v5h-5zM270 164h6v6h-6z", "wt") +
              P(
                "M130 22l7 7-7 7-7-7zM164 10l7 7-7 7-7-7zM196 24l6 6-6 6-6-6z",
                "am",
              ),
            () =>
              GR +
              P("M46 170C76 96 244 96 274 170") +
              P("M84 150H236M98 132H222", "wt") +
              P("M120 84q-9-10 0-20t0-20", "am") +
              P("M160 78q-9-10 0-20t0-20", "am") +
              P("M200 84q-9-10 0-20t0-20", "am") +
              P("M246 44V120") +
              Cc(246, 38, 6),
            () =>
              GR +
              '<g transform="rotate(-4 160 112)">' +
              P("M80 84H240V138H80Z") +
              P("M98 84V138M222 84V138", "wt") +
              P(
                "M112 90L128 132M138 90L154 132M164 90L180 132M190 90L206 132",
                "wt",
              ) +
              "</g>" +
              Cc(116, 148, 9) +
              Cc(206, 148, 9) +
              P("M92 157H230M116 157V170M206 157V170") +
              P("M40 50H80L94 88H66Z") +
              P("M242 98H276V128H242Z") +
              P("M276 113q14-12 28 0q-14 12-28 0Z", "am") +
              P("M148 84V52H170V84") +
              P("M159 44q-7-8 0-16", "am"),
            () => {
              let o = GR;
              for (let r = 0; r < 5; r++)
                for (let i = 0; i < 6 - r; i++)
                  o += Rr(40 + 17 * r + i * 34, 156 - 16 * r, 28, 14, 7);
              return (
                o +
                P("M246 150H262M256 143l8 7-8 7", "am") +
                P(
                  "M274 170V74H300V170M274 92H300M274 110H300M274 128H300M270 74H304",
                  "wt",
                ) +
                P("M287 64q-8-9 0-18t0-18", "am")
              );
            },
            () =>
              GR +
              El(130, 62, 40, 10) +
              P("M90 62V150M170 62V150M90 150A40 10 0 0 0 170 150") +
              P("M90 108q10-8 20 0t20 0 20 0 20 0", "wt") +
              El(240, 102, 28, 8) +
              P("M212 102V150M268 102V150M212 150A28 8 0 0 0 268 150") +
              P("M212 128q7-6 14 0t14 0 14 0 14 0", "wt") +
              P("M170 140H212M24 140H90M268 140H304") +
              P(
                "M52 92c7 11 11 17 11 23a11 11 0 0 1-22 0c0-6 4-12 11-23z",
                "am",
              ) +
              P("M284 112c5 8 8 12 8 16a8 8 0 0 1-16 0c0-4 3-8 8-16z", "wt"),
          ];
          const fl = (d) => `<path class="fl" d="${d}"/>`;
          const FL = [
            fl("M60 140H260V156H60Z") +
              fl("M82 86H196V140H82Z") +
              fl("M196 102H224L240 118V140H196Z"),
            fl("M96 44H224L198 94H122Z") + fl("M110 94H210V152H110Z"),
            fl("M46 170C76 96 244 96 274 170Z"),
            '<g transform="rotate(-4 160 112)">' +
              fl("M80 84H240V138H80Z") +
              "</g>",
            fl("M274 74H300V170H274Z"),
            fl("M90 62V150A40 10 0 0 0 170 150V62Z") +
              fl("M212 102V150A28 8 0 0 0 268 150V102Z"),
          ];
          /* bentuk material saat berada di tiap stasiun */
          const dots = (pts, f) =>
            pts
              .map(
                (q) =>
                  `<rect x="${q[0]}" y="${q[1]}" width="${q[2]}" height="${q[2]}" fill="${f[q[3] % f.length]}" transform="rotate(${q[4]} ${q[0] + q[2] / 2} ${q[1] + q[2] / 2})"/>`,
              )
              .join("");
          const BT = [
            '<path d="M3 26l8-13 9 5 3 10z" fill="#d9e6cf"/><path d="M21 30l6-15 11 4-3 11z" fill="#dcc47e"/><path d="M12 11l10-7 7 9-10 4z" fill="#a9c46f"/><path d="M30 12l9 3-3 9-9-5z" fill="#86a35a"/>',
            dots(
              [
                [5, 18, 5, 0, 20],
                [12, 8, 4, 1, 45],
                [18, 20, 4, 2, 10],
                [24, 10, 5, 0, 60],
                [31, 19, 4, 1, 30],
                [35, 8, 4, 2, 15],
                [9, 26, 4, 2, 50],
                [27, 26, 4, 0, 5],
                [16, 13, 3, 1, 70],
              ],
              ["#d9e6cf", "#a9c46f", "#dcc47e"],
            ),
            '<circle cx="12" cy="24" r="8" fill="#7a9650"/><circle cx="26" cy="22" r="10" fill="#86a35a"/><circle cx="36" cy="26" r="6" fill="#6b8748"/><path d="M14 12q-4-4 0-8M26 8q-4-4 0-8" stroke="#dcc47e" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
            dots(
              [
                [6, 22, 3, 0, 0],
                [12, 26, 3, 0, 20],
                [17, 20, 3, 0, 40],
                [23, 26, 3, 0, 10],
                [29, 21, 3, 0, 30],
                [35, 26, 3, 0, 50],
                [10, 15, 3, 0, 15],
                [22, 14, 3, 0, 45],
                [31, 13, 3, 0, 5],
              ],
              ["#d3e0a6", "#eef3e4"],
            ),
            '<rect x="3" y="20" width="12" height="7" rx="3.5" fill="#a9c46f"/><rect x="17" y="20" width="12" height="7" rx="3.5" fill="#a9c46f"/><rect x="31" y="20" width="10" height="7" rx="3.5" fill="#a9c46f"/><rect x="10" y="12" width="12" height="7" rx="3.5" fill="#b9cf86"/><rect x="24" y="12" width="12" height="7" rx="3.5" fill="#b9cf86"/>',
            '<path d="M22 3c6 8 10 13 10 19a10 10 0 0 1-20 0c0-6 4-11 10-19z" fill="#8cc7b4"/><path d="M17 22a5 5 0 0 0 5 5" stroke="#0b3a25" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
          ];
          const ARW = (d) =>
            `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" aria-hidden="true"><path d="${d}"/></svg>`;
          const pfd = $("#pfd");
          pfd.innerHTML =
            `<div class="pfd-track" role="tablist" aria-label="Tahapan pengolahan"><div class="pfd-rail"><i class="pfd-belt"></i></div><div class="pfd-batch" aria-hidden="true"><div class="g"></div></div>` +
            PR.map(
              (p, i) =>
                `<button class="pfd-st" role="tab" id="pfd-t${i}" aria-controls="pfd-panel"><span class="n">${String(i + 1).padStart(2, "0")}</span><span class="l">${p[0]}</span></button>`,
            ).join("") +
            `</div><div class="pfd-detail" id="pfd-panel" role="tabpanel" aria-live="polite"></div>`;
          const ptrack = $(".pfd-track", pfd),
            pbatch = $(".pfd-batch .g", pfd),
            ppanel = $("#pfd-panel"),
            pbtn = [...ptrack.querySelectorAll(".pfd-st")];
          let pcur = 0;
          function sel(i, f, nav) {
            i = Math.max(0, Math.min(PR.length - 1, i));
            const p = PR[i],
              n = String(i + 1).padStart(2, "0");
            pcur = i;
            ptrack.style.setProperty("--p", i / (PR.length - 1));
            pbtn.forEach((b, j) => {
              b.setAttribute("aria-selected", j === i);
              b.tabIndex = j === i ? 0 : -1;
              b.classList.toggle("done", j < i);
              if (f && j === i) b.focus();
            });
            pbatch.innerHTML = `<svg viewBox="0 0 44 34" width="44" height="34">${BT[i]}</svg>`;
            pbatch.classList.remove("pop");
            void pbatch.offsetWidth;
            pbatch.classList.add("pop");
            _k = 0;
            ppanel.setAttribute("aria-labelledby", "pfd-t" + i);
            ppanel.innerHTML =
              `<figure class="pfd-fig"><svg viewBox="0 0 320 200" aria-hidden="true" focusable="false">${FL[i]}${G[i]()}</svg><figcaption><span>Fig. ${n}</span><span>${p[0]}</span></figcaption></figure>` +
              `<div class="pfd-txt"><p class="pfd-k"><span>Stasiun</span> <b>${n}</b> / 0${PR.length}</p><h3>${p[0]}</h3><p class="pfd-d">${p[1]}</p>` +
              `<dl class="pfd-io"><div><dt>Masuk</dt><dd>${p[2]}</dd></div><div><dt>Keluar</dt><dd>${p[3]}</dd></div></dl>` +
              `<div class="pfd-nav"><button class="pfd-nb" data-d="-1" aria-label="Tahap sebelumnya"${i === 0 ? ' aria-disabled="true"' : ""}>${ARW("M19 12H5M11 6l-6 6 6 6")}</button><button class="pfd-nb" data-d="1" aria-label="Tahap berikutnya"${i === PR.length - 1 ? ' aria-disabled="true"' : ""}>${ARW("M5 12h14M13 6l6 6-6 6")}</button></div></div>`;
            if (nav) {
              const t = ppanel.querySelector(`[data-d="${nav}"]`);
              if (t && t.getAttribute("aria-disabled") !== "true") t.focus();
            }
          }
          pbtn.forEach((b, i) => {
            b.onclick = () => sel(i);
            b.onkeydown = (e) => {
              const n = PR.length;
              if (/Arrow(Down|Right)/.test(e.key)) {
                e.preventDefault();
                sel((i + 1) % n, 1);
              }
              if (/Arrow(Up|Left)/.test(e.key)) {
                e.preventDefault();
                sel((i + n - 1) % n, 1);
              }
              if (e.key === "Home") {
                e.preventDefault();
                sel(0, 1);
              }
              if (e.key === "End") {
                e.preventDefault();
                sel(n - 1, 1);
              }
            };
          });
          ppanel.addEventListener("click", (e) => {
            const b = e.target.closest(".pfd-nb");
            if (!b || b.getAttribute("aria-disabled") === "true") return;
            sel(pcur + +b.dataset.d, 0, b.dataset.d);
          });
          sel(0);

          /* cutter hotspots */
          const CT = {
            hook: [
              "Hook Tip",
              "Bagian ujung pemotong. Bisa diregenerasi 2-3 kali tanpa penggantian penuh.",
            ],
            side: [
              "Side Cutter",
              "Pemotong sisi. Bisa diregenerasi 2-3 kali tanpa penggantian penuh.",
            ],
            body: [
              "Cutter Body",
              "Badan cutter. Desain terpisah membuat komponen yang aus bisa diganti secara selektif.",
            ],
            lock: [
              "Locking System",
              "Sistem pengunci yang menyatukan komponen cutter agar mudah dirakit dan dilepas saat perawatan.",
            ],
          };
          const cc = $("#cchips");
          Object.keys(CT).forEach((k) => {
            const b = document.createElement("button");
            b.textContent = CT[k][0];
            b.dataset.k = k;
            b.setAttribute("aria-pressed", "false");
            b.onclick = () => pick(k);
            cc.appendChild(b);
          });
          function pick(k) {
            $$("#cutter .mk").forEach((g) =>
              g.classList.toggle("on", g.dataset.k === k),
            );
            $$("#cchips button").forEach((b) =>
              b.setAttribute("aria-pressed", b.dataset.k === k),
            );
            $("#cinfo").innerHTML = `<h3>${CT[k][0]}</h3><p>${CT[k][1]}</p>`;
          }
          $$("#cutter .mk").forEach((g) => {
            g.onclick = () => pick(g.dataset.k);
            g.onkeydown = (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                pick(g.dataset.k);
              }
            };
          });
          pick("hook");

          /* legal */
          const DOCS = [
            [
              "Nomor Induk Berusaha (NIB)",
              "Terbit 8 Februari 2025, perubahan ke-1 pada 16 April 2025",
              "NIB",
            ],
            [
              "SK Menteri Hukum RI",
              "Persetujuan perubahan anggaran dasar, 16 April 2025",
              "SK",
            ],
            [
              "Pemberitahuan Perubahan Data Perseroan",
              "Ditjen Administrasi Hukum Umum, 16 April 2025",
              "AHU",
            ],
            [
              "NPWP",
              "KPP Pratama Cikarang Selatan, terdaftar 5 Februari 2025",
              "DJP",
            ],
          ];
          const PAT = [
            [
              "Air-Based Foreign Matter Sorting Device",
              "Alat pemilah benda asing berbasis udara",
            ],
            [
              "Method for Forming a Superhard Layer",
              "Metode membentuk lapisan sangat keras dari partikel paduan super keras",
            ],
            [
              "Cutter Assembly for Shredder",
              "Rakitan cutter untuk shredder bahan daur ulang",
            ],
            [
              "Soil Waste Separation Treatment Device",
              "Alat dan metode pemisahan dan pengolahan limbah tanah",
            ],
            ["Domestic Waste Shredder", "Penghancur sampah rumah tangga"],
            [
              "Waste Vinyl Dehydration Device",
              "Alat pengering limbah vinil dengan gaya sentrifugal",
            ],
          ];
          function legal(k) {
            $$("#ltabs button").forEach((b) =>
              b.setAttribute("aria-selected", b.dataset.k === k),
            );
            const d = $("#docs");
            d.className = "docs" + (k === "pat" ? " six" : "");
            d.innerHTML = (k === "doc" ? DOCS : PAT)
              .map(
                (x) =>
                  `<div class="doc"><h3>${x[0]}</h3><small>${x[1]}</small><div class="lines"><i></i><i></i><i></i></div><div class="seal">${k === "doc" ? x[2] : "KIPO"}</div></div>`,
              )
              .join("");
            $("#lnote").textContent =
              k === "pat"
                ? "Paten terdaftar di Korean Intellectual Property Office."
                : "Salinan dokumen asli dapat dibuka lewat tombol di bawah.";
            $("#pdfbtn").href =
              k === "pat"
                ? PFX + "Sertifikasi_PT_Green_Eco_Teknologi.pdf"
                : PFX + "Legalitas_PT_Green_Eco_Teknologi.pdf";
            $("#pdfbtnt").textContent =
              k === "pat"
                ? "Buka PDF Sertifikasi Asli"
                : "Buka PDF Legalitas Asli";
          }
          $$("#ltabs button").forEach(
            (b) => (b.onclick = () => legal(b.dataset.k)),
          );
          legal("doc");

          /* WhatsApp: nomor + template pesan (ikut bahasa aktif) */
          const WA = "6287846916104";
          const waMsg = () =>
            LANG === "en"
              ? "Hello PT Green Eco Teknologi, I would like to ask about your products and services."
              : LANG === "ko"
                ? "안녕하세요, PT Green Eco Teknologi 담당자님. 제품 및 서비스에 대해 문의드립니다."
                : "Halo PT Green Eco Teknologi, saya ingin menanyakan informasi tentang produk dan layanan Anda.";

          /* form */
          $("#form").onsubmit = (e) => {
            e.preventDefault();
            const n = $("#n").value,
              c = $("#c").value,
              m = $("#m").value;
            const t =
              LANG === "en"
                ? "Hello PT Green Eco Teknologi, I am " +
                  n +
                  (c ? " from " + c : "") +
                  ".\n\n" +
                  m
                : LANG === "ko"
                  ? "안녕하세요, PT Green Eco Teknologi 담당자님. 저는 " +
                    (c ? c + "의 " : "") +
                    n +
                    "입니다.\n\n" +
                    m
                  : "Halo PT Green Eco Teknologi, saya " +
                    n +
                    (c ? " dari " + c : "") +
                    ".\n\n" +
                    m;
            window.open(
              "https://wa.me/" + WA + "?text=" + encodeURIComponent(t),
              "_blank",
              "noopener",
            );
          };

          /* semua link WhatsApp (header, kontak, footer) buka chat dengan template */
          document.addEventListener("click", (e) => {
            const t = e.target;
            if (!t || !t.closest) return;
            const a = t.closest('a[href*="wa.me/"]');
            if (!a) return;
            const href = a.getAttribute("href") || "";
            if (href.indexOf("?text=") > -1) return;
            e.preventDefault();
            window.open(
              "https://wa.me/" + WA + "?text=" + encodeURIComponent(waMsg()),
              "_blank",
              "noopener",
            );
          });

          /* reveal + counters + bars + parallax (versi baru) */
          const rm = matchMedia("(prefers-reduced-motion:reduce)").matches;
          if (!rm) document.documentElement.classList.add("mo");

          /* beri kelas .rv / .fr otomatis ke elemen penting */
          if (!rm) {
            const isCont = (el) => {
              const d = getComputedStyle(el).display;
              return (d === "grid" || d === "flex") && el.children.length >= 2;
            };
            $$(".page section:not(.hero) > .wrap").forEach((w) => {
              [...w.children].forEach((c) => {
                if (c.matches(".frame,.rv") || c.querySelector(".rv")) return;
                if (isCont(c)) {
                  [...c.children].forEach((k) => {
                    if (!k.matches(".frame,.rv") && !k.querySelector(".rv"))
                      k.classList.add("rv");
                  });
                } else c.classList.add("rv");
              });
            });
            $$("footer .wrap > *").forEach((k) => {
              if (!k.classList.contains("rv")) k.classList.add("rv");
            });
            $$(".frame").forEach((f) => {
              if (f.closest(".pview,.hv")) return;
              f.classList.add("fr");
              if (f.closest(".rv")) f.classList.add("in", "done");
            });
            $$(".page > section.dk, .page > section.band").forEach((s) =>
              s.classList.add("scrub"),
            );
          }

          /* fancy pack: tandai jenis efek */
          if (!rm) {
            $$(".rv").forEach((el) => {
              if (
                el.matches(
                  ".pcard,.tile,.cc,.itile,.doc,.chartbox,.tiles>*,.ow>div,.mis>div",
                )
              )
                el.classList.add("fx-card");
              else if (
                el.matches("h2") ||
                (el.children[0] &&
                  el.children[0].tagName === "H2" &&
                  el.children.length <= 2)
              )
                el.classList.add("fx-h");
              else if (el.matches(".zz>*,.split>*"))
                el.classList.add("fx-side");
            });
            $$(
              ".page section:not(.dk):not(.band):not(.hero):not(.cl):not(.proc) .lede",
            ).forEach((l) => l.classList.add("ts"));
          }

          /* urutan stagger berdasarkan posisi kolom dalam satu baris */
          function stagger(el) {
            const p = el.parentElement;
            if (!p) return;
            const r = el.getBoundingClientRect();
            const row = [...p.children].filter(
              (s) =>
                s.classList.contains("rv") &&
                Math.abs(s.getBoundingClientRect().top - r.top) < 24,
            );
            row.sort(
              (a, b) =>
                a.getBoundingClientRect().left - b.getBoundingClientRect().left,
            );
            el.style.setProperty("--i", Math.min(row.indexOf(el), 5));
            if (el.classList.contains("fx-side")) {
              el.style.setProperty(
                "--sx",
                r.width > innerWidth * 0.7
                  ? "0px"
                  : r.left + r.width / 2 < innerWidth / 2
                    ? "-90px"
                    : "90px",
              );
            }
          }
          function countUp(c) {
            if (rm) return;
            const v = +c.dataset.count,
              t0 = performance.now(),
              D = 1800;
            (function f(t) {
              const p = Math.min((t - t0) / D, 1),
                e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
              c.textContent = Math.round(v * e);
              if (p < 1) requestAnimationFrame(f);
            })(t0);
          }
          const io = new IntersectionObserver(
            (es) =>
              es.forEach((e) => {
                if (!e.isIntersecting) return;
                io.unobserve(e.target);
                const el = e.target;
                if (el.classList.contains("rv")) stagger(el);
                el.classList.add("in");
                el.querySelectorAll("[data-count]").forEach(countUp);
                if (!rm && el.matches(".rv,.fr"))
                  setTimeout(() => el.classList.add("done"), 1600);
              }),
            { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
          );
          $$(".rv,.fr,[data-bars]").forEach((el) => io.observe(el));

          /* ulangi animasi setiap kali berpindah halaman */
          addEventListener("hashchange", () => {
            if (rm) return;
            requestAnimationFrame(() => {
              $$(".page.on .rv,.page.on .fr,.page.on [data-bars]").forEach(
                (el) => {
                  if (el.closest(".fr") && !el.matches(".fr")) return;
                  el.classList.add("nt");
                  el.classList.remove("in", "done");
                  void el.offsetWidth;
                  el.classList.remove("nt");
                  io.observe(el);
                },
              );
            });
          });

          /* scroll: progress bar, header, parallax, scrub */
          const sp = $("#sp"),
            hd = $("header");
          let tick = false;
          const frame = () => {
            tick = false;
            const y = scrollY,
              vh = innerHeight,
              h = document.documentElement.scrollHeight - vh;
            sp.style.transform =
              "scaleX(" + (h > 0 ? Math.min(y / h, 1).toFixed(4) : 0) + ")";
            hd.classList.toggle("scrolled", y > 8);
            if (rm) return;
            $$(".page.on .gq").forEach((m) => {
              const r = m.getBoundingClientRect();
              if (r.bottom < -50 || r.top > vh + 50) return;
              m.style.setProperty("--mq", ((r.top - vh / 2) * -0.9).toFixed(1));
            });
            $$(".page.on .lede.ts").forEach((l) => {
              const r = l.getBoundingClientRect();
              if (r.bottom < 0 || r.top > vh) return;
              const t = (vh * 0.92 - r.top) / (vh * 0.5);
              l.style.setProperty(
                "--tp",
                (Math.max(0, Math.min(1, t)) * 125).toFixed(1),
              );
            });
            const hero = document.querySelector(".page.on .hero");
            if (hero && y < hero.offsetHeight + 200)
              hero.style.setProperty("--hy", Math.round(y));
            $$(".page.on .fr").forEach((f) => {
              const r = f.getBoundingClientRect();
              if (r.bottom < -80 || r.top > vh + 80) return;
              const k =
                (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
              f.style.setProperty(
                "--py",
                (Math.max(-1, Math.min(1, k)) * r.height * -0.06).toFixed(1) +
                  "px",
              );
            });
            $$(".page.on .scrub").forEach((s) => {
              const r = s.getBoundingClientRect();
              if (r.bottom < 0 || r.top > vh) return;
              const p = Math.max(0, Math.min(1, (vh - r.top) / (vh * 0.55)));
              s.style.setProperty("--sp", p.toFixed(3));
            });
          };
          const onScroll = () => {
            if (!tick) {
              tick = true;
              requestAnimationFrame(frame);
            }
          };
          addEventListener("scroll", onScroll, { passive: true });
          addEventListener("resize", onScroll);
          frame();

          /* tilt kartu + tombol magnetik (hanya perangkat dengan mouse) */
          if (!rm && matchMedia("(hover:hover) and (pointer:fine)").matches) {
            document.addEventListener("pointermove", (e) => {
              const c = e.target.closest && e.target.closest(".fx-card.done");
              $$(".fx-card.tilting").forEach((x) => {
                if (x !== c) x.classList.remove("tilting");
              });
              if (c) {
                const r = c.getBoundingClientRect();
                c.classList.add("tilting");
                c.style.setProperty(
                  "--ry",
                  (((e.clientX - r.left) / r.width - 0.5) * 10).toFixed(2) +
                    "deg",
                );
                c.style.setProperty(
                  "--rx",
                  ((0.5 - (e.clientY - r.top) / r.height) * 8).toFixed(2) +
                    "deg",
                );
              }
            });
          }

          /* router */
          const T = {
            beranda: "PT Green Eco Teknologi",
            tentang: "Tentang Kami",
            alat: "Alat dan Mesin",
            produk: "Produk",
            teknologi: "Teknologi",
            industri: "Aplikasi Industri",
            legalitas: "Legalitas dan Sertifikasi",
            kontak: "Kontak",
          };
          function route() {
            const h = document.body.dataset.p || "beranda";
            const k = T[h] ? h : "beranda";
            $$(".page").forEach((p) =>
              p.classList.toggle("on", p.dataset.p === k),
            );
            $$("nav a").forEach((a) => {
              const t = a.dataset.k || "beranda";
              if (t === k) a.setAttribute("aria-current", "page");
              else a.removeAttribute("aria-current");
            });
            $$(".dd>button").forEach((dd, n) => {
              const g =
                n === 0
                  ? ["tentang", "legalitas"]
                  : ["alat", "teknologi", "industri"];
              if (g.includes(k)) dd.setAttribute("aria-current", "true");
              else dd.removeAttribute("aria-current");
            });
            window._t0 = document.title;
            try {
              i18nT();
            } catch (e) {}
            
          }
          
          route();

          /* i18n: ID (source) / EN / KO */
          const TR = {
            "Uji Lapangan Cilegon": ["Cilegon Field Test", "칠레곤 현장 시험"],
            "Terbukti di Lapangan Indonesia": [
              "Proven in the Field in Indonesia",
              "인도네시아 현장에서 검증됨",
            ],
            "Mesin penghancur dan penyortir kami diuji langsung di lapangan di Cilegon. Keduanya dirancang dan diproduksi sesuai kondisi lokal di Indonesia.":
              [
                "Our crushing and sorting machines were tested on site in Cilegon. Both are designed and manufactured for local conditions in Indonesia.",
                "당사의 파쇄기와 선별기는 칠레곤 현장에서 직접 시험했습니다. 두 장비 모두 인도네시아 현지 조건에 맞게 설계·제작되었습니다.",
              ],
            "Video akan ditambahkan": ["Video coming soon", "영상 추가 예정"],
            "Video uji lapangan mesin penghancur": [
              "Field test video of the crusher",
              "파쇄기 현장 시험 영상",
            ],
            "Video uji lapangan mesin penyortir": [
              "Field test video of the sorting machine",
              "선별기 현장 시험 영상",
            ],
            "Uji lapangan mesin penghancur (1:42)": [
              "Crusher field test (1:42)",
              "파쇄기 현장 시험 (1:42)",
            ],
            "Uji lapangan mesin penyortir (0:28)": [
              "Sorting machine field test (0:28)",
              "선별기 현장 시험 (0:28)",
            ],
            "hasil hancuran sesuai ukuran standar": [
              "of crushed output at standard size",
              "표준 크기로 파쇄된 비율",
            ],
            "pada mesin penghancur biasa": [
              "with an ordinary crusher",
              "일반 파쇄기의 경우",
            ],
            "ukuran produk hancuran": [
              "crushed product size",
              "파쇄 제품 크기",
            ],
            "Jarang berhenti": ["Rarely stops", "가동 중단 거의 없음"],
            "input dibatasi sesuai kapasitas mesin": [
              "input is limited to the machine's capacity",
              "투입량을 장비 용량에 맞게 제한",
            ],
            "Lihat Mesin Kami": ["See Our Machines", "당사 장비 보기"],
            "Mesin Penghancur dan Penyortir": [
              "Crusher and Sorting Machine",
              "파쇄기 및 선별기",
            ],
            "Dua mesin yang kami desain dan produksi sendiri, sudah diuji di lapangan.":
              [
                "Two machines we design and manufacture ourselves, already tested in the field.",
                "직접 설계·제작하여 현장에서 검증한 두 가지 장비입니다.",
              ],
            Penghancur: ["Crusher", "파쇄기"],
            "Mesin Penghancur": ["Crusher", "파쇄기"],
            "Dirancang dan diproduksi sesuai kondisi lokal di Indonesia.": [
              "Designed and manufactured for local conditions in Indonesia.",
              "인도네시아 현지 조건에 맞게 설계·제작되었습니다.",
            ],
            "Hanya menerima input sebanyak yang bisa ditangani, sehingga crusher jarang berhenti.":
              [
                "It only accepts as much input as it can handle, so the crusher rarely stops.",
                "처리 가능한 양만 투입받아 파쇄기가 거의 멈추지 않습니다.",
              ],
            "Lebih dari 95% hasil hancuran sesuai ukuran standar, dibanding kurang dari 60% pada mesin biasa.":
              [
                "Over 95% of the output is crushed to standard size, compared with under 60% for ordinary machines.",
                "95% 이상이 표준 크기로 파쇄되며, 일반 장비는 60% 미만입니다.",
              ],
            "Ukuran produk hancuran 200 mm × 100 mm.": [
              "Crushed product size is 200 mm × 100 mm.",
              "파쇄 제품 크기는 200 mm × 100 mm입니다.",
            ],
            Penyortir: ["Sorter", "선별기"],
            "Mesin Penyortir": ["Sorting Machine", "선별기"],
            "Memisahkan plastik dari tanah dan pasir di lahan TPA dengan memanfaatkan ukuran partikel, kepadatan, dan berat.":
              [
                "Separates plastic from soil and sand at landfill sites using particle size, density, and weight.",
                "입자 크기, 밀도, 무게를 이용해 매립지의 토사에서 플라스틱을 분리합니다.",
              ],
            "Tanah dan pasir ditiup ke bagian belakang.": [
              "Soil and sand are blown to the rear.",
              "흙과 모래는 뒤쪽으로 날려 보냅니다.",
            ],
            "Benda asing selain tanah dibuang ke bagian bawah melalui gerakan mesin.":
              [
                "Foreign matter other than soil is discharged downward by the machine's motion.",
                "흙 이외의 이물질은 장비의 움직임으로 아래쪽으로 배출됩니다.",
              ],
            "Plastik dan vinil keluar dari bagian depan.": [
              "Plastic and vinyl exit from the front.",
              "플라스틱과 비닐은 앞쪽으로 배출됩니다.",
            ],
            "Teknologinya terkait paten alat pemilah benda asing berbasis udara.":
              [
                "The technology relates to our air-based foreign matter sorting patent.",
                "이 기술은 공기식 이물질 선별 장치 특허와 관련됩니다.",
              ],
            "Mesin penyortir kami juga memisahkan plastik dari tanah di lahan TPA.":
              [
                "Our sorting machine also separates plastic from soil at landfill sites.",
                "당사 선별기는 매립지의 토사에서 플라스틱을 분리하는 데에도 사용됩니다.",
              ],
            Beranda: ["Home", "홈"],
            "Tentang Kami": ["About Us", "회사 소개"],
            Perusahaan: ["Company", "회사 개요"],
            "Alat dan Mesin": ["Equipment", "장비"],
            Produk: ["Products", "제품"],
            Teknologi: ["Technology", "기술"],
            Industri: ["Industries", "산업"],
            Kontak: ["Contact", "문의"],
            Legalitas: ["Legal", "법인 서류"],
            "Legalitas dan Sertifikasi": [
              "Legal and Certifications",
              "법인 서류 및 인증",
            ],
            "Aplikasi Industri": ["Industrial Applications", "산업 응용 분야"],
            Menu: ["Menu", "메뉴"],
            "Hubungi Kami": ["Contact Us", "문의하기"],
            "/ Alat dan Mesin": ["/ Equipment", "/ 장비"],
            "/ Industri": ["/ Industries", "/ 산업"],
            "/ Kontak": ["/ Contact", "/ 문의"],
            "/ Legalitas dan Sertifikasi": [
              "/ Legal and Certifications",
              "/ 법인 서류 및 인증",
            ],
            "/ Produk": ["/ Products", "/ 제품"],
            "/ Teknologi": ["/ Technology", "/ 기술"],
            "/ Tentang Kami": ["/ About Us", "/ 회사 소개"],
            Alamat: ["Address", "주소"],
            "Alamat Kantor": ["Office Address", "사무실 주소"],
            Email: ["Email", "이메일"],
            Telepon: ["Phone", "전화"],
            "Telepon +62 838-7253-1682": [
              "Phone +62 838-7253-1682",
              "전화 +62 838-7253-1682",
            ],
            Nama: ["Name", "이름"],
            "Perusahaan atau instansi": [
              "Company or organization",
              "회사 또는 기관",
            ],
            Pesan: ["Message", "메시지"],
            "Kirim Pesan": ["Send a Message", "메시지 보내기"],
            "Kirim Lewat WhatsApp": [
              "Send via WhatsApp",
              "WhatsApp으로 보내기",
            ],
            "Buka di Google Maps": [
              "Open in Google Maps",
              "구글 지도에서 열기",
            ],
            "PT Green Eco Teknologi © 2026. Hak cipta dilindungi.": [
              "PT Green Eco Teknologi © 2026. All rights reserved.",
              "PT Green Eco Teknologi © 2026. 모든 권리 보유.",
            ],
            "Pengolahan sampah berbasis SRF dan BBJP": [
              "SRF- and BBJP-based waste processing",
              "SRF 및 BBJP 기반 폐기물 처리",
            ],
            "Pengolahan sampah berbasis SRF/BBJP dan peralatan penghancur tahan aus.":
              [
                "SRF/BBJP-based waste processing and wear-resistant crushing equipment.",
                "SRF/BBJP 기반 폐기물 처리 및 내마모 파쇄 장비.",
              ],
            "Selengkapnya →": ["Learn more →", "자세히 보기 →"],
            "Semua Produk": ["All Products", "전체 제품"],
            "Kenali Kami": ["Get to Know Us", "회사 알아보기"],
            "Lihat Produk": ["View Products", "제품 보기"],
            "Skala dan Kemampuan Kami": [
              "Our Scale and Capabilities",
              "당사의 규모와 역량",
            ],
            "Proyek utama kami adalah revitalisasi TPSA Bagendung di Kota Cilegon, untuk menaikkan kapasitas olah dan kualitas bahan bakar SRF.":
              [
                "Our main project is the revitalization of the Bagendung landfill (TPSA) in Cilegon, to raise processing capacity and the quality of SRF fuel.",
                "당사의 주요 프로젝트는 Cilegon시 Bagendung 매립장(TPSA) 재정비로, 처리 용량과 SRF 연료 품질을 높이는 것입니다.",
              ],
            "ton sampah per hari: kapasitas olah TPSA Bagendung dari 30 ton, ditargetkan naik hingga 200 ton.":
              [
                "tons of waste per day: processing capacity at the Bagendung landfill (TPSA), from 30 tons, targeted to rise to 200 tons.",
                "톤/일: Bagendung 매립장(TPSA)의 처리 용량을 30톤에서 최대 200톤까지 늘리는 것이 목표입니다.",
              ],
            "Minta Penawaran": ["Request a Quote", "견적 요청"],
            "Pelajari Teknologinya": [
              "Learn About the Technology",
              "기술 알아보기",
            ],
            "Sampah Kota Jadi Bahan Bakar dan Pipa Komposit": [
              "City Waste Into Fuel and Composite Pipes",
              "도시 폐기물을 연료와 복합관으로",
            ],
            "Pengolahan sampah dan mesin penghancur buatan sendiri, dari Cilegon untuk Indonesia.":
              [
                "Waste processing and our own in-house crushing machines, from Cilegon for Indonesia.",
                "자체 제작 파쇄기를 갖춘 폐기물 처리, Cilegon에서 인도네시아로.",
              ],
            "SRF (bahan bakar padat pengganti batu bara), larva BSF, pupuk organik, dan mesin penghancur sampah.":
              [
                "SRF (a solid fuel that replaces coal), BSF larvae, organic fertilizer, and waste crushing machines.",
                "SRF(석탄을 대체하는 고형연료), BSF 유충, 유기질 비료, 폐기물 파쇄기.",
              ],
            "Minta Penawaran": ["Request a Quote", "견적 요청"],
            "Pelajari Teknologinya": [
              "Learn About the Technology",
              "기술 알아보기",
            ],
            "Sampah Kota Jadi Bahan Bakar dan Pipa Komposit": [
              "City Waste Into Fuel and Composite Pipes",
              "도시 폐기물을 연료와 복합관으로",
            ],
            "Pengolahan sampah dan mesin penghancur buatan sendiri, dari Cilegon untuk Indonesia.":
              [
                "Waste processing and our own in-house crushing machines, from Cilegon for Indonesia.",
                "자체 제작 파쇄기를 갖춘 폐기물 처리, Cilegon에서 인도네시아로.",
              ],
            "Kami mengolah sampah rumah tangga di Cilegon menjadi SRF (bahan bakar padat pengganti batu bara, juga disebut BBJP), larva BSF, pupuk organik, dan bahan baku pipa komposit. Kami juga merancang dan memproduksi sendiri mesin penghancur dan pemilah sampah.":
              [
                "We process household waste in Cilegon into SRF (a solid fuel that replaces coal, also called BBJP), BSF larvae, organic fertilizer and raw material for composite pipes. We also design and manufacture our own waste crushing and sorting machines.",
                "Cilegon의 생활폐기물을 SRF(석탄을 대체하는 고형연료, BBJP라고도 함), BSF 유충, 유기질 비료, 복합관 원료로 만듭니다. 또한 폐기물 파쇄기와 선별기를 직접 설계·생산합니다.",
              ],
            "Minta Penawaran": ["Request a Quote", "견적 요청"],
            "Lihat Produk dan Mesin": [
              "View Products and Machines",
              "제품 및 장비 보기",
            ],
            "Menjadi energi untuk hari esok, dari Cilegon untuk Indonesia.": [
              "Into energy for tomorrow, from Cilegon for Indonesia.",
              "내일을 위한 에너지로 바꿉니다. Cilegon에서 인도네시아로.",
            ],
            "Kami membangun sistem pengolahan sampah berbasis Solid Recovered Fuel (SRF) dan Bahan Bakar Jumputan Padat (BBJP) agar limbah tidak hanya berkurang, tapi juga menghasilkan energi.":
              [
                "We build waste processing systems based on Solid Recovered Fuel (SRF) and Solid Refuse Fuel (BBJP), so that waste is not only reduced but also turned into energy.",
                "폐기물 고형연료(SRF)와 고형연료(BBJP) 기반의 폐기물 처리 시스템을 구축하여, 폐기물을 줄이는 데 그치지 않고 에너지로 전환합니다.",
              ],
            "ton/hari target TPSA Bagendung": [
              "tons/day target, Bagendung landfill (TPSA)",
              "톤/일 Bagendung 매립장(TPSA) 목표",
            ],
            "bahan bakar alternatif": ["alternative fuel", "대체 연료"],
            "Konsultasi teknologi SRF": [
              "SRF technology consulting",
              "SRF 기술 컨설팅",
            ],
            "Perencanaan sampai operasi": [
              "From planning to operation",
              "계획부터 운영까지",
            ],
            "Pemilahan dan Energi Alternatif": [
              "Sorting and Alternative Energy",
              "선별 및 대체 에너지",
            ],
            "Sampah sebagai sumber energi": [
              "Waste as an energy source",
              "에너지원으로서의 폐기물",
            ],
            "Pengolahan Sampah Terpadu": [
              "Integrated Waste Processing",
              "통합 폐기물 처리",
            ],
            "Dari penimbangan sampai pengeringan": [
              "From weighing to drying",
              "계량부터 건조까지",
            ],
            "Audit dan dampak lingkungan": [
              "Audit and environmental impact",
              "감사 및 환경 영향",
            ],
            "Air lindi dan gas metana": [
              "Leachate and methane gas",
              "침출수 및 메탄가스",
            ],
            "Dari Tumpukan Sampah Menjadi Bahan Bakar": [
              "From Piles of Waste to Fuel",
              "쓰레기 더미에서 연료로",
            ],
            "PT Green Eco Teknologi hadir sebagai solusi pengelolaan sampah dan energi terbarukan. Salah satu proyek utama kami adalah Revitalisasi TPSA Bagendung di Kota Cilegon, untuk menaikkan kapasitas olah dan kualitas BBJP/SRF.":
              [
                "PT Green Eco Teknologi is a solution for waste management and renewable energy. One of our main projects is the Revitalization of the Bagendung landfill (TPSA) in Cilegon, to raise processing capacity and the quality of BBJP/SRF.",
                "PT Green Eco Teknologi는 폐기물 관리와 재생에너지를 위한 솔루션입니다. 주요 프로젝트 중 하나는 Cilegon시 Bagendung 매립장(TPSA) 재정비로, 처리 용량과 BBJP/SRF 품질을 높이는 것을 목표로 합니다.",
              ],
            "ton sampah per hari. Kapasitas pengolahan TPSA Bagendung ditargetkan naik hingga 200 ton per hari.":
              [
                "tons of waste per day. The Bagendung landfill (TPSA) processing capacity is targeted to rise to up to 200 tons per day.",
                "하루 폐기물 톤수. Bagendung 매립장(TPSA)의 처리 용량을 하루 최대 200톤까지 늘리는 것이 목표입니다.",
              ],
            "jenis produk: SRF, BBJP, kompos, dan biogas": [
              "product types: SRF, BBJP, compost, and biogas",
              "제품 종류: SRF, BBJP, 퇴비, 바이오가스",
            ],
            "paten teknologi penghancur dan pemilah": [
              "patents for crushing and sorting technology",
              "파쇄 및 선별 기술 특허",
            ],
            "peralatan utama, dari jembatan timbang sampai IPAS": [
              "main equipment items, from the weighbridge to IPAS",
              "주요 설비, 계근대부터 IPAS까지",
            ],
            "Ekonomi sirkular": ["Circular economy", "순환경제"],
            "Setiap bahan yang diolah kembali bermanfaat bagi masyarakat dan industri.":
              [
                "Every processed material becomes useful again for communities and industry.",
                "처리된 모든 자재가 지역사회와 산업에 다시 유용하게 쓰입니다.",
              ],
            "Bagaimana Sampah Diolah": [
              "How Waste Is Processed",
              "폐기물 처리 과정",
            ],
            "Klik tiap tahap untuk melihat apa yang terjadi di TPSA Bagendung.":
              [
                "Click each stage to see what happens at the Bagendung landfill (TPSA).",
                "각 단계를 클릭하면 Bagendung 매립장(TPSA)에서 일어나는 일을 볼 수 있습니다.",
              ],
            Timbang: ["Weighing", "계량"],
            Cacah: ["Shredding", "파쇄"],
            Fermentasi: ["Fermentation", "발효"],
            Pengeringan: ["Drying", "건조"],
            "Air Lindi": ["Leachate", "침출수"],
            "Setiap truk sampah ditimbang di jembatan timbang agar volume yang masuk tercatat.":
              [
                "Every waste truck is weighed at the weighbridge so the incoming volume is recorded.",
                "모든 폐기물 운반 트럭은 계근대에서 무게를 재어 반입량을 기록합니다.",
              ],
            "Shredder dan crusher memecah sampah agar ukurannya seragam sebelum fermentasi dan pengeringan.":
              [
                "Shredders and crushers break waste into a uniform size before fermentation and drying.",
                "파쇄기와 크러셔가 발효와 건조 전에 폐기물을 균일한 크기로 파쇄합니다.",
              ],
            "Fermentasi membantu meningkatkan kualitas BBJP/SRF sebelum dikeringkan.":
              [
                "Fermentation helps improve the quality of BBJP/SRF before drying.",
                "발효는 건조 전에 BBJP/RDF의 품질을 높이는 데 도움이 됩니다.",
              ],
            "Dryer menurunkan kadar air dan menaikkan nilai kalor SRF untuk industri.":
              [
                "The dryer lowers moisture content and raises the calorific value of SRF for industry.",
                "건조기가 수분 함량을 낮추고 산업용 RDF의 발열량을 높입니다.",
              ],
            "Produk akhir dipakai sebagai bahan bakar alternatif, misalnya co-firing di PLTU Suralaya.":
              [
                "The final product is used as an alternative fuel, for example for co-firing at the Suralaya power plant (PLTU).",
                "최종 제품은 대체 연료로 사용되며, 예를 들어 Suralaya 발전소(PLTU)의 혼소(co-firing)에 쓰입니다.",
              ],
            "IPAS mengolah air lindi dari sampah untuk mengurangi pencemaran lingkungan.":
              [
                "The leachate treatment plant (IPAS) treats leachate from waste to reduce environmental pollution.",
                "침출수 처리시설(IPAS)이 폐기물에서 나오는 침출수를 처리하여 환경오염을 줄입니다.",
              ],
            "Produk Kami": ["Our Products", "제품 소개"],
            "Limbah diubah menjadi produk bernilai guna.": [
              "Waste is turned into useful products.",
              "폐기물을 유용한 제품으로 바꿉니다.",
            ],
            Kompos: ["Compost", "퇴비"],
            Biogas: ["Biogas", "바이오가스"],
            "Bahan bakar alternatif dari sampah, digunakan dalam industri semen dan pembangkit listrik.":
              [
                "Alternative fuel made from waste, used in the cement industry and power generation.",
                "폐기물로 만든 대체 연료로, 시멘트 산업과 발전소에서 사용됩니다.",
              ],
            "Bahan Bakar Jumputan Padat. Produk SRF dari TPSA Bagendung yang digunakan untuk co-firing di PLTU Suralaya.":
              [
                "Solid Recovered Fuel (Bahan Bakar Jumputan Padat). SRF product from the Bagendung landfill (TPSA), used for co-firing at the Suralaya power plant (PLTU).",
                "고형연료(Bahan Bakar Jumputan Padat). Bagendung 매립장(TPSA)에서 생산되어 Suralaya 발전소(PLTU)의 혼소(co-firing)에 사용되는 SRF 제품입니다.",
              ],
            "Produk yang dihasilkan dari sampah organik melalui proses aerobik.":
              [
                "A product made from organic waste through an aerobic process.",
                "유기성 폐기물을 호기성 공정으로 처리해 만든 제품입니다.",
              ],
            "Energi alternatif yang dihasilkan dari penguraian limbah organik tanpa oksigen (anaerobic digestion).":
              [
                "Alternative energy produced by breaking down organic waste without oxygen (anaerobic digestion).",
                "산소 없이 유기성 폐기물을 분해하여 얻는 대체 에너지입니다(혐기성 소화).",
              ],
            "Mengapa Sampah Perlu Diolah Jadi SRF": [
              "Why Waste Should Be Turned into SRF",
              "폐기물을 RDF로 만들어야 하는 이유",
            ],
            "Mengurangi Pencemaran": ["Reducing Pollution", "오염 저감"],
            "Air lindi dan gas metana ikut dikelola lewat IPAS dan sistem pengelolaan lingkungan.":
              [
                "Leachate and methane gas are also managed through the leachate treatment plant (IPAS) and the environmental management system.",
                "침출수와 메탄가스도 침출수 처리시설(IPAS)과 환경 관리 시스템을 통해 함께 관리됩니다.",
              ],
            "Menghasilkan Energi Alternatif": [
              "Producing Alternative Energy",
              "대체 에너지 생산",
            ],
            "SRF dan BBJP dipakai industri semen dan pembangkit listrik sebagai bahan bakar.":
              [
                "SRF and BBJP are used as fuel by the cement industry and power plants.",
                "RDF와 BBJP는 시멘트 산업과 발전소에서 연료로 사용됩니다.",
              ],
            "Bernilai bagi Masyarakat dan Industri": [
              "Valuable for Communities and Industry",
              "지역사회와 산업에 가치를 더합니다",
            ],
            "Dengan konsep ekonomi sirkular, setiap bahan yang diolah kembali bermanfaat.":
              [
                "With the circular economy concept, every processed material becomes useful again.",
                "순환경제 개념에 따라 처리된 모든 자재가 다시 유용하게 쓰입니다.",
              ],
            "Pisau Penghancur yang Lebih Awet": [
              "Longer-lasting Crusher Blades",
              "더 오래 쓰는 파쇄 칼날",
            ],
            "Teknologi yang kami pakai pada mata pisau shredder dan crusher menekan biaya penggantian.":
              [
                "The technology we use on shredder and crusher blades cuts replacement costs.",
                "파쇄기와 크러셔 칼날에 적용한 기술이 교체 비용을 줄여 줍니다.",
              ],
            "lebih tahan aus dibanding pelat baja biasa, berkat pelapisan karbida tungsten WC-Co.":
              [
                "more wear resistant than ordinary steel plate, thanks to WC-Co tungsten carbide coating.",
                "WC-Co 텅스텐 카바이드 코팅 덕분에 일반 강판보다 내마모성이 높습니다.",
              ],
            "Pelat baja biasa": ["Ordinary steel plate", "일반 강판"],
            "Pelapisan WC-Co": ["WC-Co coating", "WC-Co 코팅"],
            "Dipakai di Berbagai Industri": [
              "Used Across Many Industries",
              "다양한 산업에서 사용됩니다",
            ],
            "Peralatan penghancur yang kami desain dan produksi sendiri.": [
              "Crushing equipment we design and manufacture ourselves.",
              "직접 설계하고 생산하는 파쇄 장비.",
            ],
            "Pertambangan dan Penggalian": [
              "Mining and Quarrying",
              "광업 및 채석",
            ],
            "Pemrosesan material keras untuk produksi bahan tambang.": [
              "Processing hard materials for mining production.",
              "광물 생산을 위한 경질 소재 처리.",
            ],
            "Konstruksi dan Beton": [
              "Construction and Concrete",
              "건설 및 콘크리트",
            ],
            "Pengolahan semen, aspal, dan bahan bangunan berkualitas tinggi.": [
              "Processing cement, asphalt, and high-quality building materials.",
              "시멘트, 아스팔트 및 고품질 건축 자재를 처리합니다.",
            ],
            "Manufaktur dan Industri Berat": [
              "Manufacturing and Heavy Industry",
              "제조 및 중공업",
            ],
            "Pembuatan peralatan tahan aus untuk sektor baja dan besi.": [
              "Making wear-resistant equipment for the steel and iron sector.",
              "철강 산업용 내마모 장비를 제작합니다.",
            ],
            "Daur Ulang": ["Recycling", "재활용"],
            "Pengolahan plastik, vinil, kayu, dan material lainnya dengan efisiensi tinggi.":
              [
                "Highly efficient processing of plastic, vinyl, wood, and other materials.",
                "플라스틱, 비닐, 목재 등 다양한 소재를 고효율로 처리합니다.",
              ],
            "Revitalisasi TPSA Bagendung": [
              "Revitalization of the Bagendung landfill (TPSA)",
              "Bagendung 매립장(TPSA) 재정비",
            ],
            "Teknologi pencacahan, fermentasi, dan pengeringan untuk meningkatkan kualitas SRF. Mari diskusikan kebutuhan Anda.":
              [
                "Shredding, fermentation, and drying technology to improve SRF quality. Let's discuss your needs.",
                "SRF 품질을 높이는 파쇄, 발효, 건조 기술. 귀사의 요구 사항을 함께 논의해 보세요.",
              ],
            "Solusi inovatif dalam pengelolaan sampah dan energi terbarukan.": [
              "Innovative solutions in waste management and renewable energy.",
              "폐기물 관리와 재생에너지 분야의 혁신적인 솔루션.",
            ],
            "Tantangan Lingkungan, Kami Jadikan Peluang": [
              "We Turn Environmental Challenges into Opportunities",
              "환경 문제를 기회로 바꿉니다",
            ],
            "Pendekatan berbasis teknologi dan keberlanjutan untuk perubahan yang nyata.":
              [
                "A technology- and sustainability-driven approach for real change.",
                "기술과 지속 가능성을 바탕으로 실질적인 변화를 만듭니다.",
              ],
            "Kota Cilegon menghadapi tantangan pengelolaan sampah yang makin kompleks. Sebagai respons atas kebutuhan solusi yang lebih efisien, PT Green Eco Teknologi didirikan untuk mengembangkan teknologi pengolahan sampah berbasis SRF dan BBJP.":
              [
                "The city of Cilegon faces an increasingly complex waste management challenge. In response to the need for more efficient solutions, PT Green Eco Teknologi was founded to develop SRF- and BBJP-based waste processing technology.",
                "Cilegon시는 갈수록 복잡해지는 폐기물 관리 문제에 직면해 있습니다. 보다 효율적인 해결책에 대한 요구에 부응하기 위해 PT Green Eco Teknologi는 SRF 및 BBJP 기반 폐기물 처리 기술을 개발하고자 설립되었습니다.",
              ],
            "Kami berkomitmen menciptakan sistem yang tidak hanya mengurangi limbah, tetapi juga menghasilkan energi terbarukan.":
              [
                "We are committed to building systems that not only reduce waste but also generate renewable energy.",
                "폐기물을 줄일 뿐 아니라 재생에너지도 만들어 내는 시스템을 구축하기 위해 노력하고 있습니다.",
              ],
            Tantangan: ["Challenge", "과제"],
            "Pengelolaan sampah Kota Cilegon makin kompleks.": [
              "Waste management in Cilegon grows more complex.",
              "Cilegon시의 폐기물 관리가 갈수록 복잡해지고 있습니다.",
            ],
            Pendirian: ["Founding", "설립"],
            "Dibangun untuk mengembangkan pengolahan berbasis SRF dan BBJP.": [
              "Founded to develop SRF- and BBJP-based waste processing.",
              "SRF 및 BBJP 기반 폐기물 처리를 개발하기 위해 설립되었습니다.",
            ],
            "Kapasitas naik dari 30 ke 200 ton/hari.": [
              "Capacity rises from 30 to 200 tons/day.",
              "처리 용량이 하루 30톤에서 200톤으로 늘어납니다.",
            ],
            "Kapasitas Pengolahan TPSA Bagendung": [
              "Processing Capacity of the Bagendung Landfill (TPSA)",
              "Bagendung 매립장(TPSA) 처리 용량",
            ],
            "Revitalisasi menargetkan kapasitas olah naik dari 30 ton/hari menjadi 200 ton/hari.":
              [
                "The revitalization targets a rise in processing capacity from 30 tons/day to 200 tons/day.",
                "재정비를 통해 처리 용량을 하루 30톤에서 200톤으로 늘리는 것을 목표로 합니다.",
              ],
            "Sebelum revitalisasi": ["Before revitalization", "재정비 전"],
            "Target revitalisasi": ["Revitalization target", "재정비 목표"],
            "Satuan: ton sampah per hari.": [
              "Unit: tons of waste per day.",
              "단위: 폐기물 톤/일.",
            ],
            "Tujuan Revitalisasi TPSA Bagendung": [
              "Goals of the Bagendung Landfill (TPSA) Revitalization",
              "Bagendung 매립장(TPSA) 재정비 목표",
            ],
            "Pencacahan dan Fermentasi": [
              "Shredding and Fermentation",
              "파쇄 및 발효",
            ],
            "Meningkatkan kualitas BBJP/SRF.": [
              "Improving BBJP/SRF quality.",
              "BBJP/SRF 품질을 높입니다.",
            ],
            "Kapasitas Naik Hingga 200 Ton": [
              "Capacity Up to 200 Tons",
              "처리 용량 최대 200톤",
            ],
            "Dari 30 ton/hari menjadi 200 ton/hari.": [
              "From 30 tons/day to 200 tons/day.",
              "하루 30톤에서 200톤으로 확대합니다.",
            ],
            "Sistem Dryer": ["Dryer System", "건조 시스템"],
            "Menurunkan kadar air dan menaikkan nilai kalor SRF.": [
              "Lowers moisture content and raises the calorific value of SRF.",
              "수분 함량을 낮추고 RDF의 발열량을 높입니다.",
            ],
            "Lingkungan Terintegrasi": [
              "Integrated Environmental Management",
              "통합 환경 관리",
            ],
            "Pengelolaan air lindi dan gas metana.": [
              "Management of leachate and methane gas.",
              "침출수와 메탄가스를 관리합니다.",
            ],
            "Visi kami": ["Our vision", "우리의 비전"],
            "Menjadi pemimpin dalam inovasi teknologi pengelolaan sampah yang berkelanjutan untuk menciptakan lingkungan yang lebih sehat dan ramah energi.":
              [
                "To be a leader in sustainable waste management technology innovation, creating a healthier, energy-friendly environment.",
                "지속 가능한 폐기물 관리 기술 혁신을 선도하여 더 건강하고 에너지 친화적인 환경을 만듭니다.",
              ],
            "Misi Kami": ["Our Mission", "우리의 미션"],
            "Teknologi Hijau untuk Masa Depan": [
              "Green Technology for the Future",
              "미래를 위한 친환경 기술",
            ],
            "Mengembangkan teknologi pengolahan limbah yang efisien dan ramah lingkungan, agar sampah dikelola lebih efektif dan pencemaran berkurang.":
              [
                "Developing efficient, environmentally friendly waste processing technology so waste is managed more effectively and pollution is reduced.",
                "효율적이고 친환경적인 폐기물 처리 기술을 개발하여 폐기물을 더 효과적으로 관리하고 오염을 줄입니다.",
              ],
            "Kolaborasi untuk Transisi Energi Hijau": [
              "Collaboration for the Green Energy Transition",
              "친환경 에너지 전환을 위한 협력",
            ],
            "Bekerja sama dengan mitra lokal dan global untuk mempercepat penggunaan energi terbarukan.":
              [
                "Working with local and global partners to accelerate the use of renewable energy.",
                "국내외 파트너와 협력하여 재생에너지 활용을 앞당깁니다.",
              ],
            "Meningkatkan Kualitas Hidup": [
              "Improving Quality of Life",
              "삶의 질 향상",
            ],
            "Solusi pengelolaan sampah untuk lingkungan bersih dan sehat, serta kesejahteraan sosial dan ekonomi masyarakat.":
              [
                "Waste management solutions for a clean, healthy environment and for the social and economic well-being of communities.",
                "깨끗하고 건강한 환경과 지역사회의 사회·경제적 복지를 위한 폐기물 관리 솔루션.",
              ],
            "Sistem Pengelolaan Limbah yang Efektif dan Berkelanjutan": [
              "Effective and Sustainable Waste Management Systems",
              "효과적이고 지속 가능한 폐기물 관리 시스템",
            ],
            "Membangun operasional berbasis SRF dan BBJP sebagai langkah menuju ekonomi hijau dan energi bersih.":
              [
                "Building operations based on SRF and BBJP as a step toward a green economy and clean energy.",
                "RDF와 BBJP 기반 운영 체계를 구축하여 녹색경제와 청정에너지로 나아갑니다.",
              ],
            "Layanan Perusahaan": ["Our Services", "사업 분야"],
            "Konsultasi dan Implementasi Teknologi SRF": [
              "SRF Technology Consulting and Implementation",
              "SRF 기술 컨설팅 및 구축",
            ],
            "Pendampingan merancang dan menerapkan sistem SRF/BBJP, dari perencanaan sampai operasi.":
              [
                "Support in designing and implementing SRF/BBJP systems, from planning to operation.",
                "계획부터 운영까지 SRF/BBJP 시스템의 설계와 구축을 지원합니다.",
              ],
            "Memilah sampah dan memanfaatkannya sebagai sumber energi.": [
              "Sorting waste and using it as an energy source.",
              "폐기물을 선별하여 에너지원으로 활용합니다.",
            ],
            "Mengelola alur sampah dari penimbangan sampai pengeringan.": [
              "Managing the waste flow from weighing through drying.",
              "계량부터 건조까지 폐기물의 흐름을 관리합니다.",
            ],
            "Audit dan Pengelolaan Dampak Lingkungan": [
              "Environmental Audit and Impact Management",
              "환경 감사 및 영향 관리",
            ],
            "Termasuk pengelolaan air lindi dan gas metana.": [
              "Including management of leachate and methane gas.",
              "침출수와 메탄가스 관리를 포함합니다.",
            ],
            "Peralatan yang dipakai dalam pengolahan sampah di TPSA Bagendung.":
              [
                "Equipment used for waste processing at the Bagendung landfill (TPSA).",
                "Bagendung 매립장(TPSA) 폐기물 처리에 사용되는 장비.",
              ],
            Pengolahan: ["Processing", "처리"],
            "Shredder dan Crusher": [
              "Shredder and Crusher",
              "파쇄기 및 크러셔",
            ],
            "Memecah material sampah agar ukurannya lebih homogen sebelum masuk tahap fermentasi dan pengeringan.":
              [
                "Breaks waste material into a more uniform size before fermentation and drying.",
                "발효와 건조 단계에 들어가기 전에 폐기물을 더 균일한 크기로 파쇄합니다.",
              ],
            "Jalur peralatan di dalam fasilitas": [
              "Equipment line inside the facility",
              "시설 내부 설비 라인",
            ],
            "Konveyor dan pemilahan": [
              "Conveyor and sorting",
              "컨베이어 및 선별",
            ],
            "Alur Peralatan": ["Equipment Flow", "설비 흐름"],
            "Urutan peralatan utama di TPSA Bagendung. IPAS mengolah air lindi dan IPLT mengolah lumpur tinja di sekitar TPSA.":
              [
                "The sequence of main equipment at the Bagendung landfill (TPSA). IPAS treats leachate and IPLT treats septic sludge around the landfill.",
                "Bagendung 매립장(TPSA)의 주요 설비 순서입니다. IPAS는 침출수를, IPLT는 매립장 주변의 분뇨 슬러지를 처리합니다.",
              ],
            "Jembatan timbang": ["Weighbridge", "계근대"],
            "Jembatan Timbang": ["Weighbridge", "계근대"],
            "Shredder dan crusher": [
              "Shredder and crusher",
              "파쇄기 및 크러셔",
            ],
            "Fermentasi dan dryer": [
              "Fermentation and dryer",
              "발효 및 건조기",
            ],
            "Fermentasi dan Dryer": [
              "Fermentation and Dryer",
              "발효 및 건조기",
            ],
            "Menurunkan kadar air sampah dan meningkatkan nilai kalor produk SRF.":
              [
                "Lowers the moisture content of waste and raises the calorific value of SRF products.",
                "폐기물의 수분 함량을 낮추고 SRF 제품의 발열량을 높입니다.",
              ],
            "Rotary Dryer": ["Rotary Dryer", "로터리 건조기"],
            "Unit pengeringan yang dipakai dalam produksi SRF untuk mengurangi kelembapan material.":
              [
                "A drying unit used in SRF production to reduce material moisture.",
                "SRF 생산에서 소재의 수분을 줄이는 데 쓰이는 건조 장치입니다.",
              ],
            "Mengukur berat sampah yang masuk ke TPSA Bagendung.": [
              "Measures the weight of waste entering the Bagendung landfill (TPSA).",
              "Bagendung 매립장(TPSA)으로 반입되는 폐기물의 무게를 측정합니다.",
            ],
            "Instalasi Pengolahan Air Sampah: mengelola air lindi dari sampah untuk mengurangi pencemaran lingkungan.":
              [
                "Leachate Treatment Plant: manages leachate from waste to reduce environmental pollution.",
                "침출수 처리시설: 폐기물에서 나오는 침출수를 관리하여 환경오염을 줄입니다.",
              ],
            "Instalasi Pengolahan Lumpur Tinja: mengolah lumpur tinja dari tangki septik di sekitar TPSA.":
              [
                "Septage Treatment Plant: treats septic sludge from tanks around the landfill (TPSA).",
                "분뇨 처리시설: 매립장(TPSA) 주변 정화조의 분뇨 슬러지를 처리합니다.",
              ],
            "Tahap 1": ["Stage 1", "1단계"],
            "Tahap 2": ["Stage 2", "2단계"],
            "Tahap 3": ["Stage 3", "3단계"],
            "Tahap 4": ["Stage 4", "4단계"],
            Fermentasi: ["Fermentation", "발효"],
            "Rotary dryer": ["Rotary dryer", "로터리 건조기"],
            "Menguraikan sampah secara biologis dan menurunkan kadar air awal sebelum pengeringan lanjutan.":
              [
                "Biologically breaks down the waste and lowers its initial moisture before further drying.",
                "폐기물을 생물학적으로 분해하고 후속 건조 전에 초기 수분을 낮춥니다.",
              ],
            "Pengeringan lanjutan setelah fermentasi untuk mengurangi kelembapan material dan meningkatkan nilai kalor produk SRF.":
              [
                "Further drying after fermentation to reduce material moisture and raise the calorific value of SRF products.",
                "발효 후 추가 건조로 소재의 수분을 줄이고 SRF 제품의 발열량을 높입니다.",
              ],
            "Crane grapple dan area penerimaan": [
              "Grapple crane and receiving area",
              "그래플 크레인 및 반입 구역",
            ],
            "Crane grapple di area penerimaan sampah": [
              "Grapple crane at the waste receiving area",
              "폐기물 반입 구역의 그래플 크레인",
            ],
            "Konveyor dan peralatan pemilahan di dalam fasilitas": [
              "Conveyor and sorting equipment inside the facility",
              "시설 내부의 컨베이어 및 선별 설비",
            ],
            Pendukung: ["Supporting", "지원 설비"],
            "Butuh Peralatan Penghancur?": [
              "Need Crushing Equipment?",
              "파쇄 장비가 필요하신가요?",
            ],
            "Kami mendesain dan memproduksi sendiri lini peralatan penghancur.":
              [
                "We design and manufacture our own line of crushing equipment.",
                "파쇄 장비 라인을 자체 설계하고 생산합니다.",
              ],
            "Limbah diubah menjadi produk bernilai guna yang mendukung ekonomi hijau.":
              [
                "Waste is turned into useful products that support the green economy.",
                "폐기물을 녹색경제를 뒷받침하는 유용한 제품으로 바꿉니다.",
              ],
            "Bahan bakar alternatif": ["Alternative fuel", "대체 연료"],
            "Co-firing PLTU Suralaya": [
              "Co-firing at PLTU Suralaya",
              "PLTU Suralaya 혼소",
            ],
            "Kompos dari sampah organik": [
              "Compost from organic waste",
              "유기성 폐기물 퇴비",
            ],
            "Proses aerobik": ["Aerobic process", "호기성 공정"],
            "Anaerobic digestion": ["Anaerobic digestion", "혐기성 소화"],
            "Tertarik dengan SRF atau BBJP?": [
              "Interested in SRF or BBJP?",
              "SRF 또는 BBJP에 관심이 있으신가요?",
            ],
            "Dengan konsep ekonomi sirkular, setiap bahan yang diolah menjadi solusi yang bermanfaat.":
              [
                "With the circular economy concept, every processed material becomes a useful solution.",
                "순환경제 개념에 따라 처리된 모든 자재가 유용한 해결책이 됩니다.",
              ],
            "Pelapisan tungsten carbide dan desain pisau modular untuk peralatan penghancur.":
              [
                "Tungsten carbide coating and modular blade design for crushing equipment.",
                "파쇄 장비를 위한 텅스텐 카바이드 코팅과 모듈형 칼날 설계.",
              ],
            "Tungsten Carbide Welding": [
              "Tungsten Carbide Welding",
              "텅스텐 카바이드 용접",
            ],
            "Diterapkan pada mata pisau pemotong wheel loader dan crusher untuk meningkatkan ketahanan aus serta efisiensi pemrosesan material.":
              [
                "Applied to the cutting blades of wheel loaders and crushers to improve wear resistance and material processing efficiency.",
                "휠 로더와 크러셔의 절단 날에 적용하여 내마모성과 자재 처리 효율을 높입니다.",
              ],
            "Ketahanan pelat baja berlapis karbida tungsten WC-Co dibanding pelat baja biasa.":
              [
                "Durability of steel plate coated with WC-Co tungsten carbide compared with ordinary steel plate.",
                "WC-Co 텅스텐 카바이드를 코팅한 강판과 일반 강판의 내구성 비교.",
              ],
            "Tanpa pengelasan khusus": [
              "Without special welding",
              "특수 용접 미적용",
            ],
            "Pengelasan Khusus": ["Special Welding", "특수 용접"],
            "Umur pakai, dengan performa optimal hingga akhir masa pakai.": [
              "Service life, with optimal performance until the end of its life.",
              "사용 수명이 길고, 수명이 끝날 때까지 최적의 성능을 유지합니다.",
            ],
            "Hasil Pelapisan dan Pengelasan": [
              "Coating and Welding Results",
              "코팅 및 용접 결과",
            ],
            "Pelat dengan lapisan tungsten carbide": [
              "Plate with a tungsten carbide coating",
              "텅스텐 카바이드 코팅 강판",
            ],
            "Pelindung aus pada bucket wheel loader": [
              "Wear protection on a wheel loader bucket",
              "휠 로더 버킷의 내마모 보호재",
            ],
            "Separate Assembly Cutter": [
              "Separate Assembly Cutter",
              "분리 조립형 커터",
            ],
            "Desain modular memungkinkan penggantian selektif pada komponen yang aus. Klik bagian pada gambar atau pilih dari daftar.":
              [
                "A modular design allows worn components to be replaced selectively. Click a part on the image or choose from the list.",
                "모듈형 설계로 마모된 부품만 선택적으로 교체할 수 있습니다. 이미지의 부품을 클릭하거나 목록에서 선택하세요.",
              ],
            "Hook Tip": ["Hook Tip", "후크 팁"],
            "Side Cutter": ["Side Cutter", "측면 커터"],
            "Cutter Body": ["Cutter Body", "커터 바디"],
            "Locking System": ["Locking System", "체결기"],
            "Bagian ujung pemotong. Bisa diregenerasi 2-3 kali tanpa penggantian penuh.":
              [
                "The cutting tip. It can be regenerated 2-3 times without full replacement.",
                "절단 팁입니다. 전체 교체 없이 2~3회 재생할 수 있습니다.",
              ],
            "Pemotong sisi. Bisa diregenerasi 2-3 kali tanpa penggantian penuh.":
              [
                "The side cutter. It can be regenerated 2-3 times without full replacement.",
                "측면 커터입니다. 전체 교체 없이 2~3회 재생할 수 있습니다.",
              ],
            "Badan cutter. Desain terpisah membuat komponen yang aus bisa diganti secara selektif.":
              [
                "The cutter body. Its separate design lets worn components be replaced selectively.",
                "커터 본체입니다. 분리형 설계로 마모된 부품만 선택적으로 교체할 수 있습니다.",
              ],
            "Sistem pengunci yang menyatukan komponen cutter agar mudah dirakit dan dilepas saat perawatan.":
              [
                "The locking system holds the cutter components together so they are easy to assemble and remove during maintenance.",
                "체결 장치가 커터 부품을 하나로 고정하여 정비 시 조립과 분리가 쉽습니다.",
              ],
            Regenerasi: ["Regeneration", "재생 가능"],
            "Hook dan side cutter bisa diregenerasi 2-3 kali tanpa penggantian penuh.":
              [
                "Hook and side cutters can be regenerated 2-3 times without full replacement.",
                "후크와 측면 커터는 전체 교체 없이 2~3회 재생할 수 있습니다.",
              ],
            "Biaya Operasional": ["Operating Costs", "운영 비용"],
            "Hanya komponen yang aus yang diganti.": [
              "Only worn components are replaced.",
              "마모된 부품만 교체합니다.",
            ],
            "Efisien Dirawat": ["Easy to Maintain", "유지보수 용이"],
            "Pemeliharaan lebih cepat berkat desain modular.": [
              "Faster maintenance thanks to the modular design.",
              "모듈형 설계로 유지보수가 더 빠릅니다.",
            ],
            "Umur pakai hingga 4-5 kali lebih lama.": [
              "Service life up to 4-5 times longer.",
              "사용 수명이 최대 4~5배 늘어납니다.",
            ],
            "Lapisan WC-Co": ["WC-Co coating", "WC-Co 코팅"],
            "Hingga 15 kali lebih tahan aus.": [
              "Up to 15 times more wear resistant.",
              "내마모성이 최대 15배 높습니다.",
            ],
            "Produksi dan Desain Mandiri": [
              "In-house Production and Design",
              "자체 생산 및 설계",
            ],
            "Kami tidak hanya mengadopsi teknologi unggulan, tetapi juga mendesain dan memproduksi sendiri lini peralatan penghancur.":
              [
                "We do not just adopt leading technology; we also design and manufacture our own line of crushing equipment.",
                "우수한 기술을 도입하는 데 그치지 않고 파쇄 장비 라인을 직접 설계하고 생산합니다.",
              ],
            "Inovasi Teknologi": ["Technology Innovation", "기술 혁신"],
            "Mengembangkan dan menerapkan teknologi unggulan dalam industri penghancuran.":
              [
                "Developing and applying leading technology in the crushing industry.",
                "파쇄 산업의 우수한 기술을 개발하고 적용합니다.",
              ],
            "Desain dan Produksi Sendiri": [
              "In-house Design and Production",
              "자체 설계 및 생산",
            ],
            "Peralatan penghancur dengan standar tinggi untuk kualitas dan ketahanan maksimal.":
              [
                "High-standard crushing equipment for maximum quality and durability.",
                "최고의 품질과 내구성을 위한 고표준 파쇄 장비.",
              ],
            "Kontrol Penuh Produksi": [
              "Full Production Control",
              "생산 전 과정 관리",
            ],
            "Setiap produk memenuhi standar industri internasional.": [
              "Every product meets international industry standards.",
              "모든 제품이 국제 산업 표준을 충족합니다.",
            ],
            "Ketahanan dan Efisiensi": [
              "Durability and Efficiency",
              "내구성과 효율",
            ],
            "Peralatan lebih tahan lama untuk berbagai sektor industri.": [
              "Longer-lasting equipment for many industrial sectors.",
              "다양한 산업 분야에서 더 오래 쓸 수 있는 장비입니다.",
            ],
            "Standar Internasional": ["International Standards", "국제 표준"],
            "Mengikuti regulasi dan standar global dalam manufaktur dan inovasi teknologi.":
              [
                "Following global regulations and standards in manufacturing and technology innovation.",
                "제조와 기술 혁신 분야에서 글로벌 규정과 표준을 준수합니다.",
              ],
            "Peralatan penghancur dengan standar industri internasional untuk berbagai sektor.":
              [
                "Crushing equipment built to international industry standards for many sectors.",
                "다양한 산업 분야를 위한 국제 산업 표준 수준의 파쇄 장비.",
              ],
            "Daur Ulang dengan Efisiensi Tinggi": [
              "Highly Efficient Recycling",
              "고효율 재활용",
            ],
            "Pengolahan limbah seperti plastik, vinil, kayu, dan material lainnya.":
              [
                "Processing waste such as plastic, vinyl, wood, and other materials.",
                "플라스틱, 비닐, 목재 등 다양한 폐기물을 처리합니다.",
              ],
            Plastik: ["Plastic", "플라스틱"],
            Vinil: ["Vinyl", "비닐"],
            Kayu: ["Wood", "목재"],
            "Material lainnya": ["Other materials", "기타 소재"],
            "Ceritakan Kebutuhan Industri Anda": [
              "Tell Us About Your Industrial Needs",
              "귀사의 산업 요구 사항을 알려 주세요",
            ],
            "Kami siap membantu dengan peralatan yang tahan lama dan efisien.":
              [
                "We are ready to help with durable and efficient equipment.",
                "내구성이 뛰어나고 효율적인 장비로 도와드리겠습니다.",
              ],
            "Dokumen perusahaan dan paten teknologi.": [
              "Company documents and technology patents.",
              "회사 서류 및 기술 특허.",
            ],
            "Legalitas perusahaan": [
              "Company legal documents",
              "회사 법인 서류",
            ],
            "Paten teknologi": ["Technology patents", "기술 특허"],
            "Nomor Induk Berusaha (NIB)": [
              "Business Identification Number (NIB)",
              "사업자 등록번호(NIB)",
            ],
            "Terbit 8 Februari 2025, perubahan ke-1 pada 16 April 2025": [
              "Issued 8 February 2025, 1st amendment on 16 April 2025",
              "2025년 2월 8일 발급, 2025년 4월 16일 1차 변경",
            ],
            "SK Menteri Hukum RI": [
              "Decree of the Minister of Law of the Republic of Indonesia",
              "인도네시아 법무부 장관 결정서",
            ],
            "Persetujuan perubahan anggaran dasar, 16 April 2025": [
              "Approval of amendments to the articles of association, 16 April 2025",
              "정관 변경 승인, 2025년 4월 16일",
            ],
            "Pemberitahuan Perubahan Data Perseroan": [
              "Notification of Changes to Company Data",
              "회사 정보 변경 통지",
            ],
            "Ditjen Administrasi Hukum Umum, 16 April 2025": [
              "Directorate General of General Legal Administration, 16 April 2025",
              "일반법무행정총국, 2025년 4월 16일",
            ],
            "KPP Pratama Cikarang Selatan, terdaftar 5 Februari 2025": [
              "South Cikarang Tax Office (KPP Pratama), registered 5 February 2025",
              "남부 Cikarang 세무서(KPP Pratama), 2025년 2월 5일 등록",
            ],
            "Salinan dokumen asli dapat dibuka lewat tombol di bawah.": [
              "Copies of the original documents can be opened with the button below.",
              "원본 서류 사본은 아래 버튼으로 열람하실 수 있습니다.",
            ],
            "Buka PDF Legalitas Asli": [
              "Open Original Legal Documents (PDF)",
              "법인 서류 원본 PDF 열기",
            ],
            "Buka PDF Sertifikasi Asli": [
              "Open Original Patent Certificates (PDF)",
              "특허증 원본 PDF 열기",
            ],
            "Paten terdaftar di Korean Intellectual Property Office.": [
              "Patents registered with the Korean Intellectual Property Office.",
              "한국특허청(KIPO)에 등록된 특허입니다.",
            ],
            "Alat pemilah benda asing berbasis udara": [
              "Air-based device for sorting foreign matter",
              "공기식 이물질 선별 장치",
            ],
            "Metode membentuk lapisan sangat keras dari partikel paduan super keras":
              [
                "Method of forming a super-hard layer from super-hard alloy particles",
                "초경합금 입자로 초경질 층을 형성하는 방법",
              ],
            "Rakitan cutter untuk shredder bahan daur ulang": [
              "Cutter assembly for shredders of recyclable materials",
              "재활용 소재 파쇄기용 커터 어셈블리",
            ],
            "Alat dan metode pemisahan dan pengolahan limbah tanah": [
              "Device and method for separating and treating soil waste",
              "토양 폐기물 분리·처리 장치 및 방법",
            ],
            "Penghancur sampah rumah tangga": [
              "Household waste shredder",
              "생활 폐기물 파쇄기",
            ],
            "Alat pengering limbah vinil dengan gaya sentrifugal": [
              "Centrifugal dewatering device for waste vinyl",
              "원심력을 이용한 폐비닐 탈수 장치",
            ],
            "Diskusikan kebutuhan pengolahan sampah atau peralatan penghancur Anda.":
              [
                "Discuss your waste processing or crushing equipment needs with us.",
                "폐기물 처리 또는 파쇄 장비 관련 요구 사항을 상담해 보세요.",
              ],
            "Bucket wheel loader dengan pelindung aus": [
              "Wheel loader bucket with wear protection",
              "내마모 보호재가 적용된 휠 로더 버킷",
            ],
            "Buka menu": ["Open menu", "메뉴 열기"],
            "Daftar produk": ["Product list", "제품 목록"],
            "Diagram rakitan cutter: hook tip, cutter body, side cutter, dan locking system":
              [
                "Cutter assembly diagram: hook tip, cutter body, side cutter, and locking system",
                "커터 어셈블리 도해: 후크 팁, 커터 바디, 측면 커터, 체결기",
              ],
            "Fasilitas pengolahan sampah dengan crane grapple": [
              "Waste processing facility with a grapple crane",
              "그래플 크레인이 있는 폐기물 처리 시설",
            ],
            "Fasilitas pengolahan sampah dengan crane grapple dan konveyor": [
              "Waste processing facility with a grapple crane and conveyor",
              "그래플 크레인과 컨베이어가 있는 폐기물 처리 시설",
            ],
            "Jalur konveyor dan peralatan di dalam fasilitas pengolahan": [
              "Conveyor line and equipment inside the processing facility",
              "처리 시설 내부의 컨베이어 라인과 설비",
            ],
            "Jalur konveyor di dalam fasilitas pengolahan": [
              "Conveyor line inside the processing facility",
              "처리 시설 내부의 컨베이어 라인",
            ],
            "Konveyor dengan pagar pengaman kuning": [
              "Conveyor with yellow safety railings",
              "노란색 안전 난간이 있는 컨베이어",
            ],
            "Lini pengolahan daur ulang": [
              "Recycling processing line",
              "재활용 처리 라인",
            ],
            "Menu utama": ["Main menu", "주 메뉴"],
            "Mesin pencacah kayu": ["Wood chipper", "목재 파쇄기"],
            "Mesin shredder dan jalur konveyor": [
              "Shredder machine and conveyor line",
              "파쇄기와 컨베이어 라인",
            ],
            "PT Green Eco Teknologi, beranda": [
              "PT Green Eco Teknologi, home",
              "PT Green Eco Teknologi, 홈",
            ],
            "PT Green Eco Teknologi: pengolahan sampah berbasis SRF/BBJP dan peralatan penghancur tahan aus.":
              [
                "PT Green Eco Teknologi: SRF/BBJP-based waste processing and wear-resistant crushing equipment.",
                "PT Green Eco Teknologi: SRF/BBJP 기반 폐기물 처리 및 내마모 파쇄 장비.",
              ],
            "Pelat baja berlapis tungsten carbide": [
              "Steel plate coated with tungsten carbide",
              "텅스텐 카바이드를 코팅한 강판",
            ],
            "Pengelasan logam": ["Metal welding", "금속 용접"],
            "Peralatan di dalam fasilitas pengolahan": [
              "Equipment inside the processing facility",
              "처리 시설 내부 설비",
            ],
            "Produk berikutnya": ["Next product", "다음 제품"],
            "Produk sebelumnya": ["Previous product", "이전 제품"],
            "Tahapan pengolahan": ["Processing stages", "처리 단계"],
          };
          Object.assign(TR, {
            "Diagram alir · TPSA Bagendung": [
              "Process flow · TPSA Bagendung",
              "공정도 · TPSA Bagendung",
            ],
            Stasiun: ["Station", "공정"],
            Masuk: ["Input", "투입"],
            Keluar: ["Output", "산출"],
            "Tahap sebelumnya": ["Previous step", "이전 단계"],
            "Tahap berikutnya": ["Next step", "다음 단계"],
            "Tahapan pengolahan": ["Processing stages", "처리 단계"],
            "Truk pengangkut sampah": [
              "Waste collection trucks",
              "쓰레기 수거 트럭",
            ],
            "Volume sampah tercatat": [
              "Incoming volume recorded",
              "반입량 기록",
            ],
            "Sampah dari jembatan timbang": [
              "Waste from the weighbridge",
              "계량대를 거친 쓰레기",
            ],
            "Ukuran seragam": ["Uniform size", "균일한 크기"],
            "Sampah tercacah": ["Shredded waste", "파쇄된 쓰레기"],
            "Kualitas BBJP/SRF meningkat": [
              "Improved BBJP/SRF quality",
              "BBJP/SRF 품질 향상",
            ],
            "Hasil fermentasi": ["Fermented material", "발효된 물질"],
            "Kadar air turun, nilai kalor naik": [
              "Lower moisture, higher calorific value",
              "수분 감소, 발열량 증가",
            ],
            "Hasil pengeringan": ["Dried material", "건조된 물질"],
            "Bahan bakar alternatif": ["Alternative fuel", "대체 연료"],
            "Air lindi dari sampah": [
              "Leachate from waste",
              "쓰레기에서 나온 침출수",
            ],
            "Pencemaran lingkungan berkurang": [
              "Less environmental pollution",
              "환경 오염 감소",
            ],
          });
          Object.assign(TR, {
            "Metode Pengolahan": ["Processing Method", "처리 방법"],
            "Dari Sampah Rumah Tangga Cilegon Menjadi Empat Produk": [
              "From Cilegon Household Waste to Four Products",
              "칠레곤 생활폐기물에서 네 가지 제품으로",
            ],
            "Sampah rumah tangga dipilah, dicacah, dan digiling secara bertahap. Plastik, bahan bakar, dan sisa makanan masing-masing mengalir ke jalur pengolahannya sendiri.":
              [
                "Household waste is sorted, shredded, and ground in stages. Plastics, fuel material, and food scraps each flow into their own processing line.",
                "생활폐기물은 단계별로 선별, 파쇄, 분쇄됩니다. 플라스틱, 연료용 폐기물, 음식물 쓰레기는 각자의 처리 라인으로 이어집니다.",
              ],
            "Tahap awal: pengumpulan, pencacahan, dan pemilahan": [
              "Early stages: collecting, shredding, and sorting",
              "초기 단계: 수거, 파쇄, 선별",
            ],
            "Jalur sampah yang dapat dibakar": [
              "Combustible waste line",
              "가연성 폐기물 라인",
            ],
            "Hasil: SRF": ["Output: SRF", "생산물: SRF"],
            "Jalur sampah organik": [
              "Organic waste line",
              "유기성 폐기물 라인",
            ],
            "Hasil: larva BSF dan pupuk organik": [
              "Output: BSF larvae and organic fertilizer",
              "생산물: BSF 유충과 유기질 비료",
            ],
            "Empat Produk Akhir": ["Four End Products", "네 가지 최종 제품"],
            "Hasilnya, volume sampah berkurang dan sampah berubah menjadi produk bernilai ekonomi.":
              [
                "The result: less waste volume, and waste turned into products with economic value.",
                "그 결과 폐기물 부피가 줄고, 폐기물이 경제적 가치가 있는 제품으로 바뀝니다.",
              ],
            "Ilustrasi dibuat khusus untuk situs ini. Tidak memakai foto atau materi milik pihak ketiga, sehingga tidak ada hak cipta pihak lain yang perlu dicantumkan.":
              [
                "Illustrations created specifically for this site. No third-party photos or materials are used, so no external copyright credit is required.",
                "일러스트는 이 사이트를 위해 제작되었습니다. 제3자의 사진이나 자료를 사용하지 않아 별도의 저작권 표기가 필요하지 않습니다.",
              ],
            "Pipa dan Manhole Komposit Plastik": [
              "Composite Plastic Pipes and Manholes",
              "복합 플라스틱 관과 맨홀",
            ],
            "Pipa saluran air limbah dan manhole dari plastik bekas.": [
              "Wastewater pipes and manholes made from used plastic.",
              "폐플라스틱으로 만든 하수관과 맨홀.",
            ],
            "Dari tahap 1": ["From step 1", "1단계에서"],
            "SRF (Solid Recovered Fuel)": [
              "SRF (Solid Recovered Fuel)",
              "SRF(고형 연료)",
            ],
            "Bahan bakar alternatif untuk pabrik semen.": [
              "Alternative fuel for cement plants.",
              "시멘트 공장용 대체 연료.",
            ],
            "Dari tahap 6": ["From step 6", "6단계에서"],
            "Larva BSF": ["BSF Larvae", "BSF 유충"],
            "Bahan baku pakan ikan dan unggas.": [
              "Raw material for fish and poultry feed.",
              "어류·가금류 사료 원료.",
            ],
            "Dari tahap 8": ["From step 8", "8단계에서"],
            "Pupuk Organik": ["Organic Fertilizer", "유기질 비료"],
            "Dari frass, dipasok ke petani.": [
              "Made from frass, supplied to farmers.",
              "프라스로 만들어 농가에 공급.",
            ],
            "Dari tahap 9": ["From step 9", "9단계에서"],
            "Pengumpulan Plastik": ["Collecting Plastic", "플라스틱 수거"],
            "Plastik yang masih bisa didaur ulang diletakkan di ban berjalan datar, lalu dipilah dan dikumpulkan secara manual oleh tenaga kerja.":
              [
                "Recyclable plastic is placed on a flat conveyor belt, then sorted and collected by hand by workers.",
                "재활용 가능한 플라스틱을 평평한 컨베이어 벨트에 올리면 작업자가 수작업으로 선별해 모읍니다.",
              ],
            Pencacahan: ["Shredding", "파쇄"],
            "Sisa sampah rumah tangga dicacah sampai ukuran tertentu sesuai kebutuhan proses berikutnya.":
              [
                "The remaining household waste is shredded to a set size to suit the next process.",
                "남은 생활폐기물을 다음 공정에 맞는 크기로 파쇄합니다.",
              ],
            "Pemilahan Tahap Pertama": ["First-Stage Sorting", "1차 선별"],
            "Mesin memisahkan sampah organik, seperti sisa makanan dan sayuran, dari sampah yang dapat dibakar. Keduanya keluar otomatis lewat jalur berbeda.":
              [
                "A machine separates organic waste, such as food scraps and vegetables, from combustible waste. Each is discharged automatically through its own outlet.",
                "기계가 음식물 쓰레기와 채소류 같은 유기성 폐기물을 가연성 폐기물과 분리합니다. 각각 서로 다른 배출구로 자동 배출됩니다.",
              ],
            Penggilingan: ["Grinding", "분쇄"],
            "Sampah yang dapat dibakar digiling sampai ukurannya seragam, kurang dari 100 mm.":
              [
                "Combustible waste is ground to a uniform size of less than 100 mm.",
                "가연성 폐기물을 100 mm 미만의 균일한 크기로 분쇄합니다.",
              ],
            "Pemilahan Tahap Kedua": ["Second-Stage Sorting", "2차 선별"],
            "Sisa bahan organik dan kadar air dalam sampah hasil gilingan dipisahkan dan dikeluarkan secara otomatis.":
              [
                "Leftover organic matter and moisture in the ground waste are separated and discharged automatically.",
                "분쇄된 폐기물에 남은 유기물과 수분을 분리해 자동으로 배출합니다.",
              ],
            "Produksi SRF": ["SRF Production", "SRF 생산"],
            "Sampah dikeringkan sampai kadar airnya sesuai spesifikasi. Hasilnya, SRF (Solid Recovered Fuel), dijual ke pabrik semen sebagai bahan bakar alternatif.":
              [
                "The waste is dried until its moisture meets specification. The result, SRF (Solid Recovered Fuel), is sold to cement plants as an alternative fuel.",
                "폐기물을 규격에 맞는 수분 함량까지 건조합니다. 그 결과물인 SRF(고형 연료)는 대체 연료로 시멘트 공장에 판매됩니다.",
              ],
            "Fermentasi Sampah Organik": [
              "Fermenting Organic Waste",
              "유기성 폐기물 발효",
            ],
            "Sisa makanan dan sayuran diolah sampai ukuran sesuai, diberi bioaktivator seperti EM (Effective Microorganisms), lalu kadar airnya diatur agar cocok untuk pakan larva.":
              [
                "Food scraps and vegetables are processed to a suitable size and treated with a bioactivator such as EM (Effective Microorganisms), then their moisture is adjusted to suit larvae feed.",
                "음식물 쓰레기와 채소류를 적당한 크기로 처리하고 EM(유용 미생물) 같은 생물 활성제를 넣은 뒤, 유충 사료에 맞게 수분을 조절합니다.",
              ],
            "Budidaya Larva BSF": ["Rearing BSF Larvae", "BSF 유충 사육"],
            "Sampah organik hasil fermentasi menjadi pakan larva BSF (Black Soldier Fly). Larvanya dimanfaatkan sebagai bahan baku pakan ikan dan unggas, sesuai standar keamanan dan mutu pakan.":
              [
                "Fermented organic waste feeds black soldier fly (BSF) larvae. The larvae become raw material for fish and poultry feed, in line with feed safety and quality standards.",
                "발효된 유기성 폐기물은 아메리카동애등에(BSF) 유충의 먹이가 됩니다. 유충은 사료 안전·품질 기준에 따라 어류와 가금류 사료 원료로 활용됩니다.",
              ],
            "Pupuk Organik dari Frass": [
              "Organic Fertilizer from Frass",
              "프라스 유기질 비료",
            ],
            "Frass, residu budidaya larva BSF, dimatangkan dan dikeringkan, lalu dipasok ke petani sebagai pupuk organik.":
              [
                "Frass, the residue from rearing BSF larvae, is matured and dried, then supplied to farmers as organic fertilizer.",
                "BSF 유충 사육 후 남는 잔여물인 프라스를 숙성·건조하여 유기질 비료로 농가에 공급합니다.",
              ],
            "Alur TPSA Bagendung": [
              "TPSA Bagendung Process",
              "TPSA 바겐둥 공정",
            ],
            "Sampah Rumah Tangga Cilegon": [
              "Cilegon Household Waste",
              "칠레곤 생활폐기물",
            ],
            "Pilih alur pengolahan": [
              "Choose a processing flow",
              "처리 공정 선택",
            ],
            "Kami membangun dan menjalankan sistem pengolahan sampah di Cilegon. Sampah diubah menjadi SRF (Solid Recovered Fuel, di Indonesia disebut BBJP), larva BSF, pupuk organik, dan bahan baku pipa komposit.":
              [
                "We build and run waste processing systems in Cilegon. Waste becomes SRF (Solid Recovered Fuel, known in Indonesia as BBJP), BSF larvae, organic fertilizer, and raw material for composite pipes.",
                "우리는 칠레곤에서 폐기물 처리 시스템을 구축하고 운영합니다. 폐기물은 SRF(고형 연료, 인도네시아에서는 BBJP라고 부름), BSF 유충, 유기질 비료, 복합관 원료로 바뀝니다.",
              ],
            "Dari pengalaman mengolah sampah di Cilegon, kami merancang dan memproduksi sendiri peralatannya, dari mesin penghancur sampai mata pisau tahan aus. Semuanya sudah diuji langsung di lapangan.":
              [
                "From our experience processing waste in Cilegon, we design and manufacture our own equipment, from crushers to wear-resistant blades. All of it has been tested on site.",
                "칠레곤에서 폐기물을 처리한 경험을 바탕으로, 파쇄기부터 내마모 칼날까지 장비를 직접 설계·제작합니다. 모두 현장에서 직접 시험을 마쳤습니다.",
              ],
            "Lihat Peralatan Kami": ["See Our Equipment", "당사 장비 보기"],
            Peralatan: ["Equipment", "장비"],
            "Produk dari Sampah Rumah Tangga Cilegon": [
              "Products from Cilegon Household Waste",
              "칠레곤 생활폐기물 제품",
            ],
            "Mari Diskusikan Kebutuhan Anda": [
              "Let's Discuss Your Needs",
              "필요 사항을 함께 논의해 보세요",
            ],
            "Pengolahan sampah atau peralatan penghancur, kami siap membantu.":
              [
                "Waste processing or crushing equipment, we are ready to help.",
                "폐기물 처리나 파쇄 장비, 도움을 드릴 준비가 되어 있습니다.",
              ],
            "SRF (Solid Recovered Fuel), di Indonesia disebut BBJP. Bahan bakar alternatif untuk pabrik semen dan co-firing di PLTU Suralaya.":
              [
                "SRF (Solid Recovered Fuel), known in Indonesia as BBJP. Alternative fuel for cement plants and co-firing at the Suralaya power plant.",
                "SRF(고형 연료)는 인도네시아에서 BBJP라고 부릅니다. 시멘트 공장과 수랄라야 발전소 혼소용 대체 연료입니다.",
              ],
            "Pipa Komposit": ["Composite Pipes", "복합관"],
            "Foto Pipa dan Manhole Komposit Plastik": [
              "Composite plastic pipe photo",
              "복합 플라스틱 관 사진",
            ],
            "Daur ulang plastik": ["Plastic recycling", "플라스틱 재활용"],
            "Budidaya BSF": ["BSF rearing", "BSF 사육"],
            "Dari frass BSF": ["From BSF frass", "BSF 프라스 유래"],
            "jenis produk: SRF, pipa komposit, larva BSF, dan pupuk organik": [
              "product types: SRF, composite pipes, BSF larvae, and organic fertilizer",
              "제품 종류: SRF, 복합관, BSF 유충, 유기질 비료",
            ],
            "Teknologi Sendiri, Disesuaikan untuk Sampah Indonesia": [
              "Our Own Technology, Adapted for Indonesian Waste",
              "자체 기술, 인도네시아 폐기물에 맞춤",
            ],
            "Kami merancang mesin sendiri, lalu menyesuaikannya dengan kebutuhan pelanggan dan sifat sampah di lapangan.":
              [
                "We design our machines in-house, then adapt them to customer needs and the nature of the waste on site.",
                "기계를 직접 설계하고, 고객의 요구와 현장 폐기물의 특성에 맞게 조정합니다.",
              ],
            Paten: ["Patents", "특허"],
            "Teknologi kami dilindungi paten, termasuk yang terdaftar di Korea Selatan.":
              [
                "Our technology is protected by patents, including ones registered in South Korea.",
                "우리 기술은 한국에 등록된 특허를 포함해 특허로 보호됩니다.",
              ],
            "3 proyek riset nasional": [
              "3 national research projects",
              "국가 연구과제 3건",
            ],
            "Tiga kali berhasil menyelesaikan proyek riset nasional pemerintah pusat Korea Selatan.":
              [
                "Successfully completed three national research projects of the South Korean central government.",
                "한국 중앙정부의 국가 연구과제를 세 차례 성공적으로 수행했습니다.",
              ],
            "Dirancang sendiri": ["Designed in-house", "자체 설계"],
            "Mesin dirancang di dalam perusahaan, sesuai kebutuhan pelanggan dan sifat limbahnya.":
              [
                "Machines are designed within the company to fit customer needs and the nature of their waste.",
                "기계는 고객의 요구와 폐기물 특성에 맞게 회사 내부에서 설계합니다.",
              ],
            "Diuji di Cilegon": ["Tested in Cilegon", "칠레곤에서 시험"],
            "Mesin penghancur dikembangkan untuk sampah rumah tangga Indonesia dan cara kerja pekerja di sini. Dirancang agar tidak berhenti walau sampah masuk sekaligus dalam jumlah besar, lalu diuji langsung di Cilegon. Videonya ada di bawah.":
              [
                "The crusher was developed for Indonesian household waste and the way workers operate here. It is designed not to stop even when a large amount of waste is fed in at once, and was tested on site in Cilegon. The videos are below.",
                "파쇄기는 인도네시아 생활폐기물과 현지 작업자의 작업 방식에 맞춰 개발했습니다. 한 번에 많은 폐기물이 투입되어도 멈추지 않도록 설계했으며, 칠레곤 현장에서 직접 시험했습니다. 영상은 아래에 있습니다.",
              ],
            "paten teknologi penghancur dan pemilah, termasuk yang terdaftar di Korea Selatan":
              [
                "patents on crushing and sorting technology, including ones registered in South Korea",
                "파쇄·선별 기술 특허 (한국 등록 포함)",
              ],
            "proyek riset nasional pemerintah pusat Korea Selatan yang berhasil diselesaikan":
              [
                "national research projects of the South Korean central government, successfully completed",
                "한국 중앙정부 국가 연구과제 수행 성공",
              ],
            "Tetap berjalan": ["Keeps running", "계속 가동"],
            "meski sampah masuk sekaligus dalam jumlah besar": [
              "even when a large amount of waste is fed in at once",
              "한 번에 많은 폐기물이 투입되어도",
            ],
            "Mesin penghancur dan penyortir kami diuji langsung di lapangan di Cilegon. Keduanya dikembangkan sesuai sifat sampah dan cara kerja di Indonesia.":
              [
                "Our crushing and sorting machines were tested on site in Cilegon. Both were developed around the nature of the waste and the way work is done in Indonesia.",
                "당사의 파쇄기와 선별기는 칠레곤 현장에서 직접 시험했습니다. 두 장비 모두 인도네시아의 폐기물 특성과 작업 방식에 맞춰 개발했습니다.",
              ],
            "Dikembangkan sesuai sifat sampah rumah tangga Indonesia dan cara kerja pekerja di sini.":
              [
                "Developed around the nature of Indonesian household waste and how workers operate here.",
                "인도네시아 생활폐기물의 특성과 현지 작업자의 작업 방식에 맞춰 개발했습니다.",
              ],
            "Dirancang agar mesin tidak berhenti walau sampah masuk sekaligus dalam jumlah besar.":
              [
                "Designed so the machine does not stop even when a large amount of waste is fed in at once.",
                "한 번에 많은 폐기물이 투입되어도 기계가 멈추지 않도록 설계했습니다.",
              ],
            "Lihat Alurnya": ["See the Process", "공정 보기"],
          });

          function normHeads() {
            $$(".page").forEach((pg) => {
              const hs = [...pg.querySelectorAll("h1,h2,h3,h4")];
              const f2 = hs.findIndex((h) => h.tagName === "H2");
              hs.forEach((h, i) => {
                if (
                  h.tagName === "H3" &&
                  (f2 === -1 || i < f2) &&
                  hs.slice(0, i).some((x) => x.tagName === "H1")
                ) {
                  const n = document.createElement("h2");
                  n.className = (h.className ? h.className + " " : "") + "h3";
                  if (h.getAttribute("style"))
                    n.setAttribute("style", h.getAttribute("style"));
                  n.innerHTML = h.innerHTML;
                  h.replaceWith(n);
                }
              });
            });
          }
          normHeads();
          document.addEventListener("click", (e) => {
            if (e.target.closest("#hh-go"))
              setTimeout(() => {
                window.__hhShow("b");
                const mc = document.getElementById("metode-cilegon"); if (mc) mc.scrollIntoView();
              }, 120);
          });
          (function () {
            if (!document.getElementById("hh-ta")) return;
            const a = document.getElementById("hh-ta"),
              b = document.getElementById("hh-tb"),
              A = document.querySelector(".pfd-sec"),
              B = document.getElementById("metode-cilegon");
            function show(w) {
              A.classList.toggle("hh-hide", w !== "a");
              B.classList.toggle("hh-hide", w !== "b");
              a.setAttribute("aria-selected", w === "a");
              b.setAttribute("aria-selected", w === "b");
              a.tabIndex = w === "a" ? 0 : -1;
              b.tabIndex = w === "b" ? 0 : -1;
            }
            window.__hhShow = show;
            a.onclick = () => show("a");
            b.onclick = () => show("b");
            [a, b].forEach(
              (x) =>
                (x.onkeydown = (e) => {
                  if (/Arrow(Left|Right)/.test(e.key)) {
                    const n = x === a ? b : a;
                    n.focus();
                    n.click();
                  }
                }),
            );
            if (location.hash === "#metode-cilegon") show("b");
            else show("a");
          })();
          let LANG = "id";
          try {
            const s = localStorage.getItem("lang");
            if (s === "en" || s === "ko" || s === "id") LANG = s;
          } catch (e) {}
          function loadKR() {
            if (LANG !== "ko" || document.getElementById("krf")) return;
            const l = document.createElement("link");
            l.id = "krf"; l.rel = "stylesheet";
            l.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap";
            document.head.appendChild(l);
          }
          loadKR();
          
          const TXO = new WeakMap(),
            ATO = new WeakMap(),
            ATTRS = ["alt", "aria-label", "title", "placeholder"];
          const nrm = (s) => s.replace(/\s+/g, " ").trim();
          function lk(s) {
            if (LANG === "id") return null;
            const k = nrm(s),
              i = LANG === "en" ? 0 : 1,
              e = TR[k];
            if (e) return e[i];
            if (k.indexOf("Foto ") === 0) {
              const r = k.slice(5),
                f = TR[r],
                v = f ? f[i] : r;
              return i ? v + " 사진" : "Photo: " + v;
            }
            return null;
          }
          function doText(n) {
            let r = TXO.get(n);
            if (!r || (n.nodeValue !== r.o && n.nodeValue !== r.t)) {
              r = { o: n.nodeValue, t: n.nodeValue };
              TXO.set(n, r);
            }
            let v = r.o;
            if (LANG !== "id") {
              const x = lk(r.o);
              if (x !== null) {
                const m = r.o.match(/^(\s*)[\s\S]*?(\s*)$/);
                v = m[1] + x + m[2];
              }
            }
            r.t = v;
            if (n.nodeValue !== v) n.nodeValue = v;
          }
          function doEl(e) {
            if (e.nodeType !== 1 || !e.hasAttribute) return;
            let r = ATO.get(e);
            for (const a of ATTRS) {
              if (!e.hasAttribute(a)) continue;
              if (!r) {
                r = {};
                ATO.set(e, r);
              }
              const cur = e.getAttribute(a);
              if (!r[a] || (cur !== r[a].o && cur !== r[a].t))
                r[a] = { o: cur, t: cur };
              let v = r[a].o;
              if (LANG !== "id") {
                const x = lk(v);
                if (x !== null) v = x;
              }
              r[a].t = v;
              if (cur !== v) e.setAttribute(a, v);
            }
          }
          function walk(root) {
            if (root.nodeType === 3) {
              if (
                root.parentNode &&
                !/^(SCRIPT|STYLE)$/.test(root.parentNode.nodeName)
              )
                doText(root);
              return;
            }
            if (root.nodeType !== 1 || /^(SCRIPT|STYLE)$/.test(root.nodeName))
              return;
            if (root.closest && root.closest(".lang")) return;
            doEl(root);
            const w = document.createTreeWalker(
              root,
              NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
              {
                acceptNode: (n) =>
                  n.nodeType === 1
                    ? /^(SCRIPT|STYLE)$/.test(n.nodeName)
                      ? 2
                      : 1
                    : /^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName)
                      ? 2
                      : 1,
              },
            );
            let n;
            while ((n = w.nextNode())) {
              if (n.nodeType === 3) doText(n);
              else if (!n.closest(".lang")) doEl(n);
            }
          }
          function i18nT() {
            const o = window._t0 || document.title;
            document.title =
              LANG === "id"
                ? o
                : o
                    .split(" | ")
                    .map((p) => lk(p) || p)
                    .join(" | ");
            const md = document.querySelector("meta[name=description]");
            if (md) {
              if (!md.dataset.o) md.dataset.o = md.content;
              md.content =
                LANG === "id" ? md.dataset.o : lk(md.dataset.o) || md.dataset.o;
            }
          }
          const mo = new MutationObserver((ms) => {
            mo.disconnect();
            ms.forEach((m) => {
              if (m.type === "characterData") walk(m.target);
              else m.addedNodes.forEach(walk);
            });
            mo.observe(document.body, {
              childList: true,
              subtree: true,
              characterData: true,
            });
          });
          function setLang(l) {
            LANG = l; loadKR();
            document.documentElement.lang = l;
            try {
              localStorage.setItem("lang", l);
            } catch (e) {}
            mo.disconnect();
            walk(document.body);
            i18nT();
            mo.observe(document.body, {
              childList: true,
              subtree: true,
              characterData: true,
            });
            document
              .querySelectorAll(".lang [data-l]")
              .forEach((b) =>
                b.setAttribute(
                  "aria-pressed",
                  b.dataset.l === l ? "true" : "false",
                ),
              );
            $("#lgc").textContent = l.toUpperCase();
          }
          const lgB = $(".lg-cur"),
            lgM = $(".lg-menu");
          function lgT(o) {
            lgM.classList.toggle("open", o);
            lgB.setAttribute("aria-expanded", o);
          }
          lgB.addEventListener("click", (e) => {
            e.stopPropagation();
            lgT(!lgM.classList.contains("open"));
          });
          lgM.querySelectorAll("[data-l]").forEach((b) =>
            b.addEventListener("click", () => {
              setLang(b.dataset.l);
              lgT(false);
              lgB.focus();
            }),
          );
          document.addEventListener("click", (e) => {
            if (!e.target.closest(".lang")) lgT(false);
          });
          addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
              lgT(false);
            }
          });

          if (LANG !== "id") setLang(LANG);
          else
            mo.observe(document.body, {
              childList: true,
              subtree: true,
              characterData: true,
            });
        