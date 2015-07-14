# remove last to last, deployed artifacts.
rm -rf public_old

# archive last deployed artifacts
mv public public_old

# chekout the app to deploy
git clone https://github.com/amoebagroup/ui-amoeba.social.git

# moove the clientapp to public folder
mv ui-amoeba.social/public public

# cleanup
rm -rf ui-amoeba.social/
