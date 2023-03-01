from application import db, bcrypt

class Link(db.Model):
    __tablename__ = 'links'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100))
    url = db.Column(db.String(100))
    person = db.Column(db.Integer(), db.ForeignKey('types.id'))

class Types(db.Model):
    __tablename__ = 'types'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100))
    sex = db.Column(db.String(100))
    type = db.Column(db.String(100))
    mbti = db.Column(db.String(100))
    extrovertIntrovert = db.Column(db.String(100))
    temperment = db.Column(db.String(100))
    quadra = db.Column(db.String(100))
    sensoryModality = db.Column(db.String(100))
    deModality = db.Column(db.String(100))
    oD = db.Column(db.String(100))
    energyInfo = db.Column(db.String(100))
    function1 = db.Column(db.String(100))
    function2 = db.Column(db.String(100))
    deciderNeed = db.Column(db.String(100))
    deciderLetter = db.Column(db.String(100))
    observerNeed = db.Column(db.String(100))
    observerLetter = db.Column(db.String(100))
    animal1 = db.Column(db.String(100))
    animal2 = db.Column(db.String(100))
    animal3 = db.Column(db.String(100))
    animal4 = db.Column(db.String(100))
    playModality = db.Column(db.String(100))
    sleepModality = db.Column(db.String(100))
    blastModality = db.Column(db.String(100))
    consumeModality = db.Column(db.String(100))
    observerAxis = db.Column(db.String(100))
    deciderAxis = db.Column(db.String(100))
    createdAt = db.Column(db.Integer())
    updatedAt = db.Column(db.Integer())
    image = db.Column(db.String(500))
    tag = db.Column(db.String(100))
    links = db.relationship('Link', backref='related_links', lazy=True, passive_deletes=True)

class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(35))
    password_hash = db.Column(db.String(length=60))
    email = db.Column(db.String(100))
    customer_id = db.Column(db.String(100))
    subscription_id = db.Column(db.String(100))

    @property
    def password(self):
        return self.password

    @password.setter
    def password(self, plain_text_password):
        self.password_hash = bcrypt.generate_password_hash(plain_text_password).decode('utf-8')

    def check_password_correction(self, attempted_password):
        return bcrypt.check_password_hash(self.password_hash, attempted_password)