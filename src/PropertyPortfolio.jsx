import React, { useState } from 'react'
import { Download, Home, TrendingUp, Heart, MapPin, DollarSign, Bed, Bath, Maximize } from 'lucide-react'

const PropertyPortfolio = () => {
  // all the state, groups array, JSX, etc. from your file
}

export default PropertyPortfolio
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "https://reportfolio.pages.dev/">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
<p class="p1"><span class="s1">import React, { useState } from 'react';</span></p>
<p class="p1"><span class="s1">import { Download, Home, TrendingUp, Heart, MapPin, DollarSign, Bed, Bath, Maximize } from 'lucide-react';</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const PropertyPortfolio = () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const [selectedGroup, setSelectedGroup] = useState(null);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const groups = [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>id: 1,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>name: "Spicewood/Boerne Area, TX",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>region: "Hill Country",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>hearts: 4,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>totalValue: "$12,049,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>monthlyIncome: "$25,500-$35,500",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>annualIncome: "$306,000-$426,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>datingScene: "EXCEPTIONAL - Best combined dating pool due to Austin proximity + Hill Country exclusivity + water lifestyle",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>bestFor: "Active, affluent couples and families; wine enthusiasts; water sports families",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>properties: [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "19813 &amp; 19817 Lakehurst Loop, Spicewood, TX 78669",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$6,550,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 4, baths: 4, sqft: "4,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$12,000-$16,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$144,000-$192,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>jason: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/19813-Lakehurst-Loop-Spicewood-TX-78669/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "3507 Bee Creek Rd, Spicewood, TX 78669",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$1,299,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 3, baths: 3, sqft: "3,777",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$4,500-$6,500",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$54,000-$78,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/3507-Bee-Creek-Rd-Spicewood-TX-78669/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "74 Swede Springs, Boerne, TX 78006",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$4,200,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 8, baths: 8, sqft: "8,186",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$9,000-$13,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$108,000-$156,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/74-Swede-Springs-Boerne-TX-78006/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>]</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>id: 2,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>name: "Austin Area, TX",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>region: "Tech Hub",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>hearts: 3,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>totalValue: "$6,750,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>monthlyIncome: "$15,000-$20,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>annualIncome: "$180,000-$240,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>datingScene: "EXCELLENT - Direct access to Austin's tech millionaire boom",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>bestFor: "Tech professionals, entrepreneurs, creative types, young ambitious couples",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>properties: [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "3806 Spirit Lake Cv, Austin, TX 78746",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$6,750,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 7, baths: 10, sqft: "9,275",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$15,000-$20,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$180,000-$240,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/3806-Spirit-Lake-Cv-Austin-TX-78746/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>]</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>id: 3,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>name: "Silverthorne/Summit County, CO",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>region: "Mountain Resort",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>hearts: 2,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>totalValue: "$28,095,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>monthlyIncome: "$37,000-$51,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>annualIncome: "$444,000-$612,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>datingScene: "GOOD - Quality outdoor enthusiasts; less crowded dating market",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>bestFor: "Outdoor-focused couples, remote workers, adventure seekers, ultra-affluent families",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>properties: [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "2244 Johnson Rd, Silverthorne, CO 80498",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$3,595,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 5, baths: 5, sqft: "6,346",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$12,000-$16,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$144,000-$192,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>jason: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/2244-Johnson-Rd-Silverthorne-CO-80498/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "1800 Triple Creek Ranch Rd, Silverthorne, CO 80498",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$24,500,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 6, baths: 7, sqft: "7,284",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$25,000-$35,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$300,000-$420,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/1800-Triple-Creek-Ranch-Rd-Silverthorne-CO-80498/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>]</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>id: 4,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>name: "Breckenridge, CO",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>region: "Summit County",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>hearts: 3,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>totalValue: "$21,494,999",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>monthlyIncome: "$43,000-$63,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>annualIncome: "$516,000-$756,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>datingScene: "EXCEPTIONAL - Highest dating opportunity concentration in any non-Texas market",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>bestFor: "Ski-focused couples, active professionals, entertaining-focused individuals",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>properties: [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "320 Headlight Dr, Breckenridge, CO 80424",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$6,995,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 6, baths: 6, sqft: "6,552",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$18,000-$28,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$216,000-$336,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>jason: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/320-Headlight-Dr-Breckenridge-CO-80424/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "250 Sallie Barber Rd, Breckenridge, CO 80424",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$14,499,999",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 6, baths: 9, sqft: "7,444",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$25,000-$35,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$300,000-$420,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>jason: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/250-Sallie-Barber-Rd-Breckenridge-CO-80424/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>]</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>id: 7,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>name: "Loveland/Fort Collins Area, CO",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>region: "Northern Colorado",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>hearts: 3,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>totalValue: "$10,750,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>monthlyIncome: "$21,000-$29,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>annualIncome: "$252,000-$348,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>datingScene: "EXCELLENT - BEST ESTABLISHED SINGLES CITY IN COLORADO (Fort Collins #1 ranked)",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>bestFor: "Young professionals, relocating families, wine enthusiasts, remote workers",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>properties: [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "0 Soaring Eagle Pass, Loveland, CO 80538",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$2,400,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 4, baths: 5, sqft: "5,940",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$6,000-$8,500",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$72,000-$102,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>jason: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/0-Soaring-Eagle-Pass-Loveland-CO-80538/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "23930 N Highway 287, Livermore, CO 80536",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$4,500,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 5, baths: 5, sqft: "5,500",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$7,000-$9,500",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$84,000-$114,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>jason: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/23930-N-Highway-287-Livermore-CO-80536/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "796 Abrams Way, Loveland, CO 80537",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$3,850,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 5, baths: 5, sqft: "6,655",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$8,000-$11,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$96,000-$132,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/796-Abrams-Way-Loveland-CO-80537/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>]</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>id: 6,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>name: "Denver Metro - North/Northeast",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>region: "Denver Area",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>hearts: 2,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>totalValue: "$8,850,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>monthlyIncome: "$28,000-$35,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>annualIncome: "$336,000-$420,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>datingScene: "GOOD - Urban professional singles market",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>bestFor: "Corporate executives, business leaders, tech professionals",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>properties: [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "12565 Picadilly Road, Commerce City, CO 80022",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$8,850,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 6, baths: 13, sqft: "16,269",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$28,000-$35,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$336,000-$420,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>jason: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/12565-Picadilly-Road-Commerce-City-CO-80022/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>]</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>id: 11,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>name: "Denver Metro - West/Southwest",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>region: "Foothills",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>hearts: 2,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>totalValue: "$47,598,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>monthlyIncome: "$94,000-$128,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>annualIncome: "$1,128,000-$1,536,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>datingScene: "GOOD TO EXCELLENT - Boulder ultra-wealthy market, established upscale communities",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>bestFor: "Ultra-affluent individuals, mountain lifestyle couples, outdoor recreation professionals",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>properties: [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "6686 Jay Rd, Boulder, CO 80301",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$19,500,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 4, baths: 4, sqft: "7,832",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$22,000-$30,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$264,000-$360,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/6686-Jay-Rd-Boulder-CO-80301/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>address: "26271 Richmond Hill Road, Conifer, CO 80433",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>price: "$5,999,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>beds: 5, baths: 6, sqft: "7,706",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>monthly: "$14,000-$19,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>annual: "$168,000-$228,000",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>url: "https://www.zillow.com/homedetails/26271-Richmond-Hill-Road-Conifer-CO-80433/"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>]</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const handleDownloadPDF = () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>window.print();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const renderHearts = (count) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return Array(count).fill('❤️').join('');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>return (</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>&lt;div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>&lt;style&gt;{`</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>@media print {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>body * { visibility: hidden; }</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>.print-content, .print-content * { visibility: visible; }</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>.print-content { position: absolute; left: 0; top: 0; width: 100%; }</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>.no-print { display: none !important; }</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>`}&lt;/style&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>&lt;div className="max-w-7xl mx-auto print-content"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{/* Header */}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-indigo-100"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;div className="flex items-center justify-between mb-6"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>Premium Property Portfolio</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;/h1&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;p className="text-gray-600 text-lg"&gt;33 Luxury Properties Across Texas &amp; Colorado&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;button</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>onClick={handleDownloadPDF}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>className="no-print flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;Download size={20} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>Download PDF</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;/button&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>{/* Portfolio Summary */}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;div className="flex items-center gap-3 mb-2"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>&lt;Home className="text-green-600" size={24} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>&lt;span className="text-sm font-semibold text-green-700 uppercase tracking-wide"&gt;Total Value&lt;/span&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;p className="text-3xl font-bold text-green-900"&gt;$241.5M&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;div className="flex items-center gap-3 mb-2"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>&lt;TrendingUp className="text-blue-600" size={24} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>&lt;span className="text-sm font-semibold text-blue-700 uppercase tracking-wide"&gt;Monthly Income&lt;/span&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;p className="text-3xl font-bold text-blue-900"&gt;$435K-$620K&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;div className="flex items-center gap-3 mb-2"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>&lt;DollarSign className="text-purple-600" size={24} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>&lt;span className="text-sm font-semibold text-purple-700 uppercase tracking-wide"&gt;Annual Income&lt;/span&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;p className="text-3xl font-bold text-purple-900"&gt;$5.2M-$7.4M&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{/* Property Groups */}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;div className="space-y-6"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>{groups.map((group) =&gt; (</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;div key={group.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;div<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 cursor-pointer hover:from-indigo-600 hover:to-purple-700 transition-all"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>onClick={() =&gt; setSelectedGroup(selectedGroup === group.id ? null : group.id)}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>&lt;div className="flex items-center justify-between"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>&lt;div className="flex-1"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;div className="flex items-center gap-3 mb-2"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                      </span>&lt;MapPin className="text-white" size={24} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                      </span>&lt;h2 className="text-2xl font-bold text-white"&gt;{group.name}&lt;/h2&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                      </span>&lt;span className="text-white text-2xl"&gt;{renderHearts(group.hearts)}&lt;/span&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;p className="text-indigo-100 text-sm uppercase tracking-wide"&gt;{group.region}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>&lt;div className="text-right"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;p className="text-white font-bold text-xl"&gt;{group.totalValue}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;p className="text-indigo-100 text-sm"&gt;{group.properties.length} Properties&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>{selectedGroup === group.id &amp;&amp; (</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>&lt;div className="p-6 space-y-6"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>{/* Group Stats */}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>&lt;div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                      </span>&lt;p className="text-sm font-semibold text-gray-600 mb-1"&gt;Monthly Income&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                      </span>&lt;p className="text-2xl font-bold text-gray-900"&gt;{group.monthlyIncome}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                      </span>&lt;p className="text-sm font-semibold text-gray-600 mb-1"&gt;Annual Income&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                      </span>&lt;p className="text-2xl font-bold text-gray-900"&gt;{group.annualIncome}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>&lt;div className="bg-pink-50 border border-pink-200 rounded-xl p-4 mb-6"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;p className="text-sm font-semibold text-pink-800 mb-2 flex items-center gap-2"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                      </span>&lt;Heart className="text-pink-600" size={18} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                      </span>Dating Scene</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;p className="text-pink-900"&gt;{group.datingScene}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>&lt;div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;p className="text-sm font-semibold text-blue-800 mb-2"&gt;Best For&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>&lt;p className="text-blue-900"&gt;{group.bestFor}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>{/* Properties */}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>&lt;div className="space-y-4"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>{group.properties.map((property, idx) =&gt; (</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                      </span>&lt;div key={idx} className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                        </span>&lt;div className="flex items-start justify-between mb-4"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                          </span>&lt;div className="flex-1"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                            </span>&lt;a<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                              </span>href={property.url}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                              </span>target="_blank"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                              </span>rel="noopener noreferrer"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                              </span>className="text-lg font-bold text-indigo-600 hover:text-indigo-800 hover:underline flex items-center gap-2 mb-2"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                            </span>&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                              </span>{property.address}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                              </span>{property.jason &amp;&amp; (</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                                </span>&lt;span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                                  </span>⭐ JASON'S</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                                </span>&lt;/span&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                              </span>)}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                            </span>&lt;/a&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                            </span>&lt;div className="flex items-center gap-4 text-gray-600 text-sm"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                              </span>&lt;span className="flex items-center gap-1"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                                </span>&lt;Bed size={16} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                                </span>{property.beds} bd</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                              </span>&lt;/span&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                              </span>&lt;span className="flex items-center gap-1"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                                </span>&lt;Bath size={16} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                                </span>{property.baths} ba</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                              </span>&lt;/span&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                              </span>&lt;span className="flex items-center gap-1"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                                </span>&lt;Maximize size={16} /&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                                </span>{property.sqft} sqft</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                              </span>&lt;/span&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                            </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                          </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                          </span>&lt;div className="text-right"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                            </span>&lt;p className="text-2xl font-bold text-gray-900"&gt;{property.price}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                          </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                        </span>&lt;div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                          </span>&lt;div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                            </span>&lt;p className="text-xs text-gray-500 uppercase tracking-wide mb-1"&gt;Monthly Income&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                            </span>&lt;p className="text-lg font-bold text-green-700"&gt;{property.monthly}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                          </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                          </span>&lt;div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                            </span>&lt;p className="text-xs text-gray-500 uppercase tracking-wide mb-1"&gt;Annual Income&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                            </span>&lt;p className="text-lg font-bold text-blue-700"&gt;{property.annual}&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                          </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                        </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                      </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>))}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                  </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">              </span>)}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>))}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>{/* Footer */}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;div className="mt-8 text-center text-gray-500 text-sm"&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">          </span>&lt;p&gt;Property Portfolio • Last Updated: December 2025&lt;/p&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">export default PropertyPortfolio;</span></p>
</body>
</html>
