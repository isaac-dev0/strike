const referral = {
  id: string, // an ID prefixed with GB-XXXXXX
  status: referral_status,
  referee: {
    email: string,
    first_name: string,
    surname: string,
    company: string,
    midwife: {
      required: boolean,
      first_name: string,
      surname: string,
      email: string,
      tel: string,
    },
    tel: string,
    job_role: string
  },
  reason: string, // reason for referral (paragraph)
  is_repeat_family: boolean,
  safety_report: document, // attach a file of a home safety report
  post_code: string,
  family: {
    guardians: [
      {
        first_name: string,
        surname: string,
        age: number
      }
    ],
    children: [
      {
        first_name: string, 
        surname: string,
        date_of_birth: date,
        gender: string,
      }
    ],
  },
  items: {
    packs: {
      hospital_toiletry_pack: {
        required: boolean,
        quantity: number
      },
      adult_toiletry_pack: {
        required: boolean,
        quantity: number
      },
      baby_essentials_pack: {
        required: boolean,
        quantity: number
      },
      child_essentials_pack: {
        required: boolean,
        quantity: number
      },
      teenager_essentials_pack: {
        required: boolean,
        quantity: number
      },
    },
    nappies: {
      size: string, // values either 1, 2, 3, 4, 4+, 5, 5+, 6, 6+, 7
      type: string // values either nappies/pull-ups/no_preference
    },
    moses_basket: {
      required: boolean,
      quantity: number
    },
    cot: {
      required: boolean,
      quantity: number
    },
    toddler_bed: {
      required: boolean,
      quantity: number
    },
    bedding: {
      required: boolean,
      quantity: number
    },
    pushchair: {
      required: boolean,
      quantity: number, // if >1, type can be different for each pushchair
      type: string, // value either pram, pushchair, stroller, double_pushchair
    },
    highchair: {
      required: boolean,
      quantity: number
    },
    bouncy_chair: {
      required: boolean,
      quantity: number
    },
    sling: {
      required: boolean,
      quantity: number
    },
    stairgate: {
      required: boolean,
      quantity: number, // max of 2
      details: [
        {
          location: string, // for each stairgate
          dimensions: { // for each stairgate
            width: float,
            height: float,
            depth: float,
            measurement: string // either cm, m, inch etc.
          }
        }
      ]
    },
    play_mat: {
      required: boolean,
      quantity: number
    },
    baby_monitor: {
      required: boolean,
      quantity: number
    },
    baby_bath: {
      required: boolean,
      quantity: number
    },
    bath_seat: {
      required: boolean,
      quantity: number
    },
    steriliser: {
      required: boolean,
      type: string // electric or microwave
    },
    bottles: {
      required: boolean, 
      quantity: number // max of 6
    },
    toys: {
      required: boolean, 
      belongs_to: string, // belongs to a child by name
      preferences: string // paragraph
    },
    books: {
      required: boolean,
      belongs_to: string, // belongs to a child by name
      preferences: string // paragraph
    },
    changing_mat: {
      required: boolean,
      quantity: number
    },
    potty: {
      required: boolean,
      quantity: number
    },
    other_items: {
      body: string // paragraph
    },
    comments: {
      body: string // paragraph
    },
  },
  clothing: {
    maternity: {
      required: string,
      size: string,
    },
    children: {
      small_baby: {
        required: boolean,
        gender: string, // boy, girl, unisex
      },
      newborn: {
        required: boolean,
        gender: string, // boy, girl, unisex
      }, 
      zero_to_three_months: {
        required: boolean,
        gender: string, // boy, girl, unisex
      },
      three_to_six_months: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      six_to_nine_months: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      nine_to_twelve_months: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      twelve_to_eighteen_months: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      eighteen_to_twentyfour_months: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      two_to_three_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      three_to_four_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      four_to_five_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      five_to_six_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      six_to_seven_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      seven_to_eight_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      eight_to_nine_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      nine_to_ten_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      ten_to_eleven_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      eleven_to_twelve_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      twelve_to_thirteen_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      thirteen_to_fourteen_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      fourteen_to_fifteen_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
      fifteen_to_sixteen_years: {
        required: boolean,
        gender: string // boy, girl, unisex
      },
    },
    comments: {
      body: string
    }
  },
  shoes: {
    children: {
      c3: {
        required: boolean,
        type: string // shoes or socks
      },
      c4: {
        required: boolean,
        type: string // shoes or socks
      },
      c5: {
        required: boolean,
        type: string // shoes or socks
      },
      c6: {
        required: boolean,
        type: string // shoes or socks
      },
      c7: {
        required: boolean,
        type: string // shoes or socks
      },
      c8: {
        required: boolean,
        type: string // shoes or socks
      },
      c9: {
        required: boolean,
        type: string // shoes or socks
      },
      c10: {
        required: boolean,
        type: string // shoes or socks
      },
      c11: {
        required: boolean,
        type: string // shoes or socks
      },
      c12: {
        required: boolean,
        type: string // shoes or socks
      },
      c13: {
        required: boolean,
        type: string // shoes or socks
      },
      size_1: {
        required: boolean,
        type: string // shoes or socks
      },
      size_2: {
        required: boolean,
        type: string // shoes or socks
      },
      size_3: {
        required: boolean,
        type: string // shoes or socks
      },
      size_4: {
        required: boolean,
        type: string // shoes or socks
      },
      size_5: {
        required: boolean,
        type: string // shoes or socks
      },
      size_6: {
        required: boolean,
        type: string // shoes or socks
      },
      size_7: {
        required: boolean,
        type: string // shoes or socks
      },
      size_8: {
        required: boolean,
        type: string // shoes or socks
      },
      size_9: {
        required: boolean,
        type: string // shoes or socks
      },
    },
    comments: {
      body: string
    },
  },
  notes: string, // made by the user on the app - paragraph
  created_at: date_time,
  updated_at: date_time,
}

const comment = {
  id: string,
  referral_id: string, // fk
  body: string,
  author: string,
  created_at: date_time,
  updated_at: date_time,
}