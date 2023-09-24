export const PROJECT_COLUMNS = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Supplier name",
    dataIndex: "supplierName",
    key: "supplierName",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Price per ton",
    dataIndex: "pricePerTon",
    key: "pricePerTon",
  },
  {
    title: "Volume in Ton",
    dataIndex: "volumeInTon",
    key: "volumeInTon",
  },
  {
    title: "Distribution Weight",
    dataIndex: "distributionWeight",
    key: "distributionWeight",
  },
];

export const PORTFOLIO_COLUMNS = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Supplier name",
        dataIndex: "supplierName",
        key: "supplierName",
      },
      {
        title: "Country",
        dataIndex: "country",
        key: "country",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Order volume",
        dataIndex: "weight",
        key: "weight",
      },
]

export const PROJECTS_DATA = [
  {
    id: "1",
    name: "EverGreen CarbonScape",
    country: "Germany",
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg",
    pricePerTon: 650,
    volumeInTon: 15,
    distributionWeight: 0.05,
    supplierName: "Klom",
    earliestDelivery: new Date("2023-09-01"),
    description:
      'The "EverGreen CarbonScape" project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems.\nThrough reforestation, afforestation, and sustainable forest management, we aim to create robust carbon sinks while promoting biodiversity, engaging local communities, and preventing deforestation.',
  },
  {
    id: "2",
    name: "VerdeCarbon",
    country: "India",
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Mineralisation/ben-karpinski-ctWw2S9VqOI-unsplash-min.jpg",
    pricePerTon: 200,
    volumeInTon: 900,
    distributionWeight: 0.1,
    supplierName: "Klom",
    earliestDelivery: new Date("2022-04-01"),
    description:
      "A transformative carbon credit project dedicated to revitalizing ecosystems and fighting climate change.\nBy strategically planting native trees and adopting sustainable forest practices, we're creating a potent solution that not only absorbs carbon dioxide but also nurtures biodiversity and empowers local communities.\nThrough verified carbon credits, VerdeCarbon is a beacon of environmental stewardship and positive impact.",
  },
  {
    id: "3",
    name: "SustainaForest Carbon",
    country: "Brazil",
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Afforestation+reforestation/marita-kavelashvili-ugnrXk1129g-unsplash-min.jpg",
    pricePerTon: 50.85,
    volumeInTon: 1500,
    distributionWeight: 0.15,
    supplierName: "EcoCarbon",
    earliestDelivery: new Date("2024-01-01"),
    description:
      'The "SustainaForest Carbon" project tackles climate change by restoring and protecting vital forest ecosystems.\nThrough reforestation, sustainable management, and community engagement, we\'re creating resilient carbon sinks that benefit the environment, biodiversity, and local communities.\nVerified carbon credits will be generated as we capture CO2, fostering a sustainable future for all.',
  },
  {
    id: "4",
    name: "EcoRespire",
    country: "India",
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Climate+fund/climate-fund.png",
    pricePerTon: 25,
    volumeInTon: 1100,
    distributionWeight: 0.25,
    supplierName: "Pure Planet",
    earliestDelivery: new Date("2023-05-15"),
    description:
      "A project dedicated to revitalizing our planet by rejuvenating and conserving critical forest ecosystems.\nBy planting native trees, practicing sustainable forest management, and engaging with local communities, EcoRespire aims to capture carbon dioxide, promote biodiversity, and empower communities.\nVerified carbon credits will be generated, offering a sustainable solution to combat climate change while fostering environmental and societal well-being.",
  },
  {
    id: "5",
    name: "EverGreen Carbon",
    country: "Egipt",
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Renewable+energy/andreas-gucklhorn-Ilpf2eUPpUE-unsplash-min.jpg",
    pricePerTon: 10.5,
    volumeInTon: 16000,
    distributionWeight: 0.45,
    supplierName: "Carbon Solutions",
    earliestDelivery: new Date("2023-12-01"),
    description:
      'The "EverGreen Carbon" project is a transformative carbon credit initiative aimed at restoring and maintaining vital forest ecosystems.\nThrough reforestation, afforestation, and sustainable forest management, we will sequester significant carbon dioxide, enhance biodiversity, empower local communities, and combat deforestation. Verified carbon credits will be generated, reflecting the project\'s positive impact on the environment. Join us in creating a sustainable and greener future with EverGreen Carbon.',
  },
];

export const EXAMPLE_RESULTS = [3, 6, 9, 15, 27];
