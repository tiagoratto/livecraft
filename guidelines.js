var block = {
	materialId : 0,
	stateId : 1,
	nutrients : [
		{
			id : 0,
			ammount : 20
		},
		{
			id : 1,
			ammount : 10
		},
		{
			id : 2,
			ammount : 7
		}
	],
	plants : [
	]
};

var materials = [
	{
		id : 0,
		name : "Rock",
		porosity : 0,
		allowedStates : [
			{
				stateId : 0
				nutrientCapacity : 10,
				nutrientTypes : [
					{
						nutrientId : 1,
						maxQuantity : 3,
						holdingPriority : 0
					},
					{
						nutrientId : 2,
						maxQuantity : 7,
						holdingPriority : 0
					}
				]
			},
			{
				stateId : 1
				nutrientCapacity : 50,
				nutrientTypes : [
					{
						nutrientId : 0,
						maxQuantity : 20,
						holdingPriority : 1
					},
					{
						nutrientId : 1,
						maxQuantity : 30,
						holdingPriority : 2
					},
					{
						nutrientId : 2,
						maxQuantity : 15,
						holdingPriority : 2
					}
				]
			}
		],
	}
];

var materialStates = [
	{
		id : 0,
		name : "liquid"
	},
	{
		id : 1,
		name : "solid"
	},
	{
		id : 2,
		name : "gas"
	}
]

var nutrients = [
	{
		id : 0,
		name : "water"
	}
	{
		id : 1,
		name : "mineral salt"
	},
	{
		id : 2,
		name : "calcium"
	},
	{
		id : 3,
		name : "protein"
	}
];

var foods = [
	{
		id : 0,
		name : "Meat",
		nutrients : [
			nutrientId : 2,
			quantity : 10
		]
	}
];

var creature {
	id : 0,
	name : "Example Mob",
	motion : {
		motionType : 2,
		speed : 1
	},
	foods : [
		{
			foodId : 0,
			priority : 0,
			digestion : 10
		}
	],
	nutrients : [

	],
	excrements : [
	],
	supplies : [
	]

};

var motionTypes = [
	{
		id : 0,
		name : "None"
	},
	{
		id : 1,
		name : "Crawl"
	},
	{
		id : 2,
		name : "Walk"
	},
	{
		id : 3,
		name "Fly"
	},
	{
		id : 4,
		name : "Swim"
	}
];
