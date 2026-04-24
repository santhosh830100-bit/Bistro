import { LucideIcon } from "lucide-react";

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "Starters" | "Mains" | "Desserts" | "Drinks";
  image: string;
  tags?: string[];
}

export const MENU_ITEMS: FoodItem[] = [
  {
    id: "1",
    name: "Burger",
    description: "8oz Wagyu beef patty, black truffle aioli, aged gruyere, caramelized onions, artisan brioche bun.",
    price: 450.0,
    category: "Mains",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX0-2Xzob-4CTEPQT7CLdVxGcszIljessqW3qbe-LYl2usOZHtmZbdW7xh-9nlHzHWLZ3oucDEH8_Qj6LNtQKNOsP3P9aTLJlOnBtwXT3z2Cl6jJWITeQ7Zge5LWk4Hv5P1CcSVt5vFG2YH51jWB8BARC7wO8oM_BAM9QftcME_hJSXfYYX-MBs24GoGurqsQLRDS66tpD80NKBXBd6G2864D5veezG14qzbIKGdVNWwZ0_yD1LiO7-W8tQaaIg1E7_pC5I9rnm1A",
    tags: ["Chef's Pick", "Beef"]
  },
  {
    id: "2",
    name: "Pizza",
    description: "San Marzano tomato sauce, fresh buffalo mozzarella, torn basil, extra virgin olive oil.",
    price: 600.0,
    category: "Mains",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzgY0XJANHIllYYtzS23vf93r1PFbL-GBg0-zK4Ce40j4dCtxawa3WatA8F3fTQaPnN4AGkAbijhebdxSBDpQrbhzJFvJGPzNHkGnwvNg5w91uAz9f0McZnRLcJi_H_yK-yn3eUu52MwF2lHS3P4WSAd3ZLyecLzgen0FOgQhsJBhl43r9JA6NeeWOd91tINuCW_k3-j2dAXUhYnE8XW3NoAP004FcJH6iCoi3GqL30E-YGTGgHg7NaU9EWp_FxaUVz1wN4DVKthU",
  },
  {
    id: "3",
    name: "Pasta",
    description: "Handmade ribbon pasta, foraged mushrooms, garlic confit, white wine butter sauce.",
    price: 550.0,
    category: "Mains",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmVnpneWY3PBENgRY4puMg71AxSOCP0Ik659S9rx3fWNiw1ypvEKqjvFIISypfdljg1B51H1-iOdeOv-t_mStuU18V9AE0kFAAcJ03kK9v8KvCRzVWWe8EsW8uJbUCPQCvLOuzW0w8mua-ISi1Jk443ftEtNaHpHemkkV1vKhowNqkpsRj1W_h_EFY77lxPoMgPe-SrcJ9MkkpX2uuJVWKDPKJnALlH335As4iNBh1v2wKsqwGBhpFJCkwsIX53QiNFWaX9Wj1v1M",
  },
  {
    id: "4",
    name: "Steak Dip",
    description: "14-hour smoked brisket, provolone, crispy shallots on toasted baguette with rich au jus.",
    price: 650.0,
    category: "Starters",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQfiidPx299EVyloURDccrwnjXI_N4Oix1qa0i2X6Ncxy7h_bLdHQt0435hsOcLiKLc6QjWj9cRVUDrrkN6DsejmQg0boqtUrC8X1MXowNp0keyuLB3mCTHjGDDEDdZk1irDvR93ayVtlJ6jnC68liJa49euDzpJzpdU_HUSYVyDqTf6oUUyc20UKMzoBvmqCpehgRVGQCs-bjnQYia4lMWZ84uUx4-S6UMgzlCQZmMQYenweA4WPjWcqiTpq78am-kCCRTPw_E1U",
  },
  {
    id: "5",
    name: "Fries",
    description: "Hand-cut double-fried potatoes, white truffle oil, parsley, shaved parmesan reggiano.",
    price: 250.0,
    category: "Starters",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6b_5x7sxWiJB-b5vJZIBJfLfm8gvAsnUj2K9HSrkZacNmjBKHr4mjIzUTmWx5dlTubTKTeC4uTtlVtuUVgkoCNQHIH2VX5ImCtu5ZFc_znQ4FsuF8X2qIzo-4-O1Mo2J17s4CKcmAMxmANSA5slkpGR0FHThTZbmL9Jbv5Y_NEQ1lWiIDJqMxrAte4E16gStUJcgeo0Obdhf-x0VO5i2tvH6JytJOLPGpmDZ3SledMhxkGz1KmdLtiDmj-Hyx9vuPHDJhSFQ82zA",
  },
  {
    id: "6",
    name: "Ice Cream",
    description: "Classic vanilla bean ice cream with a hint of sea salt and bourbon caramel drizzle.",
    price: 180.0,
    category: "Desserts",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn1abneceiCa6Pdm3peInNZg2gpwz2XD2xOyhMWeBXnwGeoW-BDLOUmj_EPa3FEaIfvfvknz9nz8mHWEa2EhbvDx2RU4jONqWkinFVuIELZhjHQUUcSY1D29nw1k6qZ5_8owwv-tRPfiW8doCl3Oe01e9SMVpaAcPlySEeizhgPOpvDAPPTniMjZDb6PU4BU77fU3FvBrH8jfZNSq13o9EkACy5gEho2J_I5zl8hBtvbC-YtydBZYXlCQto-G9yZwJld1MAgeMr_g",
  },
  {
    id: "7",
    name: "Coffee",
    description: "Freshly brewed specialty coffee from highland beans.",
    price: 120.0,
    category: "Drinks",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL5kwJ0zWHty5x55OkC3du7WVVhJOH6pBWBK7BgzI9Mjtn6Z9AE-cALZdPUQoeobOD3B8mKK_rPrxFmKXICCFnpzdYP3JSYczR5jByfIsSXbCWaHhiEPV5rnVcQp6l6cGpYMoMnnvLn2oIBDRuT3f2qNQTHxaBUtbORFnwQdFa2M4VZtXr_r4JrE3HApVwHJ05xu8PDJNHogHzI5jZ1Gzcj01HjM_tdTHIVxY8YtLlyaX9oJiM069Q1JauNVxX0YNsinrB_M-pWQs",
  }
];
