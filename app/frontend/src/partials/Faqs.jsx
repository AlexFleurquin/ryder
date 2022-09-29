import React from 'react';

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h3 className="h3 text-slate-900 dark:text-slate-100">FAQs</h3>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium text-slate-900 dark:text-slate-100">Comment fonctionne l'abonnement Ryder ?</h4>
                <p className="text-slate-500">
                L'abonnement Ryder vous donne accès à votre propre vélo électrique connecté, à notre service de conciergerie dédiée accessible via l'application ainsi qu'à une assurance vol.
                <br />Notre équipe est à votre disposition pour que vous puissiez toujours compter sur votre Ryder sans frais additionnels.
                <br />Pour 75€/mois sans engagement, déplacez-vous en toute sérénité et faites de chaque trajet un plaisir avec Motto.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium text-slate-900 dark:text-slate-100">Comment se passe la récupération du vélo ? Dois-je monter le vélo ?</h4>
                <p className="text-slate-500">
                  Au cours du processus d'inscription, vous pouvez choisir de venir chercher votre vélo à notre atelier sur les créneaux proposés ou de vous le faire livrer à la date et l'adresse de livraison que vous préférez pour 65€.
                  <br />Notre équipe se déplacera pour vous présenter votre vélo. Vous n'avez rien d'autre à faire.
                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium text-slate-900 dark:text-slate-100">Comment recharger mon vélo Ryder ?</h4>
                <p className="text-slate-500">
                Vous disposez de deux options pour recharger votre Ryder.
                <br />Emmenez la batterie partout avec vous et branchez la à n'importe quelle prise secteur chez vous, au bureau ou même dans votre café favori.
                <br />Vous pouvez aussi brancher votre Motto directement à une prise secteur et le tour est joué.
                <br />Le chargeur est fourni avec le vélo, la durée de chargement total est de 3 heures.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium text-slate-900 dark:text-slate-100">Puis-je partager mon vélo Ryder avec un proche ?</h4>
                <p className="text-slate-500">
                  Notre vélo Ryder est à usage personnel.
                  Si vous souhaitez en faire profiter vos proches, nous vous invitons à leur communiquer votre code de parrainage.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium text-slate-900 dark:text-slate-100">Est-il possible de réparer soi-même son vélo ?</h4>
                <p className="text-slate-500">
                  L'expérience Ryder se vit pleinement.
                  Toutes les réparations et tous les remplacements doivent être effectués par des mécaniciens Motto ou des partenaires certifiés. Il suffit de réserver une réparation par l'intermédiaire de l'application et un de nos mécaniciens se rendra chez vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
