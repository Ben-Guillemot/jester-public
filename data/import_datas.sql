BEGIN;

INSERT INTO "groupe" ("name", "description") VALUES 
('Jester Soul', 'Jester Soul est un groupe de Stoner/Heavy-Blues originaire d’Ollioules dans le Var, en France.
Le groupe s’est formé en 2017 mais, après de multiples changements de line-up, c’est en 2020 que la formation actuelle prit forme. 
Et c’est ainsi que le groupe commença à prendre de l’ampleur, à peaufiner ses riffs et son set.
Jester Soul joue un rock graveleux, puissant et entrainant, parfois bourru parfois groovy. Un style qui rappelle les ambiances chaudes des bars douteux de Palm Desert en Californie, berceau du Stoner-Rock.');

INSERT INTO "member" ("name", "instrument", "description", "image", "groupe_id") VALUES
('Anne', 'Singer', 'Grâce à une voix puissante Anne vous fera partir dans les bas fonds du stoner', '/img/anne3.jpg', 1),
('Mika', 'Lead guitar', 'Des solos à vous envoyer sur Mars', '/img/micka2.jpeg', 1),
('JL', 'Guitar', 'Le riff maker du groupe', '/img/jl2.jpeg', 1),
('Ju', 'Bass guitar', 'Un son qui vous fait vibrer les os', '/img/ju3.jpeg', 1),
('Ben', 'Drum', 'Le métronôme du groupe', '/img/ben2.jpeg', 1);

COMMIT;